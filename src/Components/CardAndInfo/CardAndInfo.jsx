import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Information from "../Information/Information";
import "./CardAndInfo.css";

const CardAndInfo = () => {
     const [programmes, setProgrammes] = useState ([]);
     const [remainingCreditHours, setRemainingCreditHours] = useState(20);
     const [courseName, setCourseName] = useState([]); 
     const [totalCredit, setTotalCredit] = useState(0);
     const [totalPrice, setTotalPrice] = useState(0);
    

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

        for(let course of courseName){
            if(course === programme.course_title){
                return toast.warn("You cannot add the same course for twice times.",{
                    position: "top-center",
                    theme: "dark",
                });
            }
        }

        const remainingCredit = remainingCreditHours - programme.credit;
        if (remainingCredit < 0){
            return toast.info("Remaining credit hours must not be negetive value.",{
                position: "top-center",
                theme: "dark", 
            });
        }
        setRemainingCreditHours(remainingCredit);
        const courseTitle = [...courseName, programme.course_title];
        setCourseName(courseTitle);
        const totalCreditHours = totalCredit + programme.credit;
        setTotalCredit(totalCreditHours);
        const totalCoursePrice = totalPrice + programme.price;
        setTotalPrice(totalCoursePrice);
       

    }
    return (
        <div className="card-and-info-parent">
            <Cards programmes={programmes} courseSelectionHandler ={courseSelectionHandler}></Cards>
            <Information courseName={courseName}
             totalCredit={totalCredit}
            totalPrice={totalPrice}
            remainingCreditHours = {remainingCreditHours}
            ></Information>   
            <ToastContainer /> 
        </div>
    );
};

export default CardAndInfo;