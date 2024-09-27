import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], totalItems: 0, totalPrice: 0 });
    const clearCart = () => {
        setCart(prevCart => ({
            ...prevCart,
            items: [],
            totalItems: 0,
            totalPrice: 0,
        }));
    };
    // Add or update an item in the cart
    const updateCart = (newItem) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.items.findIndex(item => item.name === newItem.name);
            let updatedItems;

            if (existingItemIndex >= 0) {
                updatedItems = prevCart.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + newItem.quantity, image: newItem.image }
                        : item
                );
            } else {
                updatedItems = [...prevCart.items, newItem];
            }

            const totalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return { ...prevCart, items: updatedItems, totalItems, totalPrice };
        });
    };

    // Update the quantity of a specific item
    const updateItemQuantity = (name, quantity) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items.map(item =>
                item.name === name
                    ? { ...item, quantity: Math.max(item.quantity + quantity, 0) }
                    : item
            ).filter(item => item.quantity > 0);

            const totalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return { ...prevCart, items: updatedItems, totalItems, totalPrice };
        });
    };


    const removeItem = (name) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items.filter(item => item.name !== name);
            const totalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return { ...prevCart, items: updatedItems, totalItems, totalPrice };
        });
    };

    return (
        <CartContext.Provider value={{ cart, updateCart, updateItemQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
