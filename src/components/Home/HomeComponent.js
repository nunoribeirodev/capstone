import Hero from "../Hero/HeroComponent";
import heroImage from '../../assets/restaurant_food.jpg';

const heroData = {
    heading: 'Little Lemon',
    subheading: 'Chicago',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Reserve a table',
    image: heroImage
}

const Home = () => {
    return(
        <>
            <Hero data={heroData} />
            <main>
                Some content
            </main>
        </>
    )
}

export default Home;