import qrCodeImage from '../../resources/img/image-qr-code.png';
import './Card.scss';
function Card() {
  return (
    <div className='card'>
      <img
        src={qrCodeImage}
        alt='QR Code'
        className='card__image'
      />
      <h1 className='card__title'>Improve your front-end skills by building projects</h1>
      <p className='card__text'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
}

export default Card;
