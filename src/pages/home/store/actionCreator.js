import {CHANGE_INPUT_VSLUE,INITDATA}  from './actionType.js'
import * as API from '@/api';
import store from '@/store/index.js';

export const changeInputValue = (value)=>({
    type:CHANGE_INPUT_VSLUE,
    value
})

export const getListData = ()=>{
    return async()=>{
        let response = await API.getData();
        store.dispatch({
            type:INITDATA,
            initData:response.rs
        })
    }
}
