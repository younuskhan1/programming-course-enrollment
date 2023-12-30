import PropTypes from 'prop-types'; // ES6
import "./Cards.css"
import Card from '../Card/Card';

const Cards = ({programmes, courseSelectionHandler}) => {
    
    return (
        <div className="cards-parents">
            {
                programmes.map((programme, index) => <Card key={index} courseSelectionHandler={courseSelectionHandler} programme = {programme}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    programmes:PropTypes.array.isRequired,
    courseSelectionHandler: PropTypes.func.isRequired,
} 
export default Cards;