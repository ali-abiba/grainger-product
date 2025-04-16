package com.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductControllers {
    
    @GetMapping('/product')
    public string getProduct() {
        return "This is a product";
    }
}
