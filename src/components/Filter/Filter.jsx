import React from 'react';
import css from './Filter.module.css';
import propTypes from 'prop-types';
export default function Filter({ value, onChange }) {
  
  return (
    <div className={css.filterWrapper}>
      {/* <label className={css.label}>Search  */}
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search "
      />
      {/* </label> */}
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func
};