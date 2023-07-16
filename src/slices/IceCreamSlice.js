import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamSlice = createSlice ({
    name: 'icecream',
    initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numOfIceCreams --
        },
        restockIceCream: (state, action) => {
            state.numOfIceCreams += Number(action.payload)
        },
        replenishIceCream: (state) => {state.numOfIceCreams = initialState.numOfIceCreams}
    }
})

export const iceCreamReducer = iceCreamSlice.reducer
export const {orderIceCream, restockIceCream, replenishIceCream} = iceCreamSlice.actions
