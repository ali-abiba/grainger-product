import React, { useEffect, useState } from 'react';
import { get, post } from 'src/shared/http';

interface Product {
    id?: number,
    name: string
}

export default function ProductList() {
    const [productList, setProductList] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState('');

    const addNewProduct = () => {
        if (newProduct.trim().length > 0 ) {
            post('/product', {name: newProduct}).then(() => {
                setNewProduct('');
                loadProducts();
            });
        }
    }
    
    const loadProducts = () => {
        get('/product').then((response: Array<Product>) => {
            setProductList(response);
        });
    }

    useEffect( () => {
        loadProducts();
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <h2>Add a product</h2>
            <input onChange={(event) => setNewProduct(event.target.value)} value={newProduct}></input>
            <button onClick={() => addNewProduct()}>Add Product</button>

            <h2>Product List</h2>
            { productList.map((val, i) => {
                return <div key={i}>{val.name}</div>
            })}
        </div>
    )
}