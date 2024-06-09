import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurantDetails= createAsyncThunk('restaurants/fetchRestaurantDetails',async()=>{
    const result = await axios.get("http://localhost:3000/restaurants")
    return result.data;
})
const restaurantSlice = createSlice({
    name:'restaurants',
    initialState:{
        allRestaurants:[],
        allRestaurantsDummy:[],
        Loading:false,
        error:""
    },
    reducers:{
       searchRestaurant:(state,action)=>{
        state.allRestaurants=state.allRestaurantsDummy.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurantDetails.fulfilled,(state,action)=>{
            state.allRestaurants=action.payload,
            state.allRestaurantsDummy=action.payload,
            state.Loading=false,
            state.error=""
        })
        builder.addCase(fetchRestaurantDetails.pending,(state,action)=>{
            state.allRestaurants=[],
            state.allRestaurantsDummy=[],
            state.Loading=true,
            state.error=""
        })
        builder.addCase(fetchRestaurantDetails.rejected,(state,action)=>{
            state.allRestaurants=[],
            state.allRestaurantsDummy=[],
            state.Loading=false,
            state.error="API call failed ....please try again later"
        })
    }
})


export default restaurantSlice.reducer
export const {searchRestaurant}=restaurantSlice.actions
















// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
//  const result = await axios.get("https://dummyjson.com/products")
//  localStorage.setItem("allProducts",JSON.stringify(result.data.products))
//  return result.data.products
// })

// const productSlice = createSlice({
//     name:'products',
//     initialState:{
//         allProducts:[],
//         allProductsDummy:[],
//         loading:false,
//         error:""
//     },
//     reducers:{
//       searchProduct : (state,action)=>{
//         state.allProducts = state.allProductsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
//       }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchProducts.fulfilled,(state,action)=>{
//             state.allProducts = action.payload
//             state.allProductsDummy = action.payload
//             state.loading = false,
//             state.error = ""
//         })
//         builder.addCase(fetchProducts.pending,(state,action)=>{
//             state.allProducts = []
//             state.allProductsDummy = []
//             state.loading = true,
//             state.error = ""
//         })
//         builder.addCase(fetchProducts.rejected,(state,action)=>{
//             state.allProducts = []
//             state.allProductsDummy = []
//             state.loading = false,
//             state.error = "API Call failed...Please try after some time!!!"
//         })
//     }
// })

// export default productSlice.reducer
// export const {searchProduct} = productSlice.actions