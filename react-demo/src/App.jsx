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

import Counter from "./components/common/Counter";
import Header from "./components/headers/Header";
import { AuthProvider } from "./context/AuthContext";
import { NameProvider } from "./context/NameContext";

const App = () => {
  return (
    <>
      <NameProvider>
        <AuthProvider>
          <h1>Main page</h1>
          <Header />
          <Counter />
        </AuthProvider>
      </NameProvider>
    </>
  );
};

export default App;
