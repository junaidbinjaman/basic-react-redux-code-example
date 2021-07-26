import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import bookReducer from "./book/bookReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  book: bookReducer,
  user: userReducer
})

export default rootReducer