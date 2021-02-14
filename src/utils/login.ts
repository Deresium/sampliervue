import axiosServer from "@/axios/axiosServer";
import store from "@/store/store";

async function useLogin(email: string | null, password: string | null){
	const isLoggedIn = await store.getters['login/isLoggedIn'];
	if(!isLoggedIn) {
		try {
			const response = await axiosServer.post('/login', {
				email,
				password
			});
			if (response.status === 200) {
				await store.dispatch('login/loginUser', response.data);
				await store.dispatch('login/hideLoginModal');
			}
		}catch(error){
			if(error.response.status === 400)
				alert(error.response.data);
		}
	}
}

export default useLogin;