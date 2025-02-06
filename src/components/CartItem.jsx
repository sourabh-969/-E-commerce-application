import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { removeItem, updateQuantity} from "../utils/cartSlice"; // Importing removeItem action creator from cartSlice


function CartItem({item}){
    const dispatch = useDispatch(); // gets dispatch function from redux.

    // Handle removing the item from the cart
    function handleRemoveItem(){
        dispatch(removeItem(item.id));
    }
     // Handle decreasing quantity
  function handleDecreaseQuantity() {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  }

  // Handle increasing quantity
  function handleIncreaseQuantity() {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  }
    return(
            <div className="cart-item">
           <div className="image-container">
             <img src={item.thumbnail} alt={item.title} />
           </div>
           <div className="content-container">
               <h3 className="item-title">{item.title}</h3>
               <p className="item-price">Price: ${item.price}</p>

               <div className="quantity-control">
         <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
         <span className="quantity-display">{item.quantity}</span>
         <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
               </div>
               <span className="min-quantity">Min-Quantity = <b>1</b></span>
               <button onClick={handleRemoveItem}>Remove</button>
           </div>
           </div>
    );
}
export default CartItem;