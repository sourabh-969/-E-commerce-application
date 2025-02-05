import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Importing addItem action creator from cartSlice

function ProductItem({ product }) {
    // State to manage the button clicked state
  const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch(); // gets dispatch function from redux.
 
    // Handle adding the product to cart
    function handleAddItem(event)
    {
        event.preventDefault(); // Prevent default behavior
        event.stopPropagation(); // Stop event propagation
        dispatch(addItem(product));
        setIsClicked(true); // Change the button state to clicked
    };
    
    return (
        <div className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
             <button onClick={handleAddItem} disabled={isClicked} className={`button ${isClicked ? 'clicked' : ''}`}>{isClicked?'Added To Cart':'Add To Cart'}</button>
        </div>
    );
}
export default ProductItem;