//1. Create Context
//2. Custom Hook => CartContext
//3. Provider

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */


const CartContext = createContext();


/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);


    //Evalua existencia: retorna booleano
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };


    //Agregar al carrito
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya existe en el carrito 🚨");
            return
        }

        setCart([...cart, item]);
        alert("Producto Agregado al Carrito 🎉");
    };


    //Eliminar del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto Eliminado ✅");
    };


    //Vaciar Carrito
    const clearCart = () => {
        setCart([]);
    };


    //Total de items en carrito (sin quantity)
    const getTotalItems = () => {
        return cart.length;  
    };


    //Total a Pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };


    //Checkout
    const checkout = () => {
        alert("Su compra ha sido realizada 🎁");
        clearCart();
        navigate("/");
    };


    const values = {
        addItem,
        clearCart,
        removeItem,
        getTotalItems,
        getCartTotal,
        checkout
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};