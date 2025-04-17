DROP TABLE IF EXISTS public.products;

-- Create the products table
CREATE TABLE public.products (
    id serial PRIMARY KEY,
    "name" varchar NOT NULL
);

-- Create an index on the name column
CREATE INDEX products_name_idx ON public.products (name);