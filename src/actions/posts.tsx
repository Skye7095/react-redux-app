import axios from 'axios';

// export const fetchPosts = ():any => {
//   return async function fetchPostsThunk(dispatch: any, getState: any) {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     dispatch({type: 'FETCH_POSTS', payload: res.data})
//   }
// }


// modern ES2015 형태로 변환
export const fetchPosts = (): any => async (dispatch: any, getState: any) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  dispatch({type: 'FETCH_POSTS', payload: res.data})
}