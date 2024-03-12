//  <div id="parent">
//     <h3 id="child">hello</h3>
//       <h3 id="son">react</h3>
// </div>
// <h3>hello</h3> 



const heading=([React.createElement("h1",{},"hello "),React.createElement("h2",{},"my name is")])
const hello=(React.createElement("h3",{},"react"))
ReactDOM.render([heading,hello],document.getElementById("root"));
