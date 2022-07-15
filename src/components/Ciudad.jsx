import React from "react";
import E404 from "./E404";
import { IoCloseCircleSharp } from "react-icons/io5";
import styles from "./styles/Ciudad.module.css";
import { Link } from 'react-router-dom';

export default function Ciudad({city}) {
    if (city) {
    return (
        <div className={styles.cityContainer}>
                <div className={styles.cityCard}>
                    <Link to="/">
                        <div style={{ textAlign: 'center',width: "3vw",marginTop: "5.5rem",marginLeft: "5rem",fontSize:"2rem",}}>
                        <button className={styles.button}><IoCloseCircleSharp/></button>
                        </div>
                    </Link>
                    <h3>{city.name}</h3>
                    <div className={styles.info}>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
    } else {
        return (
            <div>
                <E404 />
            </div>
        )
    }
}

