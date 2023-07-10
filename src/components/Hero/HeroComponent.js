import { useNavigate } from 'react-router-dom';
import './HeroComponent.css';

const Hero = (props) => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = props.data.buttonLink;
        navigate(path);
    }

    return(
        <div className='hero-container'>
            <div className='hero-container-description'>
                <h1>{props.data.heading}</h1>
                <h2>{props.data.subheading}</h2>
                <p>{props.data.description}</p>
                <button onClick={routeChange}>{props.data.buttonLabel}</button>
            </div>
            <div
                className='hero-container-image'
                style={
                    { backgroundImage: `url(${props.data.image})` }
                }
            />
        </div>
    )
}

export default Hero;