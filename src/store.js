import {configureStore} from '@reduxjs/toolkit'
import { cakeReducer } from './slices/CakeSlice'
import { iceCreamReducer } from './slices/IceCreamSlice'
import userReducer from './slices/UserSlice'

// add reducer here
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})

export default store