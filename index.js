


import ReactDOM from "react-dom/client";
import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


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

       <div className="button">
       
       </div>
        
    </div>
    
    <div className="horizontal-line"></div>
    <div className="icong"><a href="https://pbs.twimg.com/media/FDmiwD6VUAEGOEU.jpg"><FcGoogle /></a></div>
    <div className="icongit"><a href="https://github.com/"><FaGithub /></a></div>
    <div className="iconinsta"><a href="https://www.instagram.com/user_trk/"><FaSquareInstagram /></a></div>
    <div className="iconface"><a href="https://www.facebook.com/tarak.maity.98837"><FaFacebookSquare /></a></div>
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