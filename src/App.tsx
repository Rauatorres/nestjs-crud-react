import ClientPage from "./pages/clients";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages/products";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />}/>
        <Route path="/produtos" element={<ProductsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
