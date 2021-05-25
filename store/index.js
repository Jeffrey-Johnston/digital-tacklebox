import { configureStore } from "@reduxjs/toolkit";

import tackleboxSlice from "./tackleBox/tackle-box-slice";
import uiSlice from "./UI/ui-slice";

const store = configureStore({
  reducer: { tackleBox: tackleboxSlice.reducer, ui: uiSlice.reducer },
});

export default store;
