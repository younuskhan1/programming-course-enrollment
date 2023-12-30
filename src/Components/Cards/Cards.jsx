import PropTypes from 'prop-types'; // ES6
import "./Cards.css"
import Card from '../Card/Card';

const Cards = ({programmes}) => {
    
    return (
        <div className="cards-parents">
            {
                programmes.map((programme, index) => <Card key={index} programme = {programme}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    programmes:PropTypes.array.isRequired,
} 
export default Cards;