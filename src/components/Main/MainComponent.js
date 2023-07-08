import { Switch, Route, Redirect} from 'react-router-dom';
import Header from '../Header/HeaderComponent';
import Home from '../Home/HomeComponent';
import Footer from '../Footer/FooterComponent';

const Main = () => {
    return(
        <>
        <Header />
        <Footer />
        </>
    )
}

export default Main;