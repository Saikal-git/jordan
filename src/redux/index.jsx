import { configureStore } from "@reduxjs/toolkit";
import CreateProductSlice from "./CreateProductSlice";
import BasketProductSlice from "./basketProductSlice";

export const store = configureStore({
  reducer: {
    main: CreateProductSlice,
    basket: BasketProductSlice,
  },
});
