import { combineReducers } from 'redux';
import { reducer as homeReducer } from '@/pages/home/store';
import { reducer as myReducer } from '@/pages/my/store';

const reducer = combineReducers({ 
    home: homeReducer,
    my: myReducer
});

export default reducer;