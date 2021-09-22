import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

/*
mt = Margin Top
btn-group = 
btn btn-dark =
*/
function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark px-3">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark mx-2 px-3">
            Contacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark px-3">
            Nosotros
          </Link>
        </div>


        <h1 className="mt-2" >Nabvar...</h1>
        <hr></hr>

        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto" exact>
            <Contacto />
          </Route>
          <Route path="/nosotros" exact>
            <Nosotros/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
