import { useState } from 'react';
// import PropTypes from 'prop-types';

import RadioButton from '../radioButton/RadioButton';

import './CardMain.scss';

function CardMain() {
  const [radio, setRadio] = useState();

  const handleChangeRadio = e => {
    const { value } = e.target;

    setRadio(() => value);

    console.log('value ==>', e, value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted radio:', radio);
  };

  return (
    <div className='card-main'>
      <div className='card-main__star'>
        <div className='card-main__icon'>
          <img
            src='/src/resources/img/icon-star.svg'
            alt='A star'
          />
        </div>
      </div>

      <h3 className='card-main__title'>How did we do?</h3>

      <p className='card-main__descr'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>

      <form
        className='card-main__rating'
        onSubmit={handleSubmit}>
        <div
          className='card-main__values'
          value={radio}
          onChange={e => handleChangeRadio(e)}>
          <RadioButton
            name='choice'
            id='choice1'
            value='Choice1'
            text='1'
          />
          <RadioButton
            name='choice'
            id='choice2'
            value='Choice2'
            text='2'
          />
          <RadioButton
            name='choice'
            id='choice3'
            value='Choice3'
            text='3'
          />
          <RadioButton
            name='choice'
            id='choice4'
            value='Choice4'
            text='4'
          />
          <RadioButton
            name='choice'
            id='choice5'
            value='Choice5'
            text='5'
          />
        </div>

        <input
          className='button'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
}

// RadioButton.propTypes = {
//   name: PropTypes.node,
//   id: PropTypes.node,
//   value: PropTypes.node,
//   text: PropTypes.node,
//   onChange: PropTypes.node,
//   checked: PropTypes.node,
// };

export default CardMain;
