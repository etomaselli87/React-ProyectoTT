//COMPONENTE QUE HACE EL MAPEADO

import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";


export const CartList = () => {
    const { cart } = useCart();

    return (
    <>
        <div className="cart-item-container" >
            {cart.map((element) => (
                //Se pasan props para luego desestructurar
                <CartItem key={element.id} item={element} />
            ))}
        </div>
    </>
    );
};