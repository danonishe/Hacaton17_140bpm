import React from 'react';
// import styles from './Main.module.scss';
import Map from "./../map/map"
export default function Main(){
    const token = localStorage.getItem('token');
          return(
            <div>
                  <Map/>
                
            </div>
     

      )   
  
}