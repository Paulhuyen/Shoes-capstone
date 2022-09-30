import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStore, getStoreJson, http, setCookie, setStore, setStoreJson, USER_LOGIN } from '../../util/tools';
import { history } from '../../index';
import axios from 'axios';
// import axios from 'axios';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN),

}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
        const userLogin = action.payload;
        state.userLogin = userLogin;
    }
  }
});

export const {getProfileAction} = userReducer.actions

export default userReducer.reducer



export const loginApi = (userLogin) => {

    return async (dispatch) => {
        try {
            // const result = await http.post('/Users/signin')
            const result = await axios({
                url:'https://shop.cyberlearn.vn/api/Users/signin',
                method:'POST',
                data:userLogin
            })
            console.log('login',result);
            //sau khi đăng nhập thành công lưu vào cookie vaf local
            setCookie(ACCESS_TOKEN,result.data.content.accessToken,30);
            setStore(ACCESS_TOKEN,result.data.content.accessToken);
            //đăng nhập thành công chuyển hướng trang
            history.push('/profile');
            //đăng nhập thành công dispatch action getProfile
            dispatch(getProfileApi());

        }catch(err){
            // history.push('/')
            console.log(err);
            alert('Đăng nhập thất bại')
        }
    }

}
// export const responseFacebook = (response) => {
//     return async (dispatch) => {
//         try {
//             console.log(response);
//                 axios({
//                     url:'https://shop.cyberlearn.vn/api/Users/facebooklogin',
//                     method:'POST',
//                     data: {
//                       facebookToken:response.accessToken,
//                     }
//                   }).then((res)=>{
//                     localStorage.setItem("accessToken", res.data.content.accessToken);
              
//                   })
//             }catch(err){
//                 console.log(err)
//             }
//     }
//   }

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN))=> {
    return async dispatch => {
        try {
            const result = await http.post('/Users/getProfile')
            // axios({
            //     url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
            //     method: 'POST',
            //     headers: {
            //         Authorization: 'Bearer ' + accessToken 
            //     }
            // });
            const action = getProfileAction(result.data.content);
            dispatch(action);
            // lưu vào storage
            setStoreJson(USER_LOGIN, result.data.content)
        }catch(err){
            console.log(err)
        }
    }
}
