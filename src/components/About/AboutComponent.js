import './AboutComponent.css';
import img1 from '../../assets/chef.jpg';
import img2 from '../../assets/Mario_and_Adrian_b.jpg';

const About = () => {
    return(
        <div id="about" className='about-container'>
            <div className='about-container-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className='about-container-image-container'>
                <div
                    className='about-container-image'
                    style={
                        { backgroundImage: `url(${img1})` }
                    }
                />
                <div
                    className='about-container-image img-overlap'
                    style={
                        { backgroundImage: `url(${img2})` }
                    }
                />
            </div>
        </div>
    )
}

export default About;