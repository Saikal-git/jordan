import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const BasketProductSlice = createSlice({
  name: "CREATE_BASKET",
  initialState,
  reducers: {
    basketProduct(state, action) {
      let findBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (findBasket) {
        console.log("bar");
      } else {
        state.basket = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    deleteBasket(state, action) {
      let delBasket = state.basket.filter((item) => item.id !== action.payload);
      state.basket = delBasket;
      localStorage.setItem("basket", JSON.stringify(delBasket));
    },
    dicrementQuantity(state, action) {
      let dicChange = state.basket.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(dicChange));
      state.basket = dicChange;
    },
    incrementQuantity(state, action) {
      let change = state.basket.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(change));
      state.basket = change;
    },
    removeall(state, action) {
      state.basket = [];
      return localStorage.removeItem("basket");
    },
  },
});

export const {
  basketProduct,
  deleteBasket,
  dicrementQuantity,
  incrementQuantity,
  removeall
} = BasketProductSlice.actions;
export default BasketProductSlice.reducer;
