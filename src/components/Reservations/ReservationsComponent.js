import './ReservationsComponent.css';
import Hero from "../Hero/HeroComponent";
import heroImage from '../../assets/Mario_and_Adrian_A.jpg';
import BookingForm from './BookingForm';

const heroData = {
    heading: 'Reserve a table',
    subheading: 'Come visit us!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Find a table',
    buttonLink: '',
    image: heroImage
}

const Reservations = () => {
    const submitForm = (booking) => {
        console.log(booking);
    }

    return(
        <>
            <Hero data={heroData} />
            <BookingForm submitForm={submitForm} />
        </>
    )
}

export default Reservations;