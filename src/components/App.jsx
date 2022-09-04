import { React} from "react";
import { Form } from "./contacts/ContactForm";
import { nanoid } from "nanoid";
import ContactsList from "./contacts/ContactsList";
import {useSelector, useDispatch} from 'react-redux'
import Filter from "./Filter/Filter";
import { addItems, deleteItems, filterItems } from '../redux/actions';
import Notiflix from "notiflix";

export function App() {
  const items = useSelector(state => state.reducer.items);
  const filter = useSelector(state => state.reducer.filter)
  const dispatch = useDispatch();
 
  const formSubmitHandler = (name, number) => {
    if (items.filter(contact => contact.name === name).length > 0) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const action = addItems(contact);

    dispatch(action);
    

    
  };

  

  
  const changeFilter = (e) => {
    console.log(e.currentTarget.value);
    dispatch(filterItems(e.currentTarget.value));
  }


  const deleteContact = (contactId) => {
    console.log(contactId);
    dispatch(deleteItems(contactId));
    
  };
  

  
  
  return (
    <>
      <h1 className="phonebook-title">Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className="phonebook-contact-title">Contact </h2>

      <Filter onChange={changeFilter} value={filter} />
      <p className="after-title">{items.length === 0 && 'No contacts'}</p>

      {items.length > 0 && (
        <ContactsList
          filter={filter}
          deleteContact={deleteContact}
          items={items}
        />
      )}
    </>
  );
}
















