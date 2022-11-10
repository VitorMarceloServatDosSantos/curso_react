import React from "react";
import styles from "./CarDetails.module.css";
const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li className={styles.carro}>Marca: {brand}</li>
        <li className={styles.carro}>Kilometragem: {km}</li>
        <li className={styles.carro}>Cor: {color}</li>
      </ul>
    </div>
  )
};


export default CarDetails;
