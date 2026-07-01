/* -------------------------------------------------------------------------- */
/*           TODAS LAS FUNCIONES QUE SE VAN A CONECTAR CON FILESTORE          */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                              VAN A HACER EL CRUD                           */
/* -------------------------------------------------------------------------- */

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/config";

//Todas las funciones van a utilizar esta coleccion.
//La hacemos global y que todas la usen en vez defirla varias veces
// Creamos la referencia a la coleccion: en mi caso se llama "products"
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */

// PETICION ASICRONICA A FILESTORE - SIMIL FETCH (res-data-catch-finally) pero lo hace Filestore

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    //Formato de producto por el id (automático) generado de filestore que está por fuera
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
// Funcion que SOLO pide un dato
export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento, referencia el producto
    const productRef = doc(db, "products", id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe, sino => vacio
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                          SI FILTRAMOS POR CATEGORY                         */
/* -------------------------------------------------------------------------- */
export const getByCategory = async (category) => {
  try {
    let queryRef;

    //Si category no viene undefined (truthy)
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);

    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};


/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */

//productData ==> parametro de la funcion para recibirlo de otro lado
export const createProduct = async (productData) => {
  try {

    //Usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para algo
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};