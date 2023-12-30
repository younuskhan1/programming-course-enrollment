import "./Information.css";

const Information = () => {
    return (
        <div className="information-parents">
             <p className="information-title">Credit Hours Remaining: hrs</p>
             <p className="course-name">Courses Name:</p>
             <p className="total-credit">Total Credit Hours:</p>
             <p className="total-price">Total Price : USD</p>
        </div>
    );
};

export default Information;