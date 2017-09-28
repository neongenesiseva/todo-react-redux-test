import {combineReducers} from 'redux';
import main from './main';
import isEdit from './toggleEdit';

const rootReducer = combineReducers({
    main:main,
    isEdit:isEdit
});

export default rootReducer;