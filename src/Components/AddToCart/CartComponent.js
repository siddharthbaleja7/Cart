import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

function Cart() {
    const { cart } = useContext(CartContext);
    const cartItems = Object.values(cart);

    if (cartItems.length === 0) {
        return <div>The cart is empty.</div>;
    }

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    ); 
}

export default Cart;
