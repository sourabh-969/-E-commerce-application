
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [], // items: empty array
    },
    reducers:{
        addItem: (state, action) =>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(existingItem) {
              existingItem.quantity +=1;
            } else {
               state.items.push({...newItem, quantity:1})
            }
        },
        removeItem: (state, action) =>{
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const itemToUpdate = state.items.find((item)=> item.id === id);
            if(itemToUpdate)
              itemToUpdate.quantity = quantity;
          }
    },
});

export const {addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;