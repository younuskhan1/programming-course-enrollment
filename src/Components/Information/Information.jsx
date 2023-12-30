import "./Information.css";
import PropTypes from 'prop-types'; // ES6

const Information = ({courseName, totalCredit, totalPrice, remainingCreditHours}) => {
    return (
        <div className="information-parents">
             <p className="information-title">Credit Remaining: {remainingCreditHours} hrs</p>
             <p className="course-name">Courses Name:</p>
             <div className="each-name-from-data">
             {
                courseName.map((name, index) => <p key={index}>{index+1}. {name}</p>)
             }
             </div>
             <p className="total-credit">Total Credit Hours: {totalCredit}</p>
             <p className="total-price">Total Price : {totalPrice} USD</p>
        </div>
    );
};
Information.propTypes = {
    courseName: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainingCreditHours:PropTypes.number.isRequired,
    
}
export default Information;