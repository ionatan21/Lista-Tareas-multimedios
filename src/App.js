import { useEffect, useState } from "react";
import "./App.css";
import Ccard from "./components/ccard";
import Tarea from "./components/Tareas";
function My_button() {
  return <button>Click me!</button>;
}

function Mensaje(props) {
  return <h1>Hola, {props.name} 😊</h1>;
}

function App() {
  //const Now = new Date();
  //const a = 10;
  //const b = 20;
  // console.log(Now, a + b);

  const [NuevoItem, setNuevoItem] = useState([
    { name: "Revisar material x", done: false },
    { name: "Revisar material y", done: false },
    { name: "Revisar material z", done: false },
  ]);

  function crearTarea(nuevaTarea) {
    setNuevoItem([...NuevoItem, { name: nuevaTarea, done: false }]);
  }

  const eliminarTarea = (index) => {
    setNuevoItem(NuevoItem.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(NuevoItem));
  }, [NuevoItem]);

  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <div className="App">
      {/*  <img src={logo} className="App-logo" alt="logo" />
        <p>React-app de Jonatan 😺</p>

      
        <p>{Now.toString()}</p>
        <h1>{a+b}</h1>
 
          
        <Mensaje name="Usuario" />
        

        {friends.map ((friend)  => (
          <ul key={friend.age}>Mi amigo/a {friend.name}, tiene {friend.age} años</ul> ))
        } 
        
          <Ccard/>*/}
      <Tarea crearTarea={crearTarea} />

      <div className="Tareas_container">
        {NuevoItem.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => eliminarTarea(index)}
            >
              Eliminar Tarea
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
