import React from "react";
import "./CSS/servicos.css";
import SlideService from "./Slideservicos";


export default function Servicos() {
    return (

    <div className="Valverde">
            <img src="./public/9.png" alt="" className="foto"/>      
      <div>
        
        <div className="fotosservicos">
        <h1> Alguns de nossos serviços: </h1>
        </div>
        
        <div>
            
        </div>
        <SlideService/>
      </div>
    </div>
  );
}
