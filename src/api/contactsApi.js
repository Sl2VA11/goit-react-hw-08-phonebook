
import instance from './authApi';


export const getContacts = async() => {
   const { data } = await instance.get('/contacts');
   console.log(data)
   return data
}

export const addContacts = async (contact) => {
   const { data } = await instance.post('/contacts', contact);
   console.log(data)
   return data
}

export const removeContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  console.log(data);

  return data;
};

