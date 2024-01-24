import axios from 'axios';

export const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },

});
export const fetchToken = async () => {
  try {
    const { data } = await moviesAPI.get('authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    // console.log('Sorry, Your token is not created.');
  }
};

export const createSessionId = async () => {
  try {
    const token = localStorage.getItem('request_token');
    if (token) {
      const { data } = await moviesAPI.post('authentication/session/new', {
        request_token: token,
      });
      const sessionId = data.session_id;
      localStorage.setItem('session_id', sessionId);
      return sessionId;
    }
  } catch (error) {
    console.log(error);
  }
};
