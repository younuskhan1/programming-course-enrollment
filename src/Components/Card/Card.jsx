import PropTypes from 'prop-types'; // ES6
import "./Card.css"
const Card = ({programme, courseSelectionHandler}) => {
    // console.log(programme);
    const {course_description, course_title, credit, image, price} = programme;
    return (
        <div className='card-parent'>
            <div>
                <div><img className='card-images' src={image} alt="" /></div>
                <h3 className='card-title'>{course_title}</h3>
                <p className='course-description'>{course_description}</p>
                <div className='price-and-credits'>
                    <p><span className='dollar-sign'>$</span> Price : {price}</p>
                    <p><span><i className="fa-solid fa-book-open"></i></span> Credits : {credit}<span>hrs</span></p>
                </div>
            </div>
            <div className='card-button-div'><button className='card-button' onClick={()=>courseSelectionHandler(programme)}>Select</button></div>
        </div>
    );
};
Card.propTypes = {
    programme: PropTypes.object.isRequired,
    courseSelectionHandler:PropTypes.func.isRequired,
}
export default Card;