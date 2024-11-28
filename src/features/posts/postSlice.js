import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : [] , 
    isLoading : false , 
    isError : false , 
    error : null
}

const postSlice = createSlice( {

    name : "posts" , 
    initialState , 
    extraReducers: (builder) => {
        builder.addCase()
    }

})

export default postSlice.reducer ; 
