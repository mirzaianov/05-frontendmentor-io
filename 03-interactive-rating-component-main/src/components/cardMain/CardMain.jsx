import { useState } from 'react';

import './CardMain.scss';

function CardMain() {
  const [radio, setRadio] = useState(true);

  const handleChange = e => {
    setRadio(e.target.checked);

    console.log(e, radio);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(radio);
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
        className='card--main__rating'
        onSubmit={handleSubmit}>
        <div className='card-main__values'>
          <input
            className='card-main__value'
            type='radio'
            id='choice1'
            name='choice'
            value='choice1'
            onChange={handleChange}
            checked={true}
          />
          <label
            className='label'
            htmlFor='choice1'>
            1
          </label>

          <input
            className='card-main__value'
            type='radio'
            id='choice2'
            name='choice'
            value='choice2'
            onChange={handleChange}
          />
          <label
            className='label'
            htmlFor='choice2'>
            2
          </label>

          <input
            className='card-main__value'
            type='radio'
            id='choice3'
            name='choice'
            value='choice3'
            onChange={handleChange}
          />
          <label
            className='label'
            htmlFor='choice3'>
            3
          </label>

          <input
            className='card-main__value'
            type='radio'
            id='choice4'
            name='choice'
            value='choice4'
            onChange={handleChange}
          />
          <label
            className='label'
            htmlFor='choice4'>
            4
          </label>

          <input
            className='card-main__value'
            type='radio'
            id='choice5'
            name='choice'
            value='choice5'
            onChange={handleChange}
          />
          <label
            className='label'
            htmlFor='choice5'>
            5
          </label>
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

export default CardMain;
