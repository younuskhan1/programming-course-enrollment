import Cards from "../Cards/Cards";
import Information from "../Information/Information";
import "./CardAndInfo.css";

const CardAndInfo = () => {
    return (
        <div className="card-and-info-parent">
            <Cards></Cards>
            <Information></Information>    
        </div>
    );
};

export default CardAndInfo;