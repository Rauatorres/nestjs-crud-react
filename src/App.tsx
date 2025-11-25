import ClientPage from "./pages/clients";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages/products";
import OrderPage from "./pages/orders";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />}/>
        <Route path="/produtos" element={<ProductsPage />}/>
        <Route path="/pedidos/:clientId" element={<OrderPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
