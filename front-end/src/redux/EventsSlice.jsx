import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    events: [],
    oneData: {},
    error: null,
    loading: false
};
export const getAllData = createAsyncThunk('getAllData', async () => {
    const response = await axios.get('http://localhost:5050/api/events')
    return response.data.data
})
export const getOneData = createAsyncThunk('getOneData', async (id) => {
    const response = await axios.get(`http://localhost:5050/api/events/${id}`)
    return response.data.data
})

export const deleteData = createAsyncThunk('deleteData', async (id) => {
    const response = await axios.delete(`http://localhost:5050/api/events/${id}`)
    return response.data.data
})

export const postData = createAsyncThunk('postData', async (newData) => {
    const response = await axios.post('http://localhost:5050/api/events', newData)
    return response.data.data
})
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        // search ve sort yazilacaq

    },
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state, action) => {
            state.loading = true
        }).addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false
            state.events = action.payload
        }).addCase(getAllData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })


        builder.addCase(getOneData.pending, (state, action) => {
            state.loading = true
        }).addCase(getOneData.fulfilled, (state, action) => {
            state.loading = false
            state.oneData = action.payload
        }).addCase(getOneData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message

        })


        builder.addCase(postData.pending, (state, action) => {
            state.loading = true
        }).addCase(postData.fulfilled, (state, action) => {
            state.loading = false
            state.events.push(action.payload)
        }).addCase(postData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message

        })

        builder.addCase(deleteData.pending, (state, action) => {
            state.loading = true
        }).addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false
            state.events = [...state.events.filter(x => x._id != action.payload._id)]
        }).addCase(deleteData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message

        })
    }
});


export const {
} = eventSlice.actions;

export default eventSlice.reducer;