import React from 'react';
import "../styles/css/homePage.css";
import "../styles/css/variousCards.css";
import MainCard from "../models/MainCard.jsx";
import Pic1 from "../assets/images/categories_img_01.jpg";
import Pic2 from "../assets/images/categories_img_02.jpg";
import Pic3 from "../assets/images/categories_img_03.jpg";

function OurServices() {
    const services = [
        new MainCard(Pic1, "Lorem service life and business 1"),
        new MainCard(Pic2, "Lorem service life and business 2"),
        new MainCard(Pic3, "Lorem service life and business 3")
    ];

    return ( 
        <section className="Services">
            <h1>Our Services</h1>
            <div className="container">
               {services.map((service, index) => (
                   <React.Fragment key={index}>
                       {service.render()}
                   </React.Fragment>
               ))}
            </div>
        </section>
    );
}

export default OurServices;