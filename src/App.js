// import './App.css';
// import { a, b } from './components/Products/Products';
// import Products from './components/Products/Products';
// import { useState } from 'react';
// import CartContext from './context/CartContext';
// function App() {
//   // state variable
//   // inc
//   // dec
//   let [cart, setCart] = useState({});
//   function increaseQuantity(product) {
//     const newCart = { ...cart };
//     // if(cart[product.id])
//     if (!newCart[product.id]) {
//       newCart[product.id] = {
//         ...product,
//         quantity: 0
//       };
//     }
//     newCart[product.id].quantity += 1;
//     console.log(newCart);
//     setCart(newCart);
//   }

//   function decreaseQuantity(product) {
//     const newCart = { ...cart };
//     if (!newCart[product.id]) return;
//     newCart[product.id].quantity -= 1;
//     if (newCart[product.id].quantity <= 0) {
//       delete newCart[product.id];
//     }
//     setCart(newCart);
//   }

//   console.log(a, b);
//   return (
//     <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
//       <div className="App">
//         <Products  />
//       </div>
//     </CartContext.Provider>
//   );
// }

// export default App;

// // {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}

// // button
// // - 1 +

// // let a = {b:10, c:20};
// //a.b = 30;
// // let b = {...a};

// // a => 1234
// // a => 12

// // {cart: cart, increaseQuantity: increaseQuantity}


// // Global Parent
// // Global state
// // way to manipulate the state
// // way to consume the state


// //  Provider
// //  Store
//     // State
//     // Reducer
// // Action
// // Dispatch
import React from 'react';
import { CartProvider } from '/Users/siddharthbaleja/Desktop/code/untitled folder/cart/src/Context/CartContext.js';
import AddToCart from '/Users/siddharthbaleja/Desktop/code/untitled folder/cart/src/Components/AddToCart/AddToCart.js';
import Cart from '/Users/siddharthbaleja/Desktop/code/untitled folder/cart/src/Components/AddToCart/CartComponent.js';

// Sample products
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
];

function App() {
    return (
        <CartProvider>
            <div>
                <h1>Products</h1>
                {products.map((product) => (
                    <AddToCart key={product.id} product={product} />
                ))}
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
