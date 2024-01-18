import axios from 'axios'

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), //getCookie('X-CSRF-TOKEN'),
    'X-Requested-With': 'XMLHttpRequest'
  },
  withXSRFToken: true,
  withCredentials: true
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"))
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken
    }
    else{
      //window.location = '/login'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response?.status === 401) {
      window.location = '/login'
    }
    return Promise.reject(error)
  }
)

export default api