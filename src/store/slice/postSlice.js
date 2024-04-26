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
    loading: "idle", // 'idle' | 'loading' | 'error'
  },
  reducers: {
    addComment(state, action) {
      const { postId, content } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        if (!post.comments) {
          post.comments = [];
        }
        const newComment = {
          id: Date.now(),
          content,
        };
        post.comments.push(newComment);
      }
    },
  },
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
            useId: "1",
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

export const { addComment } = postSlice.actions;

export default postSlice.reducer;
