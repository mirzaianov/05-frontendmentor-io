import { useState } from 'react';
// import PropTypes from 'prop-types';

import RadioButton from '../radioButton/RadioButton';

import './CardMain.scss';

function CardMain() {
  const [radio, setRadio] = useState({ checked: false });

  const onChangeRadio = e => {
    const { checked } = e.target;
    console.log('checked', checked);

    if (checked === true) {
      setRadio({ checked: false });
    }

    if (checked === false) {
      setRadio({ checked: true });
    }
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
        // onSubmit={handleSubmit}
      >
        <div className='card-main__values'>
          <RadioButton
            name='choice'
            id='choice1'
            value='Choice1'
            text='1'
            onChange={onChangeRadio}
            checked={radio}
          />
          <RadioButton
            name='choice'
            id='choice2'
            value='Choice2'
            text='2'
            onChange={onChangeRadio}
            checked={radio}
          />
          <RadioButton
            name='choice'
            id='choice3'
            value='Choice3'
            text='3'
            onChange={onChangeRadio}
            checked={radio}
          />
          <RadioButton
            name='choice'
            id='choice4'
            value='Choice4'
            text='4'
            onChange={onChangeRadio}
            checked={radio}
          />
          <RadioButton
            name='choice'
            id='choice5'
            value='Choice5'
            text='5'
            onChange={onChangeRadio}
            checked={radio}
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
