import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Person from "./pages/Person.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Person />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
