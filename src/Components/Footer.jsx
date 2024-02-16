import React from 'react'
import dh from "../images/DH.png";
import arg from "../images/arg.png";
import uy from "../images/uy.jpg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

import { ContextGlobal } from "./utils/global.context";
let uyr = <img src={uy} className='bandera'/>
let ar = <img src={arg} className='bandera'/>
const Footer = () => {

  return (
    <footer>
      <p>{ar}Juan Machado & Luisina Martinucci {uyr}</p>
    <div className='foot'>
      <img src={dh} alt='DH-logo' />
      <div className="redes">
        <FaSquareInstagram className="icon" />
        <FaFacebookSquare className="icon" />
        <IoLogoTiktok className="icon" />
        <FaWhatsappSquare className="icon" />
      </div>
    </div>
    </footer>
  )
}

export default Footer
