
// import React from "react";
// import ReactDOM from "react-dom"
// import root from "react-dom/client"
// const Firstjsx = () => {<h3>hello world</h3>}
// const root = ReactDOM.createElementById(root)
//   root.render(<Firstjsx />,document.getElementById("root"))
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// const Firstjsx = () => {

// }



function Firstjsx () {
    


  return(
    <div>
    <div className="heading">
      <h1>TRADE ANALYST</h1>
      <input type="search" placeholder="search markets.." name="market" id="search" />
       <nav>
        <ul>
            <li>Products</li>
            <li>Community</li>
            <li>Markets</li>
            <li>News</li>   
            <li>Brokers</li>
        </ul>
       </nav>

       
        
    </div>
    
    <div class="horizontal-line"></div>
    <div className="icong"><FcGoogle /></div>
    <div className="icongit"><FaGithub /></div>
    <div className="iconinsta"><FaSquareInstagram /></div>
    <div className="iconface"><FaFacebookSquare /></div>
    <div className="middle">
      <h1>Market summary</h1>
    </div>
    
    <div className="middlenav">
      <nav>
        <ul>
          <li>Indics</li>
          <li>Stocks</li>
          <li>Crypto</li>
          <li>Forex</li>
        </ul>
      </nav>
    </div>
  
    </div>
)}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Firstjsx />);
