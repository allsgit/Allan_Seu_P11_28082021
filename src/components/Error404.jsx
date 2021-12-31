import React from "react";
import { Link } from "react-router-dom";
import "../style/_D_404.scss";

class Error404 extends React.Component {
  render() {
    return (
      <div className="error-div">
        <h1 className="error">404</h1>
        <h2 className="error-msg">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="./">
          <a className="back-to-link">Retourner sur la page d’accueil</a>{" "}
        </Link>
      </div>
    );
  }
}

export default Error404;
