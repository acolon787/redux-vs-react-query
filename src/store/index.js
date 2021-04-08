import { configureStore } from "@reduxjs/toolkit";
import counter from './counter'
import user from './user'

export default configureStore({
    reducer: {
        counter,
        user
    },
});
