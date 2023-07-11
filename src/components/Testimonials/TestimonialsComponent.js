import './TestimonialsComponent.css';
import { IconContext } from 'react-icons';
import { RxAvatar } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai';

const testimonialList = [
    { name: 'Nuno', rating: 5, text: 'Review Test' },
    { name: 'Miguel', rating: 5, text: 'Review Test' },
    { name: 'Daniel', rating: 4, text: 'Review Test' },
    { name: 'Joana', rating: 5, text: 'Review Test' }
];

const renderRating = (rating) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
        content.push(<AiFillStar key={i} className='testimonials-container-card-rating' />)
    }
    return content;
}

const TestimonialCard = ({props}) => {
    return(
        <div className='testimonials-container-card'>
            <div className='testimonials-container-card-rating-wrapper'>
                {
                    renderRating(props.rating)
                }
            </div>
            <div className='testimonials-container-card-review-wrapper'>
                <div className='testimonial-header'>
                    <IconContext.Provider value={({color: '#EDEFEE', size: '5rem' })}>
                        <RxAvatar />
                    </IconContext.Provider>
                    <h3>{props.name}</h3>
                </div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return(
        <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className='testimonials-container-card-container'>
                {
                    testimonialList.map((testimonial) => {
                        return(
                            <TestimonialCard key={testimonial.name} props={testimonial} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials;