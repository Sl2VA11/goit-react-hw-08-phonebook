import React from 'react';
import css from './Filter.module.css';
import propTypes from 'prop-types';
export default function Filter({ value, onChange }) {
  
  return (
    <div className={css.filterWrapper}>
      
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search "
      />
     
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func
};