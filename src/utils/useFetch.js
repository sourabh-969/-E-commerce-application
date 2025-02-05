
import { useState, useEffect } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       const fetchData = async () =>{
        try{
            const response = await fetch(url);// make url api call
            const result = await response.json(); // convert into json format
            setData(result);//gets data set result
        }catch(err){
            setError(err); // gets error set the error
        }finally{
            setLoading(false);// whenthing is done then it sets loading is false
        }
      };
      fetchData(); 
    }, [url]); // whenever url changes it has to re render again
    
    return {data, loading, error};
}

export default useFetch;
