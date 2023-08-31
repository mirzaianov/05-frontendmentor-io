// import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.scss';

const RadioButton = ({ name, id, value, onChange, checked, text }) => {
  return (
    <label
      htmlFor={id}
      className='radio-label'>
      <input
        className='radio-input'
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span
        data-title={text}
        className='custom-radio'>
        {text}
      </span>
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.node,
  id: PropTypes.node,
  value: PropTypes.node,
  text: PropTypes.node,
  onChange: PropTypes.node,
  checked: PropTypes.node,
};

export default RadioButton;
