import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

export const addPost = createAsyncThunk(
  "addPost",
  async (body, { rejectWithValue }) => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );

    return { data: res.data, status: res.status };
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {
      title: "",
      content: "",
      author: "",
      comments: [],
    },
    loading: "idle", // 'idle' | 'loading' | 'error'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = "error";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        if (status === 201) {
          state.posts.push({
            ...data,
            id: Date.now(),
          });
          state.post = {
            ...state.post,
            title: "",
            content: "",
          };
        }
      })
      .addCase(addPost.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default postSlice.reducer;
