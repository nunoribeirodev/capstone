import Hero from "../Hero/HeroComponent";
import Specials from "../Specials/SpecialsComponent";
import Testimonials from '../Testimonials/TestimonialsComponent';
import About from "../About/AboutComponent";
import heroImage from '../../assets/restaurant_food.jpg';

const heroData = {
    heading: 'Little Lemon',
    subheading: 'Chicago',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Reserve a table',
    buttonLink: 'reservations',
    image: heroImage
}

const Home = () => {
    return(
        <>
            <Hero data={heroData} />
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    )
}

export default Home;