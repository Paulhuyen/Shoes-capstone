import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [],
    arrProduct: [],
}

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {}
});

export const {} = cartReducer.actions

export default cartReducer.reducer