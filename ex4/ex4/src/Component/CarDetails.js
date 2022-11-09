import React from "react";
import styles from "./CarDetails.module.css";
const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li color = "red">Marca: {brand}</li>
        <li classeName={styles.carro}>Kilometragem: {km}</li>
        <li classeName={styles.carro}>Cor: {color}</li>
      </ul>
    </div>
  )
};


export default CarDetails;
