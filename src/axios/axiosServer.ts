import axios from "axios";
import store from "@/store/store";
import router from "@/router/router.ts";

const axiosServer =  axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    withCredentials: process.env.NODE_ENV !== 'production'
});

axiosServer.interceptors.response.use((response) => {
    return response;
}, async function(error){
    if(error.response.status === 401){
        alert('Suite à une trop longue inactivité, vous avez été déconnecté');
        await store.dispatch('login/logoutUser');
        await router.push({name: 'Home'})
        return false;
    }
    else
        return Promise.reject(error);
})

export default axiosServer;