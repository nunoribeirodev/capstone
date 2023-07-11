import './BookingForm.css';
import Hero from "../Hero/HeroComponent";
import heroImage from '../../assets/Mario_and_Adrian_A.jpg';
import { useState } from "react";

const heroData = {
    heading: 'Reserve a table',
    subheading: 'Come visit us!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Find a table',
    buttonLink: '',
    image: heroImage
}

const ErrorMessage = ({message}) => {
    return <p className="error-message">{message}</p>
}

const BookingForm = ({submitForm, availableTimes, dispatch}) => {
    const [date, setDate] = useState({
        value: '',
        isTouched: false
    });
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState({
        value: '',
        isTouched: false
    });
    const [occasion, setOccasion] = useState('Birthday');
    const [booking, setBooking] = useState({
        date: date.value,
        time: time,
        guests: guests.value,
        occasion: occasion
    });

    const handleChangeDate = (e) => {
        setDate({...date, value: e.target.value});
        dispatch({
            type: 'addTimes',
            payload: e.target.value
        });
        setBooking({...booking, date: e.target.value});
    }

    const handleChangeTime = (e) => {
        setTime(e.target.value);
        setBooking({...booking, time: e.target.value});
    }

    const handleChangeGuests = (e) => {
        setGuests({...guests, value: e.target.value});
        setBooking({...booking, guests: e.target.value});
    }

    const handleChangeOccasion = (e) => {
        setOccasion(e.target.value);
        setBooking({...booking, occasion: e.target.value});
    }

    const isFormValid = () => {
        return date && time && (guests.value > 0 && guests.value <= 10);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        submitForm(booking);
    }

    return(
        <>
            <Hero data={heroData} />
            <div className="bookingForm-container">
                <form className="bookingForm" onSubmit={handleSubmitForm}>
                    <div className="bookingForm-row">
                        <label htmlFor="res-date">Choose date <sup>*</sup></label>
                        <input id="res-date" type="date" aria-label="Choose date" aria-required="true" min={new Date().toISOString().split('T')[0]} onChange={handleChangeDate} onBlur={() => setDate({...date, isTouched: true})} />
                    </div>
                    {date.isTouched && !date.value ? <ErrorMessage message={'Date is required'} /> : null}
                    {date.isTouched && (date.value < new Date().toISOString().split('T')[0]) ? <ErrorMessage message={'Select a valid date'} /> : null}

                    <div className="bookingForm-row">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" aria-label="Choose time" onChange={handleChangeTime}>
                            {
                                availableTimes.map((time) => {
                                    return (<option key={time}>{time}</option>)
                                })
                            }
                        </select>
                    </div>

                    <div className="bookingForm-row">
                        <label htmlFor="guests">Number of guests <sup>*</sup></label>
                        <input id="guests" type="number" aria-label="Number of guests" aria-required="true" placeholder="1" min="1" max="10" onChange={handleChangeGuests} onBlur={() => setGuests({...guests, isTouched: true})} />
                    </div>
                    {guests.isTouched && (guests.value < 1 || guests.value > 10) ? <ErrorMessage message={'Number of guests is required'} /> : null}

                    <div className="bookingForm-row">
                        <label htmlFor="occassion">Occasion</label>
                        <select id="occasion" aria-label="Occasion" onChange={handleChangeOccasion}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <input type="submit" value="Make your reservation" aria-label="On Click" disabled={!isFormValid()} />
                </form>
            </div>
        </>
    )
}

export default BookingForm;