import React from "react";
import "./galleryList.css";
import Gallery from "../gallery/Gallery.js";
import {gallery} from "../../data.js"

function GalleryList () {
  return (
      <div className="gl">
          <div className="gl-text">
              <h1 className="gl-title">Our Community</h1>
              <p className="gl-description">
              Flowers Below
              </p>
          </div>
          <div className="gl-list">
              {gallery.map((item) => (
                  <Gallery key={item.id} img={item.img} link={item.link}/>
              ))}
                  
          </div>
      </div>
  )
}

export default GalleryList