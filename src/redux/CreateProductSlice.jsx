import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  search: [],
  theme: JSON.parse(localStorage.getItem("theme")) === false ? false : true,
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
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});
export const {
  createProduct,
  productDelete,
  productSearch,
  darkMode,
  lightMode,
  setTheme,
} = CreateProductSlice.actions;
export default CreateProductSlice.reducer;
