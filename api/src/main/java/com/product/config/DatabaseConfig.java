package com.product.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        // Read database connection details from environment variables
        String dbHost = System.getenv().getOrDefault("DB_HOST", "localhost");
        String dbPort = System.getenv().getOrDefault("DB_PORT", "5432");
        String dbName = System.getenv().getOrDefault("DB_NAME", "product");
        String dbUser = System.getenv().getOrDefault("DB_USER", "admin");
        String dbPassword = System.getenv().getOrDefault("DB_PASSWORD", "admin");

        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(String.format("jdbc:postgresql://%s:%s/%s?connectTimeout=10", dbHost, dbPort, dbName));
        dataSource.setUsername(dbUser);
        dataSource.setPassword(dbPassword);

        // Test the connection with a timeout and retry logic
        int maxRetries = 3;
        int retryDelay = 1000;

        System.out.println("Attempting to connect to database URL:" + dataSource.getUrl());
        for (int attempt = 1; attempt <= maxRetries; attempt++) {
            try (Connection connection = DriverManager.getConnection(
                    dataSource.getUrl(),
                    dataSource.getUsername(),
                    dataSource.getPassword())) {
                // Connection successful
                System.out.println("Successfully connected to the database on attempt " + attempt + ".");
                break;
            } catch (SQLException e) {
                if (attempt == maxRetries) {
                    System.err.println("Failed to connect to the database after " + maxRetries + " attempts.");
                    e.printStackTrace();
                    System.exit(1); // Exit the application
                } else {
                    System.err.println("Database connection failed. Retrying in " + retryDelay / 1000 + " seconds...");
                    try {
                        Thread.sleep(retryDelay);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw new RuntimeException("Retry interrupted", ie);
                    }
                }
            }
        }

        return dataSource;
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}