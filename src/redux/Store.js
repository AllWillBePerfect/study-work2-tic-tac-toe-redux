import {configureStore} from '@reduxjs/toolkit'
import {counterRedux} from "./CounterRedux";

export default configureStore({
    reducer: {
        counterRedux: counterRedux.reducer
    },
})