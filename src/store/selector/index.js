export const selectPosts = (state) => state.posts.posts;

export const selectComments = (state) => state.posts.post.comment;

export const selectLoadingState = (state) => state.posts.loading;
