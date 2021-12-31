import React from "react";
import "../style/_about.scss";
import arrow from "../images/arrow.png";
import Banner from "./Banner";
import Banner3 from "../images/Background-about.png";
import MenuComposant from "./AboutSheetMenu";

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <Banner source={Banner3} location="about" />
        <MenuComposant
          descript="Fiabilité"
          Descriptions="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
                <MenuComposant
          descript="Respect"
          Descriptions="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <MenuComposant
          descript="Services"
          Descriptions="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
                <MenuComposant
          descript="Sécurité"
          Descriptions="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    );
  }
}

export default About;
