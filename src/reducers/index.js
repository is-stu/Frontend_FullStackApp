import { combineReducers } from 'redux'
import questionsReducer from './questionReducer';

const rootReducer = combineReducers({
    question: questionsReducer
})

export default rootReducer