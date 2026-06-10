import './App.css'
import { Routes, Route } from 'react-router-dom'
// import { Header } from './components/Header/Header'
// import { Footer } from './components/Footer/Footer'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/Cart/CartView'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";


function App() {


  return (
    <>
        <Routes>
          /* ----------------------------- RUTAS PÚBLICAS ----------------------------- */
          <Route element={<PublicLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            {/* Ruta para filtrar por category */}
            <Route path="category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
          </Route>

          <Route path="admin/login" element={<Login />} />
          /* ---------------------------------- ADMIN --------------------------------- */
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
          }
        >
            {/* Si el admin esta logueado, redirige a la ruta /admin/dashboard */}
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="/new" element={<ProductFormContainer />} />
            <Route path="/products/success/:id" element={<ProductSuccess />} />
          </Route>
        </Routes>
    </>
  );
};

export default App
