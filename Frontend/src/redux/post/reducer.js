import { postActions } from "./actions";

export const PostState = () => ({
  posts: null,
  error: "",
});

export function PostReducer(state = new PostState(), { payload, type }) {
  switch (type) {
    case postActions.REQUEST:
      return {
        ...state,
        status: "request_pending",
      };
    case postActions.GET_POSTS_IN_SPARK_FULFILLED:
      return {
        ...state,
        posts: payload.resp,
        status: "get_post_request_success",
      };
    case postActions.GET_POSTS_IN_SPARK_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_post_request_error",
      };
    case postActions.SEND_POST_IN_SPARK_FULFILLED:
      return {
        ...state,
        posts: [...state.posts, ...payload.resp],
        status: "send_post_request_success",
      };
    case postActions.SEND_POST_IN_SPARK_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "send_post_request_error",
      };
    case postActions.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        status: "",
      };
    default:
      return {
        ...state,
      };
  }
}
