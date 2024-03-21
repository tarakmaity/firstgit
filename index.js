
// import React from "react";
// import ReactDOM from "react-dom"
// import root from "react-dom/client"
// const Firstjsx = () => {<h3>hello world</h3>}
// const root = ReactDOM.createElementById(root)
//   root.render(<Firstjsx />,document.getElementById("root"))
import React from "react";
import ReactDOM from "react-dom";

// const Firstjsx = () => {

// }



function Firstjsx () {
  return(
    <div className="heading">
      <h1>TRADE ANALYST</h1>
       <nav>
        <ul>
            <li>Products</li>
            <li>Community</li>
            <li>Markets</li>
            <li>News</li>   
            <li>Brokers</li>
        </ul>
       </nav>

       <input type="search" placeholder="search markets.." name="market" id="search" />
    </div>
)}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Firstjsx />);
