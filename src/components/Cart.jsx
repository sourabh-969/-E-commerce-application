
import { useSelector, useDispatch } from "react-redux"; // Importing useSelector & useDispatch hooks from react-redux
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";
import { BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart(){
  // Use useSelector hook to access the cart items from the Redux store
  const cartItems = useSelector((state)=>state.cart.items);

  // calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item)=>
    acc+item.price*item.quantity,0);
  
  const dispatch =useDispatch(); // Use dispatch hook to get redux dispatch function
  function handleClearCart(){
    dispatch(clearCart());
  }

  // if there are no items then render message
  if (cartItems.length === 0){
    return <div className="empty-cart">
    <BsCartXFill className="empty-cart-icon"/><p>Your Cart is Empty!</p></div>
  }
    return(
      <div className="cart-container">
            <div className="cart">
                <h2>Shopping Cart</h2>
                <button onClick={handleClearCart}>Clear Cart</button>
                {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
                ))}
                <center><h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3><Link to="/checkout" >Order </Link> </center>
            </div>
      </div>
    );
}
export default Cart;