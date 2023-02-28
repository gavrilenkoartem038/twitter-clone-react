import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../../utils/tokenUtils";

interface commonState {
  token: string | null;
}

const initialState: commonState = {
  token: getToken(),
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    }
  }
})


export const { setToken } = commonSlice.actions

export default commonSlice.reducer