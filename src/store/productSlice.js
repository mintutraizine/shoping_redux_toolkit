import axiosinstance from '../utilities/axiosInstance';

const { createSlice, createAsyncThunk,getDefaultMiddleware } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
       catedata: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProducts1.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts1.fulfilled, (state, action) => {
                state.catedata = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts1.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
    /* extraReducers: (builder) => {
        builder
           
            .addCase(fetchProducts1.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts1.fulfilled, (state, action) => {
                state.catedata = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts1.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }, */
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await axiosinstance.get('/products');
    return res;
});
export const fetchProducts1 = createAsyncThunk('products/fetch1', async () => {
    const res = await axiosinstance.get('products/category/jewelery');
    console.log("mintu"+res)
    return res;
});

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
