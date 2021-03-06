export const FETCH_POSTS_LIST = 'fetch_posts_list';
export const fetchPostsList = () => async (dispatch, getState, api) => {
    const res = await api.get('/rest/v1.1/sites/uxengineer.wordpress.com/posts');
    console.log(res.data);
    dispatch({
        type: FETCH_POSTS_LIST,
        payload: res.data.posts
    });
};

export const FETCH_POST = 'fetch_post';
export const fetchPost = (postId) => async (dispatch, getState, api) => {
    const res = await api.get(`/posts/${postId}`);
    console.log('fetch post is casdafsdflled' + res.data);
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