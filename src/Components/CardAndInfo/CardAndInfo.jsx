import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Information from "../Information/Information";
import "./CardAndInfo.css";

const CardAndInfo = () => {
     const [programmes, setProgrammes] = useState ([]);

     useEffect(()=>{
        const loadData = async () =>{
            try{
                const URL = "programme.json";
                const response = await fetch(URL);
                const data = await response.json();
                setProgrammes(data); 
            }
            catch(error){
                console.log(error);
            }
        }
        loadData();
     },[])
    return (
        <div className="card-and-info-parent">
            <Cards programmes={programmes}></Cards>
            <Information></Information>    
        </div>
    );
};

export default CardAndInfo;