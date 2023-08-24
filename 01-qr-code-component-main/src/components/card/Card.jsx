import qrCodeImage from '../../resources/img/image-qr-code.png';
function Card() {
  return (
    <>
      <img
        src={qrCodeImage}
        alt='QR Code'
        className='card__image'
      />
      <h1 className='card__title'>Improve your front-end skills by building projects</h1>
      <p className='card__text'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </>
  );
}

export default Card;
