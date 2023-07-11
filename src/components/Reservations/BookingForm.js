import { useState } from "react";

const BookingForm = ({submitForm, availableTimes, dispatch}) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState('Birthday');
    const [booking, setBooking] = useState({
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
    });

    const handleChangeDate = (e) => {
        setDate(e.target.value);
        dispatch({
            type: 'addTimes',
            payload: date
        });
        setBooking({...booking, date: e.target.value});
    }

    const handleChangeTime = (e) => {
        setTime(e.target.value);
        setBooking({...booking, time: e.target.value});
    }

    const handleChangeGuests = (e) => {
        setGuests(e.target.value);
        setBooking({...booking, guests: e.target.value});
    }

    const handleChangeOccasion = (e) => {
        setOccasion(e.target.value);
        setBooking({...booking, occasion: e.target.value});
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        submitForm(booking);
    }

    return(
        <div className="bookingForm-container">
            <form className="bookingForm" onSubmit={handleSubmitForm}>
                <div className="bookingForm-row">
                    <label htmlFor="res-date">Choose date</label>
                    <input id="res-date" type="date" onChange={handleChangeDate} />
                </div>

                <div className="bookingForm-row">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={handleChangeTime}>
                        {
                            availableTimes.map((time) => {
                                return (<option key={time}>{time}</option>)
                            })
                        }
                    </select>
                </div>

                <div className="bookingForm-row">
                    <label htmlFor="guests">Number of guests</label>
                    <input id="guests" type="number" placeholder="1" min="1" max="10" onChange={handleChangeGuests}/>
                </div>

                <div className="bookingForm-row">
                    <label htmlFor="occassion">Occasion</label>
                    <select id="occasion" onChange={handleChangeOccasion}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <input type="submit" value="Make your reservation" />
            </form>
        </div>
    )
}

export default BookingForm;