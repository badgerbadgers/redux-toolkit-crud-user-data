import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { data: UsersData },
  reducers: {
    addUser: (state, action) => {
      //uses push method to modify array's data
      state.data.push(action.payload);
    },

    deleteUser: (state, action) => {
      //uses filter to create a shallow array
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      //users map method and if statement to modify the index
      state.data.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    }
  }
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
