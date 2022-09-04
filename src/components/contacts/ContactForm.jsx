import {  useState } from "react";
import css from "./Contacts.module.css";
import propTypes from 'prop-types';

export function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    onSubmit(name, number);

    e.target.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.textFieldFloating}>
          <label className={css.textFieldLabel} htmlFor="name">
            Name:
          </label>
          <input
            className={css.textFieldInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </div>
        <div className={css.textFieldFloating}>
          <label className={css.textFieldLabel} htmlFor="number">
            Number:
          </label>
          <input
            className={css.textFieldInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </div>
        <div className={css.btnWrapper}>
          <button type="submit" className={css.btn}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: propTypes.func
};
