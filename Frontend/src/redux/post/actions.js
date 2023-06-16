import {baseurl} from '../../const/const'

export const postActions = {
  REQUEST: '@@post/REQUEST',
  GET_POSTS_IN_SPARK_FULFILLED: '@@post/GET_POSTS_IN_SPARK_FULFILLED',
  GET_POSTS_IN_SPARK_ERROR: '@@post/GET_POSTS_IN_SPARK_ERROR',
  SEND_POST_IN_SPARK_FULFILLED: '@@post/SEND_POST_IN_SPARK_FULFILLED',
  SEND_POST_IN_SPARK_ERROR: '@@post/SEND_POST_IN_SPARK_ERROR',
  CLEAR_ERROR: '@@post/CLEAR_ERROR',

  getPostsInSpark: token => ({
    type: postActions.REQUEST,
    payload: {
      data: {},
      method: 'get',
      url: baseurl + '/api/talktospark',
      token,
      sucess: postActions.getPostsInSparkFulField,
      error: postActions.getPostsInSparkError
    }
  }),
  getPostsInSparkFulField: resp => ({
    type: postActions.GET_POSTS_IN_SPARK_FULFILLED,
    payload: {resp}
  }),
  getPostsInSparkError: error => ({
    type: postActions.GET_POSTS_IN_SPARK_ERROR,
    payload: {error}
  }),
  sendPostInSpark: ({data, token}) => ({
    type: postActions.REQUEST,
    payload: {
      data: data,
      method: 'post',
      url: baseurl + '/api/talktospark',
      token,
      sucess: postActions.sendPostInSparkFulField,
      error: postActions.sendPostInSparkError
    }
  }),
  sendPostInSparkFulField: resp => ({
    type: postActions.SEND_POST_IN_SPARK_FULFILLED,
    payload: {resp}
  }),
  sendPostInSparkError: error => ({
    type: postActions.SEND_POST_IN_SPARK_ERROR,
    payload: {error}
  }),
  clearError: () => ({
    type: postActions.CLEAR_ERROR
  })
}
