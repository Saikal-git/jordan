import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  search: [],
  dark: true,
  light: false,
};

export const CreateProductSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    createProduct(state, action) {
      state.product = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    productDelete(state, action) {
      let deletePro = state.product.filter(
        (item) => item.id !== action.payload.id
      );
      state.product = deletePro;
      localStorage.setItem("product", JSON.stringify(deletePro));
    },
    productSearch(state, action) {
      let filterSearch = state.product.filter((item) =>
        item.name.toUpperCase().includes(action.payload.toUpperCase())
      );
      state.search = filterSearch;
    },
    darkMode(state, action) {
      state.dark = true;
      state.light = false;
      // localStorage.setItem("dark", JSON.stringify(true));
      // localStorage.setItem("light", JSON.stringify(false));
    },
    lightMode(state, action) {
      state.dark = false;
      state.light = true;
      //   localStorage.setItem("dark", JSON.stringify(false));
      //   localStorage.setItem("light", JSON.stringify(true));
    },
  },
});
export const {
  createProduct,
  productDelete,
  productSearch,
  darkMode,
  lightMode,
} = CreateProductSlice.actions;
export default CreateProductSlice.reducer;
