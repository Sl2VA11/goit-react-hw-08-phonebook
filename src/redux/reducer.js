import { createReducer } from '@reduxjs/toolkit';

import { addItems, deleteItems, filterItems } from '././actions';



const initialStore = {
  items: [],
  filter: '',
};


const reducer = createReducer(initialStore, {
  [addItems]: (store, { payload }) => {
    
      
    
     
     
    return {
      ...store,
      items: [...store.items, payload],
    };
  },

  [deleteItems]: (store, { payload }) => {
    const deleteItems = store.items.filter(({ id }) => id !== payload);
    return { ...store, items: deleteItems };
  },

  [filterItems]: (store, { payload }) => {
     return { ...store, filter: payload };
  }
});


export default reducer;
