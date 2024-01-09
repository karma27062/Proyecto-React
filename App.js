// App.js
import React, { useState } from "react";
import ClickCounter from "./componentes/ClickCounter";
import AgeCalculator from "./componentes/AgeCalculator";
import ComponenteForm from "./componentes/componenteForm";
import Datos from "./componentes/componenteDatos";
import Login from "./componentes/firebase/Login";
import WeatherDisplay from "./componentes/WeatherDisplay";
import './css/arcadeStyle.css';

function App() {
  const [datos, setDatos] = useState({ nombre: "", materia: "" });
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState(false);
  const [isFormModuleEnabled, setFormModuleEnabled] = useState(false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState(false);

  return (
    <div>
      <h1>¡Hola! Esta es mi primera página en React</h1>

      <ClickCounter />

      <button onClick={() => setAgeModuleEnabled(!isAgeModuleEnabled)}>
        {isAgeModuleEnabled ? "Deshabilitar Módulo Edad Canina" : "Habilitar Módulo Edad Canina"}
      </button>
      {isAgeModuleEnabled && <AgeCalculator />}

      <button onClick={() => setFormModuleEnabled(!isFormModuleEnabled)}>
        {isFormModuleEnabled ? "Deshabilitar Módulo Formulario Datos" : "Habilitar Formulario Datos"}
      </button>
      {isFormModuleEnabled && <ComponenteForm onFormSubmit={setDatos} />}
      {isFormModuleEnabled && <Datos nombre={datos.nombre} materia={datos.materia} />}

      <button onClick={() => setLoginModuleEnabled(!isLoginModuleEnabled)}>
        {isLoginModuleEnabled ? "Deshabilitar Módulo de Inicio de Sesión" : "Habilitar Módulo de Inicio de Sesión"}
      </button>
      {isLoginModuleEnabled && <Login />}

      <WeatherDisplay />
    </div>
  );
}

export default App;
