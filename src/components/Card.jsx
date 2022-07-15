import React from 'react';
import styles from "./styles/Card.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Card({name,min,max,img,onClose,primary,id}) { 
  return (
    <div className={`${styles.Card} ${primary ? styles.primary : ""}`}>
      {!primary && <button className={styles.button} onClick={()=>onClose(id)}><IoCloseCircleSharp/></button>}
      <Link to={`/ciudad/${id}`}><span className={styles.name}>{name}
      </span></Link>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='foto del tiempo'></img>
          <div className={styles.Temps}>
              <Temp label = "Min ⬇" temp={min}/> 
              <Temp label = "Max ⬆" temp={max}/> 
          </div>
      </div>  
  )
}

function Temp({label,temp}) {
  return (
    <div className={styles.Temp}>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  )
}


