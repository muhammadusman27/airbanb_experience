import star from '../images/star.png';
export default function Card(props) {
    return (
        <div className='single_card'>
            <img src={props.image} alt="swimmer" className='card_image' />
            
            <div className='star_div'>
                <img src={star} alt="star icon" className='star_icon' />
                <span className='rating rating_point'>&nbsp; {props.rating} </span>
                <span className='rating rating_count'>&nbsp; ({props.count}) . USA</span>
            </div>
            <p className='rating rating_point'>{props.lesson}</p>
            <p className='rating rating_point'>
                <span className='bold_price'>From $ {props.price} </span> 
                / person
            </p>
        </div>
    )
}