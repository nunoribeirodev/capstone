import { Route, Routes } from 'react-router-dom';
import Header from '../Header/HeaderComponent';
import Home from '../Home/HomeComponent';
import Reservations from '../Reservations/ReservationsComponent';
import Footer from '../Footer/FooterComponent';

const Main = () => {
    return(
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservations' element={<Reservations />} />
        </Routes>
        <Footer />
        </>
    )
}

export default Main;