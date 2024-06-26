import React, { createContext, useState } from 'react';

const CartContext = createContext({
    cart: {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {}
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    const increaseQuantity = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart[product.id];
            if (existingProduct) {
                return {
                    ...prevCart,
                    [product.id]: {
                        ...existingProduct,
                        quantity: existingProduct.quantity + 1,
                    },
                };
            } else {
                return {
                    ...prevCart,
                    [product.id]: { ...product, quantity: 1 },
                };
            }
        });
    };

    const decreaseQuantity = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart[product.id];
            if (existingProduct.quantity > 1) {
                return {
                    ...prevCart,
                    [product.id]: {
                        ...existingProduct,
                        quantity: existingProduct.quantity - 1,
                    },
                };
            } else {
                const { [product.id]: _, ...newCart } = prevCart;
                return newCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
