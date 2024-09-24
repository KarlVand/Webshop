import React from "react";

import "../styles/css/homePage.css";

import { ProductCard } from "../models/ProductModel";

import Product1 from "../assets/images/img-pro-01.jpg";
import Product2 from "../assets/images/img-pro-02.jpg";
import Product3 from "../assets/images/img-pro-03.jpg";
import Product4 from "../assets/images/img-pro-04.jpg";

function Products() {
  const products = [
    new ProductCard(1, "Carrots", "3.5€", Product1, true),
    new ProductCard(2, "Tomatoes", "2.5€", Product2, false),
    new ProductCard(3, "Grapes", "1.5€", Product3, true),
    new ProductCard(4, "Papayas", "4.5€", Product4, false),
  ];

  return (
    <section className="highlights">
      <h1>Product Highlights</h1>
      <div className="prodSection">
        <h3>Fruits & Vegetables</h3>
        <p className="prodTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          magni ratione.
        </p>
        <div className="buttons">
          <button className="btn all">All</button>
          <button className="btn featured">Top Featured</button>
          <button className="btn bestSeller">Best Seller</button>
        </div>

        <div className="prodDisplay">
          {products.map(product => (
            <React.Fragment key={product.id}>
              {product.createProductCard()}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
