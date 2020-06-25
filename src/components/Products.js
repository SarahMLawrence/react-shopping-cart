//==========================================================//
// consume data from the context object rather than props   //
// useContext hook, no render props						    //
// * import the useContext hook								//
// * call useContext with the context object				//
//==========================================================//

import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = (props) => {
  //====================================================================================//
  // call useContext hook and pass in context object we want to use					  //
  // useContext is going to return value passed by ProductContext Provider value props. //
  // we're getting back an objext with two properties (products and addItem)            //
  //====================================================================================//
  const { products, addItem } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
