import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Register from '../../pages/Register/Register';
import { ACCESS_TOKEN, getStoreJson, http, setCookie, setStore, USER_SINGUP } from '../../util/tools';

const initialState = {
    //   userRegister: {}
}

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {
    getRegisterApi: (state, actions)=>{
        state.userRegister = actions.payload;
        state.Register = Register;
    }
  }
});

export const {getRegisterApi} = registerReducer.actions

export default registerReducer.reducer

export const registerApi = (values) => {
    return async(dispatch)=> {
        var mess ='';
        try {
            const result = await http.post('/Users/signup', values)
            // let result = await axios({
            //     url:'https://shop.cyberlearn.vn/api/Users/signup',
            //     method: "POST",
            //     data:values
            // })
            mess = result.data;
            console.log(mess.content);
            alert('Đăng ký thành công')
        }
        catch(err){ 
            console.log(err)
            alert('Đăng ký thất bại')
        }
    }
}