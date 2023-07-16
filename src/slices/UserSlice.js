import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    users: [],
    loading: false,
    error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
  })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (build) => {
        build.addCase(fetchUsers.pending, (state) => {
            state.loading = true
            debugger
        }) 
        build.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            debugger
        })   
        build.addCase(fetchUsers.rejected, (state) => {
            state.loading = false
            state.error = 'Failed to get Users'
            debugger
        })    
    }
})

export default userSlice.reducer