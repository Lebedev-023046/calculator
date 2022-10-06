import { createStore } from 'redux'

import { rootReducer } from './reducers'

const store = createStore(rootReducer)

store.subscribe(() => store.getState())

export default store
