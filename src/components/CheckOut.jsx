import placedicon from "../assets/Placed.gif"

function CheckOut(){
    return(
        <>
        <div className="checkout">
            <img src={placedicon} alt="img"  className="checkout-icon"/>
            <p>Order Placed Successfully!</p>
        </div>
        </>
    );
}
export default CheckOut;