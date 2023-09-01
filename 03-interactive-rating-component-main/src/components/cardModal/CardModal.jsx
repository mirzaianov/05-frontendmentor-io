import './CardModal.scss';

function CardModal() {
  return (
    <div className='card-modal'>
      <div className='card-modal__image'>
        <img
          src='/src/resources/img/illustration-thank-you.svg'
          alt='A smartphone'
        />
      </div>

      <span className='card-modal__info'>You selected 4 out of 5</span>

      <h3 className='card-modal__title'>Thank you!</h3>

      <p className='card-modal__descr'>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>
    </div>
  );
}

export default CardModal;
