
import { useRouteError } from "react-router-dom";

//Display a 404 page for unknown routes.
function NotFound(){
    const err = useRouteError();
    return(
        <center className="errpage">
        <h1>err404</h1>
        <h1>Oops!! Page Not Found.</h1>
        <h3>Status:{err.status}{err.statusText}</h3>
        <h3>{err.data}</h3>
        </center>

    );
}
export default NotFound;