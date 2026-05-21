import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";


export const CartView = () => {
    const {cart} = useCart();

    return (
        <section className= "cart-container">
            <h1>Tu Carrito de Compras 🛒</h1>

        {cart.length ? ( 
            <>
                <CartList />
                <CartSummary />
            </> 
        ) : (
            <>
                <p className="empty-cart">El Carrito está Vacío 😯</p>
                <Link to="/" className="btn primary bg-primary">VOLVER</Link>
            </>
        )}
        </section>
    );
};