import './ConfirmedBooking.css';
import Hero from '../Hero/HeroComponent';
import heroImage from '../../assets/Mario_and_Adrian_b.jpg';

const heroData = {
    heading: 'Reservation confirmed',
    subheading: 'We are waiting for you!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'See details below',
    buttonLink: '',
    image: heroImage
}

const ConfirmedBooking = (props) => {
    return(
        <>
            <Hero data={heroData} />
            <div className='confirmed-container'>
                <h1>Reservations details</h1>
                <div className='confirmed-row'>
                    <h3>Date:</h3>
                    <p>{props.data.date}</p>
                </div>
                <div className='confirmed-row'>
                    <h3>Time:</h3>
                    <p>{props.data.time}</p>
                </div>
                <div className='confirmed-row'>
                    <h3>Number of guests:</h3>
                    <p>{props.data.guests}</p>
                </div>
                <div className='confirmed-row'>
                    <h3>Occasion:</h3>
                    <p>{props.data.occasion}</p>
                </div>
            </div>
        </>
    )
}

export default ConfirmedBooking;