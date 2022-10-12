import { ADD_VALUE } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  expressionHistory: '',
  currentValue: '',
  expression: '',
  historyList: [],
}

export const appReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ADD_VALUE:
      return {
        ...state,
        expression: state.expression + payload.value,
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  appReducer: appReducer,
})
