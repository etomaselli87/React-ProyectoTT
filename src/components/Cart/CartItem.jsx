//COMPONENTE QUE MUESTRA LA TARJETA EN EL CARRITO

import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

//Desestructurar props, reutilizar item
export const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        //spread operator para pasar todas las partes
        <Item {...item}>
            <button
                className="btn bg-delete primary"
                onClick={() => removeItem(item.id)}  
            >
                Eliminar
            </button>
        </Item>
    );
};