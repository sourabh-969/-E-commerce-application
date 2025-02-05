import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { removeItem, updateQuantity} from "../utils/cartSlice"; // Importing removeItem action creator from cartSlice


function CartItem({item}){
    const dispatch = useDispatch(); // gets dispatch function from redux.

    // Handle removing the item from the cart
    function handleRemoveItem(){
        dispatch(removeItem(item.id));
    }
    // Handle quantity changes
    function handleQuantityChange(e) {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
          dispatch(updateQuantity({id:item.id, quantity:newQuantity}));
        }
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
                <label className="quantity-label">Quantity:</label>
                <input type="number" className="quantity-input"
               value={item.quantity}  min="1"
              onChange={handleQuantityChange}
             />
           </div>
                <button onClick={handleRemoveItem}>Remove</button>
            </div>
           
        </div>
    );
}
export default CartItem;