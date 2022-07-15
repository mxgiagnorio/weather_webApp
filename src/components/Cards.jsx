import React from 'react';
import Card from "./Card";
import styles from "./styles/Cards.module.css"

export default function Cards(props) {

  return <div className={styles.cardsContainer}>
    {props.cities?.map((city)=>{            
      return (
        <Card 
        name={city.name} 
        key={city.id} 
        country={city.country}
        max={city.max} 
        min={city.min} 
        img={city.img} 
        id={city.id}
        onClose ={props.onClose}/>      
    )})
    }  
  </div>
};

