import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import ProductMain from "./ProductsMain";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Form />} />
      </Routes>
      <ProductMain />
    </>
  );
}

export default App;