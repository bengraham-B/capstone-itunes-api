import { configureStore } from '@reduxjs/toolkit'

import refreshReducer from './refresh'

export default configureStore({
    reducer: refreshReducer
})