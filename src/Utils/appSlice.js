import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:false,
        isOnWatchPage:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isOnWatchPage=true;
            
        }
    },
})

export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;