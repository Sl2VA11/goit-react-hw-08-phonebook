import { createReducer } from '@reduxjs/toolkit';

import { filterContacts } from '././filter-actions'

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default filterReducer;