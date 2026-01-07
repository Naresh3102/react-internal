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

import Header from "./components/headers/header";

const App = () => {
  const name = "GB";
  return (
    <div>
      <h1>Main page</h1>
      <Header name={name} />
    </div>
  );
};

export default App;
