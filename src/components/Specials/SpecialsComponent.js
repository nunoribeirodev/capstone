import './SpecialsComponent.css';
import greekSaladImg from '../../assets/greek_salad.jpg';
import bruschettaImg from '../../assets/bruchetta.svg';
import lemonDessertImg from '../../assets/lemon_dessert.jpg';
import { MdDeliveryDining } from 'react-icons/md';

const specialsList = [
    {
        name: 'Greek Salad',
        price: '£12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        image: greekSaladImg
    },
    {
        name: 'Bruschetta',
        price: '£5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        image: bruschettaImg
    },
    {
        name: 'Lemon Dessert',
        price: '£5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        image: lemonDessertImg
    }
];

const SpecialCard = ({props}) => {
    return(
        <div className='specials-card'>
            <div className='specials-image' style={{ backgroundImage: `url(${props.image})` }} />
            <div className='specials-details'>
                <div className='specials-details-header'>
                    <h3>{props.name}</h3>
                    <span>{props.price}</span>
                </div>
                <p>{props.description}</p>
                <p>Order a delivery&nbsp;&nbsp;&nbsp;<MdDeliveryDining /></p>
            </div>
        </div>
    )
}

const Specials = () => {
    return(
        <div id="specials" className="specials-container">
            <div className="specials-container-header">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className='specials-card-wrapper'>
                {
                    specialsList.map((special) => {
                        return(<SpecialCard key={special.name} props={special} />)
                    })
                }
            </div>
        </div>
    )
}

export default Specials;