import React, { useState } from "react";
import Cards from "./components/Cards";
import Ciudad from "./components/Ciudad";
import E404 from "./components/E404";
import About from "./components/About";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function App() {
  //Uso el useState para tener un estado local de las ciudades. Y el set para modificar esos estados.

  const [ciudades, setCiudades] = useState([]);

  function onClose(id) {
    setCiudades((ciudadesMostradasEnLaApp) =>
      ciudadesMostradasEnLaApp.filter((el) => el.id !== id)
    );
  }

  function onSearch(newCity) {
    if (ciudades.length > 3) {
      alert("No se pueden agregar mas ciudades");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${process.env.REACT_APP_APIKEY}&units=metric`
      )
        .then((r) => r.json())
        .then((weather) => {
          if (weather.main) {
            const newCity = {
              min: Math.round(weather.main.temp_min),
              max: Math.round(weather.main.temp_max),
              img: weather.weather[0].icon,
              id: weather.id,
              wind: weather.wind.speed,
              temp: weather.main.temp,
              name: weather.name,
              weather: weather.weather[0].main,
              clouds: weather.clouds.all,
              latitud: weather.coord.lat,
              longitud: weather.coord.lon,
            };
            let duplicateCity = ciudades.find((el) => el.id === weather.id);
            if (duplicateCity) {
              alert("Ya buscaste la ciudad de " + weather.name);
            } else {
              setCiudades([...ciudades, newCity]);
            }
          } else {
            alert("Ciudad no encontrada");
          }
        });
      return;
    }
  }

  function onFilter(ciudadId) {
    debugger;
    let ciudad = ciudades.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.backgroundImg} />
      <div className={styles.container}>
        <div>
          <Route path="/" render={() => <SearchBar onSearch={onSearch} />} />
        </div>
        <div className={styles.citiesContainer}>
          <Switch>
            <Route path="/about" exact component={About} />

            {ciudades.length > 0 ? (
              <>
                <Route
                  exact
                  path="/ciudad/:ciudadId"
                  render={({ match }) => (
                    <Ciudad city={onFilter(match.params.ciudadId)} />
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={() => <Cards cities={ciudades} onClose={onClose} />}
                />
              </>
            ) : (
              <span
                className={styles.homeText}
                // style={{
                //   textAlign: "center",
                //   width: "70vw",
                //   marginTop: "5rem",
                //   marginLeft: "5rem",
                //   fontSize: "2rem",
                // }}
              >
                {" "}
                Todavia no has buscado ninguna ciudad
              </span>
            )}
            <Route component={E404} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
