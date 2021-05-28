import { combineReducers } from 'redux'
import questionsReducer from './questionReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    auth: authReducer
})

export default rootReducer