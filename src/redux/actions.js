
import { createAction } from '@reduxjs/toolkit';

export const addItems = createAction('items/add');

export const deleteItems = createAction('items/delete');

export const filterItems = createAction('items/filter');
