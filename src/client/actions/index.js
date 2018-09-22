export const FETCH_POSTS_LIST = 'fetch_posts_list';
export const fetchPostsList = () => async (dispatch, getState, api) => {
    const res = await api.get('/wp-json/wp/v2/posts');
    console.log('fetch posts list is called' + res);
    dispatch({
        type: FETCH_POSTS_LIST,
        payload: res
    });
};

export const FETCH_POST = 'fetch_post';
export const fetchPost = (postId) => async (dispatch, getState, api) => {
    const res = await api.get(`/wp-json/wp/v2/posts/${postId}`);
    console.log('fetch post is called' + res);
    dispatch({
        type: FETCH_POST,
        payload: res
    });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};