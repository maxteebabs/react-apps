import { BsInfoCircle } from 'react-icons/bs';
import {FaStar, FaRegStar, FaStarHalfAlt} from 'react-icons/fa';

const Catalog = ({catalog}) => {
  const getRatings = ({rating}) => {
    const maxFullStars = Math.trunc(rating);
    const frac = rating % 1;
    const stars = [];
    let hasHalf = false;

    for(let i = 1; i <=5; i++){
      if(i<=maxFullStars) {
        stars.push(<FaStar key={i}></FaStar>);
      }else if(frac > 0 && !hasHalf) {
        stars.push(<FaStarHalfAlt key={i}></FaStarHalfAlt>);
        hasHalf = true;
      }else {
        stars.push(<FaRegStar key={i}></FaRegStar>);
      }
    }
    return stars;
  }
  return (
    <div className="catalog">
      <span className="img-wrapper"><img alt={catalog.title} src={catalog['image-url']} /></span>
      <span className="sponsored">sponsored <BsInfoCircle className='s-icon' /></span>
      <span className='title'>{catalog.title}</span>
      <div className='ratings'>
        <span>{getRatings(catalog.ratings)}</span>
        <span>{catalog.ratings.stars}</span>
      </div>
      <span className='pricing'>
        <sup>{catalog.currency.symbol}</sup>
        <span>{catalog.amount.toFixed(2)}</span>
      </span>
      <span className='store-info'>{catalog['store-info']}</span>
      <span className='customer-info'>{catalog['customer-info']}</span>
    </div>
  )
}

export default Catalog;