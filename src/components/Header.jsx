
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiGlobeStandFill } from "react-icons/pi";
import { FaShopify, FaHome } from "react-icons/fa"; // using react-icons
import { BsCart4,BsGlobeCentralSouthAsia } from "react-icons/bs";


function Header(){
const cartItems = useSelector((state)=>state.cart.items);

    // Header component that displays the main header of the page
    return(
      <div className="header">
        <Link to ="/" className="logo" ><HiMiniShoppingBag className="logo-icon"/>ShoppyGl<BsGlobeCentralSouthAsia style={{ fontSize: '16px' }} />be</Link>
        <ul>
            <Link to ="/"><li><FaHome style={{ fontSize: '26px' }} /></li></Link>
            <Link to ="/cart" className="cart-icon">
              <li>
                <div className="suplen"> {cartItems.length}</div>
                    <BsCart4 style={{ fontSize: '26px' }} />
              </li>
            </Link>
        </ul>
       
      </div>
    );
}
export default Header;
