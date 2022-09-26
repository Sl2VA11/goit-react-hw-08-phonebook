import css from './Contacts.module.css';
import React from 'react';
import ContactItem from './ContactItem';
import propTypes from 'prop-types';

export default function ContactsList({ deleteContact , items, filter}) {
  return (
    <ul className={css.ContactList}>
      {filter === ''
        ? items.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            );
          })
        : items
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => {
              return (
                <ContactItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                  deleteContact={deleteContact}
                />
              );
            })}
    </ul>
  );
}

ContactsList.propTypes = {
  filter: propTypes.string,
  deleteContact: propTypes.func,
  items: propTypes.array,
};