import {CHANGE_INPUT_VSLUE,INITDATA}  from './actionType.js'
const defaultState = {
    inputValue:'默认信息',
    list:{},
    myname:'lihua'
};
export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_INPUT_VSLUE:
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1.inputValue = action.value;
            return newState1;
        case INITDATA:
            let newState2 = JSON.parse(JSON.stringify(state));
            console.log(action.initData);
            newState2.list = action.initData;
            return newState2;
        default:
        return state;
    }
}