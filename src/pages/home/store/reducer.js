import {CHANGE_INPUT_VSLUE,INITDATA}  from './actionType.js'
const defaultState = {
    inputValue:'默认信息',
    list:{},
    myname:'lihua'
};
export default (state=defaultState,action)=>{
    if(action.type === CHANGE_INPUT_VSLUE){
        let newState1 = JSON.parse(JSON.stringify(state));
        newState1.inputValue = action.value;
        return newState1;
    }else if(action.type === INITDATA){
        let newState2 = JSON.parse(JSON.stringify(state));
        console.log(action.initData);
        newState2.list = action.initData;
        return newState2;
    }
    return state;
}