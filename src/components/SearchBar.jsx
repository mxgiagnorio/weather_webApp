import React, { useState } from 'react';
import styles from "./styles/SearchBar.module.css";
import { Link } from 'react-router-dom';
import {IoAddOutline} from "react-icons/io5";

export default function SearchBar({onSearch}) {

  const[city,setCity] = useState('')             
  const handleInputChange =(event) =>{            
     setCity(event.target.value);               
  }
  return (
    <form onSubmit={(e) => {                        
      e.preventDefault();                         
      onSearch(city);                               
      setCity('')                                                               
    }}>
      <div className={styles.searchBar}>
      <input className={styles.input}      
        type="text" placeholder="Escribe la ciudad"  onChange={(event) => handleInputChange(event)} value={city}/>
      <button className={styles.button}><IoAddOutline/></button>
      <div className={styles.linkContenedor}>
                <Link to="/about">
                <span className={styles.linkedin}> ABOUT</span>
                </Link>
            </div>
      </div>
    </form>  
  );
}
