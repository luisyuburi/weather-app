import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [error, guardarError] = React.useState(false);
  const [busqueda, guardarBusqueda] = React.useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, guardarResultado] = React.useState({});

  const [consultar, guardarConsultar] = React.useState(false);

  React.useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appID = "05c59821773dbe87555a86e3326b2d45";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${appID}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        // Detecta si hubo resultados correctos en la consulta
        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <React.Fragment>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="contenedor">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
