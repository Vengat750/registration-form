import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import formReducer from './form-reducer';


const rootReducer= combineReducers({
    form : reduxFormReducer,
     details: formReducer
});

export default rootReducer;