import React from "react";
import "./gallery.css";

function Gallery ({img,link}) {
  return (

      <div className="gallery">
          <div className="gallery-browser">
              
          </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="gallery-img"/>
      </a>
      
      <div className="flower-info"></div>

  </div>

  )
}


export default Gallery