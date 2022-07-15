import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/E404.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";


export default function E404() {
    return (
      <div>
        <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
        <Link to="/">
        <div style={{ textAlign: 'center',marginTop: "3.5rem",marginLeft: "25rem",fontSize:"3rem",}}>
        <button className={styles.button}><IoCloseCircleSharp/></button>
        </div>
        </Link>
          <h2>Error 404</h2>
          <p >disculpe, no podemos mostrar esa ciudad quizas es producto de  <strong>su imaginacion</strong></p>
        </div>
      </div>
      </div>
    );
  };