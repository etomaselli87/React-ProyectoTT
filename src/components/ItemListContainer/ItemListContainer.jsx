import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProductById, getProducts } from "../../services/productService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    // SACAMOS EL FETCH QUE PETICIONA AL JSON. PARA HACER LA CONEXION CON FILESTORE (getProducts)
    // fetch("/data/products.json")
    //   .then((res) => res.json())

    //getProducts() o por category====>
      //Usamos la funcion con 2 usos: Trae todo o filtra si category existe
      getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);
  //👉No olvidar agregar [category] como variable de dependencias para que se renderice nuevamente 
  // el container si cambia category

  //console.log(products);


  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};