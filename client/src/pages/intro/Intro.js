import React from "react";
import "./intro.css";
import { Link } from 'react-router-dom';
import Plant from "../../img/sunflower-image-home.png";
import { GiGardeningShears } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { IoFlowerSharp } from "react-icons/io5";



function Intro () {
    return (
        <Link>
        <div className="home">
          <div className="h-left">
            <div className="h-left wrapper">
              <h2 className="h-intro">Let's Grow</h2>
            
            <div className="h-description">
            Flower Power is here to create a plant-based community for you and your plants
            to flourish. We want you to share your photos and stories of your plant friends. 
            The tips and tricks you have learned along the way will help everyone grow. You
            can connect with the community to: sell, trade, or simply socialize. 
            Inspired by plants, lets grow together.
            </div>

            <div className="icon-wrapper">
              <div className="icon-cont">
                <a className='i-icon' href="" target="_blank" rel="noreferrer"><GiGardeningShears size='50'/></a>
              </div>    

              <div className="icon-cont">
                <a className='i-icon' href="" target="_blank" rel="noreferrer"> <RiPlantFill size='50'/></a>
              </div>

              <div className="icon-cont">
                <a className='i-icon' href="" target="_blank" rel="noreferrer"> <IoFlowerSharp size='50'/></a>
              </div>
              
            </div>
            </div>
          </div>

          <div className="h-right">
                <div className="h-card bg"></div>
                    <div className="h-card">
                    <img src={Plant} alt="" className="i-image" />
                    </div>
            </div>

        </div>
        </Link>
    )
}

export default Intro