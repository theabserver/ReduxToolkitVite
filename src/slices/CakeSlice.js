
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice(
    {
        name: 'cake',
        initialState,
        reducers:{
            orderCake: (state) => {
                state.numOfCakes --
            },
            restockCakes: (state, action) => {
                state.numOfCakes += Number(action.payload)
            },
            replenishCakes: (state) => {
                state.numOfCakes = initialState.numOfCakes
            }
        }
    }
)

export const cakeReducer = cakeSlice.reducer
export const {orderCake, restockCakes, replenishCakes} = cakeSlice.actions