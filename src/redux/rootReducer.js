import { combineReducers } from "redux";
import { addReducer, divReducer, mulReducer, subReducer } from "./reducer";

const rootReducer = combineReducers({
    addition: addReducer,
    subtract: subReducer,
    multiply: mulReducer,
    divide: divReducer  
})

export default rootReducer