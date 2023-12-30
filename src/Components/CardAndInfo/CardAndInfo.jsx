
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Information from "../Information/Information";
import "./CardAndInfo.css";

const CardAndInfo = () => {
     const [programmes, setProgrammes] = useState ([]);
     const [courseName, setCourseName] = useState([]);
     const [totalCredit, setTotalCredit] = useState(0);
     const [totalPrice, setTotalPrice] = useState(0);
     const [remainingCreditHours, setRemainingCreditHours] = useState(20);

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

    const courseSelectionHandler = (programme) => {
        //   console.log(programme);
        
        const courseTitle = [...courseName, programme.course_title];
        setCourseName(courseTitle);
        const totalCreditHours = totalCredit + programme.credit;
        setTotalCredit(totalCreditHours);
        const totalCoursePrice = totalPrice + programme.price;
        setTotalPrice(totalCoursePrice);
        const remainingCredit = remainingCreditHours - programme.credit;
        if (remainingCredit < 0){
            return alert("Credit remaining hours cannot be minus figure.")
        }
        setRemainingCreditHours(remainingCredit);

    }
    return (
        <div className="card-and-info-parent">
            <Cards programmes={programmes} courseSelectionHandler ={courseSelectionHandler}></Cards>
            <Information courseName={courseName} totalCredit={totalCredit} totalPrice={totalPrice} remainingCreditHours = {remainingCreditHours}></Information>    
        </div>
    );
};

export default CardAndInfo;