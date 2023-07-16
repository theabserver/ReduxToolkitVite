import {configureStore} from '@reduxjs/toolkit'
import { cakeReducer } from './slices/CakeSlice'
import { iceCreamReducer } from './slices/IceCreamSlice'

// add reducer here
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

export default store