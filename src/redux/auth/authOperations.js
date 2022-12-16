import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
    };

    export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        Notiflix.Notify.success(`Sign up`);
        token.set(data.token);
        return data;
    } catch (error) {
        Notiflix.Notify.failure(`${error.message}`);
        return error.response.status;
    }
    });

    export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        Notiflix.Notify.success(`Login`);
        return data;
    } catch (error) {
        Notiflix.Notify.failure(`Email or password not correct`);
        return error.response.status;
    }
    });

    export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        Notiflix.Notify.success(`Logout`);
        token.unset();
    } catch (error) {}
    });

    export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);

        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {}
    }
    );