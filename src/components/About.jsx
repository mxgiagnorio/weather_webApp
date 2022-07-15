import React from "react";
import styles from "./styles/About.module.css";
import { Link } from 'react-router-dom';
import { IoCloseCircleSharp } from "react-icons/io5";

export default function About() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
        <Link to="/">
        <div>
        <button className={styles.button}><IoCloseCircleSharp/></button>
        </div>
        </Link>
          <h2>About</h2>
          <p ><strong>Hola! Soy Maximiliano Giagnorio</strong> FullStack en desarrollo, <strong>y esta es mi app del clima!</strong><br></br>Busca la temperatura actual de hasta 4 ciudades en simultaneo de cualquier parte del mundo, y al hacer click en ellas, puedes ver en detalle otros aspectos de su meteorologia. Este es un proyecto hecho en <strong>HENRY</strong>, un coding bootcamp de Latinoamerica</p>
        </div>
      </div>
    );
  };