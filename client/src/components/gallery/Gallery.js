import React from "react";
import "./gallery.css";

function Gallery ({img,link}) {
  return (

      <div className="gallery">

          <article className="card">

            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="gallery-img"/>
            </a>
            
            <div className="card-text">
              <h4>Flower Name</h4>
              <p>This is a post about this flower</p>
            </div>

      </article>

  </div>

  )
}


export default Gallery