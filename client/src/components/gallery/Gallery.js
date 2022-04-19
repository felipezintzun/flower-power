import React ,{useState}from "react";
import "./gallery.css";

function Gallery ({img,link,name}) {
  const[displayCard,setDisplayCard] = useState(true)
  return (<>
    {displayCard && (

      <div className="gallery">

          <section className="flower-cards">

          <article className="flower-card">

            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="gallery-img"/>
            </a>
            
            <div className="card-text">
              <h4 className="flower-name">{name}</h4>
              <p className="flower-description">This is a post about this flower</p>
            </div>

            <button onClick={()=> setDisplayCard(!displayCard)}>Thoughts</button>

          </article>

          </section>
  </div> ) }
  {!displayCard && (
    <Thoughts flower={name} />    )}

  
  </>)
}

export default Gallery