import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/tools";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      //lấy dữ liệu payload
      const arrProduct = action.payload;
      //cập nhật lại state
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      const productDetail = action.payload;
      state.productDetail = productDetail;
    }
  },
});

export const { getProductAction , getProductDetailAction} = productReducer.actions;

export default productReducer.reducer;
//-------------- Action Api --------------
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get('/product')
      const action = getProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllProductDetailApi = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`/Product/getbyid?id=${id}`)
      // axios({
      //   url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      //   method: "GET",
      // });
      const action = getProductDetailAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
  }

