const { createSlice } = require('@reduxjs/toolkit');

const loginModalSlice = createSlice({
    name: 'loginmodal',
    initialState: {
        status: false,
        modalScreeenName:''
    },
    reducers: {
        openmodal(state, action) {
            console.log("state value login"+state.status)
            state.status = true;
        },
        closemodal(state, action) {
            console.log("state value login"+state.status)
            state.status = false;
        },
        changeScreenName(state, action) {
            console.log("state value login"+state.status)
            state.modalScreeenName = action.payload;
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    },
});

export const { openmodal, closemodal,changeScreenName } = loginModalSlice.actions;
export default loginModalSlice.reducer;
