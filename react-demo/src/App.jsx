// import "./App.css";
// import Button from "./components/common/Button";

// function App() {
//   let username = "Naresh";
//   const skills = ["Java", "python"];

//   const printSomething = () => {
//     console.log("Inside app");
//   };

//   return (
//     <>
//       <Button
//         fullname={"Naresh S"}
//         age={24}
//         skills={skills}
//         address={{ state: "TN", city: "Erode" }}
//       >
//         <p>Something</p>
//         <p>Something</p>
//         <p>Something</p>
//       </Button>

//       <Button
//         fullname={"Vasu"}
//         age={24}
//         skills={skills}
//         address={{ state: "TG", city: "HYD" }}
//         abcd={printSomething}
//       >
//         <p>Something</p>
//         <p>Something</p>
//         <p>Something</p>
//       </Button>

//       <p className="title" style={{ backgroundColor: "blue" }}>
//         hello {username}
//       </p>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/headers/Header";
import LoginPage from "./pages/LoginPage";
import ProductList from "./components/common/ProductList";
import Productdetails from "./pages/Productdetails";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products/:pid" element={<Productdetails />} />
            <Route path="/products" element={<ProductList />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
