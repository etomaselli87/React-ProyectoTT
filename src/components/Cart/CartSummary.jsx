//COMPONENTE QUE HACE/MUESTRA RESUMEN DEL PRECIO TOTAL Y FIN DE COMPRA

import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
    //Desestructurar del contexto useCart estas funciones para usar y guardar en variable 'total'
    const {getCartTotal, checkout} = useCart();
    
    const total = getCartTotal();

    return (
        <>
            <p>TOTAL A PAGAR: 👉 ${total}</p>
            <button className="btn bg-success primary" onClick={checkout}>
                FINALIZAR COMPRA
            </button>
        </>
    );
};