import axios from 'axios'

const instance= axios.create({
   baseURL: "https://e-commerce-json-server-chfy.onrender.com",
});


export default instance