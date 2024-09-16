import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ]);
    const [total, setTotal] = useState(0);

    // Add a product to the cart
    const addProduct = (product) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
            let updatedCart;

            if (existingItemIndex >= 0) {
                updatedCart = prevCart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            const updatedTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return updatedCart;
        });
        setTotal(total + product.price);
    };

    // Remove a product from the cart
    const removeProduct = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            const updatedTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return updatedCart;
        });
        setTotal(total - (cart.find(item => item.id === productId)?.price || 0));
    };

    return (
        <ProductContext.Provider value={{ cart, products, total, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
