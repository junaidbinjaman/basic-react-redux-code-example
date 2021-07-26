import { BUY_BOOK } from './bookType'

const initialState = {
  numOfBook: 30
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numOfBook: state.numOfBook - 1
      }


    default:
      return state
  }
}

export default bookReducer