import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
   'contacts/fetchContacts',
   async () => {
      try {
         const { data } = await axios.get('/contacts');
         return data;
      } catch (error) {
         console.log('fetchContacts-error', error);
      }
   }
);

export const addContact = createAsyncThunk(
   'contacts/addContact',
   async newContact => {
      try {
         const { data } = await axios.post('/contacts', newContact);
         Notiflix.Notify.success(`Contact created`);
         return data;
      } catch (error) {
         console.log('addContact-error', error);
      }
   }
);

export const deleteContact = createAsyncThunk(
   'contacts/deleteContact',
   async contactId => {
      try {
         await axios.delete(`/contacts/${contactId}`);
         Notiflix.Notify.success(`Contact is delete`);
         return contactId;
      } catch (error) {
         console.log('deleteContact-error', error);
      }
   }
);

export const changeContact = createAsyncThunk(
   'contacts/changeContact',
   async ({ id, name, number }) => {
      try {
         const { data } = await axios.patch(`/contacts/${id}`, {
            name,
            number,
         });
         Notiflix.Notify.success(`Contact was edited`);
         return data;
      } catch (error) {
         console.log('changeContact-error', error);
      }
   }
);