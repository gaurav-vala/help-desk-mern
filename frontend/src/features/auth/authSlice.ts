import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import authService from "./authService"

// Get user from Localstorage
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

type UserData = {
  email: string
  password: string
}

// Register New User
export const register = createAsyncThunk(
  'auth/register', async (user: UserData, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      const message = error.response?.data?.message || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

// Login User
export const login = createAsyncThunk(
  'auth/login', async (user: UserData, thunkAPI) => {
    // console.log(user);
    try {
      return await authService.login(user)
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      const message = error.response?.data?.message || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

export const logout = createAsyncThunk(
  'auth/logout', async () => {
    await authService.logout()
  })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: state => {
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
