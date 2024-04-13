import React, { useReducer } from "react";

// Definimos el reductor
const reducer = (state, action) => {
  switch (action.type) {
    case 'NuevaTarea':
      return action.payload;
    default:
      return state;
  }
};

function Tarea(props) {

  const [nuevaTarea, dispatch] = useReducer(reducer, '');


  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.crearTarea(nuevaTarea);
    localStorage.setItem("input", nuevaTarea);
    dispatch({ type: 'NuevaTarea', payload: '' });
  };



  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Ingrese una tarea"
          value={nuevaTarea}
          onChange={(e) => dispatch({ type: 'NuevaTarea', payload: e.target.value })}
        />
        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
}

export default Tarea;
