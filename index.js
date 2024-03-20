
// import React from "react";
// import ReactDOM from "react-dom"
// import root from "react-dom/client"
// const Firstjsx = () => {<h3>hello world</h3>}
// const root = ReactDOM.createElementById(root)
//   root.render(<Firstjsx />,document.getElementById("root"))
import React from "react";
import ReactDOM from "react-dom";

const Firstjsx = () =>"hello world";

//ata diao hoini same error as6e

// function Firstjsx () {
//   return(
//     <div>
//       <h3>hello world</h3>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Firstjsx />);
