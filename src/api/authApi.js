import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});



export const userRegister = async registerCredentials => {
  const { data } = await instance.post('/users/signup', registerCredentials);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;

  return data;
};

export const userLogin = async loginCredential => {
  const { data } = await instance.post('/users/login', loginCredential);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
};

export const userLogOut = async () => {
  await instance.post('/users/logout');
};


export const getCurrentUser = async (token) => {
  try {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await instance.get('/users/current')
    
    return data
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
  
}

export default instance;
