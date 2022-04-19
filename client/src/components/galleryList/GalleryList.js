import React from "react";
import "./galleryList.css";
import Gallery from "../gallery/Gallery.js";
import {gallery} from "../../data.js"

function GalleryList () {
  return (
      <div className="gl">
          <div className="gl-text">
              <h1 className="gl-title">The Garden</h1>
              <p className="gl-description">
              We could learn a lot from plants. Browse The Garden and see what our community is saying. Feel free to share your experiences.
              </p>
          </div>


          <div className="gl-list">
              {gallery.map((item) => (
                  <Gallery key={item.id} img={item.img} link={item.link} name={item.name}/>
              ))}
                  
          </div>
      </div>
  )
}

export default GalleryList