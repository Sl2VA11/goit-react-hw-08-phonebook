import axios from 'axios';

const instance = axios.create({
   baseURL:'https://631875fef6b281877c6d08b8.mockapi.io/contacts'
})

export const getContacts = async() => {
   const { data } = await instance.get('/')
   console.log(data)
   return data
}

export const addContacts = async (contact) => {
   const { data } = await instance.post('/', contact)

   return data
}

export const removeContact = async id => {
   console.log(id)
   const { data } = await instance.delete(`/${id}`);
   console.log(data)

  return data;
};

