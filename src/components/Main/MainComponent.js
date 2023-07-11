import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/HeaderComponent';
import Home from '../Home/HomeComponent';
import BookingForm from '../Reservations/BookingForm';
import ConfirmedBooking from '../Reservations/ConfirmedBooking';
import Footer from '../Footer/FooterComponent';
import { useReducer, useState } from 'react';
import { initializeTimes, updateTimes } from '../../utils/utils';
import { submitAPI } from '../../utils/api';

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [bookingData, setBookingData] = useState({});
    const navigate = useNavigate();

    const submitForm = (booking) => {
        submitAPI(booking);
        setBookingData(booking);
        navigate('/reservations/confirmation');
    }
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reservations' element={<BookingForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path='/reservations/confirmation' element={<ConfirmedBooking data={bookingData} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Main;