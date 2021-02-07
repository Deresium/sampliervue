import {MutationTree} from "vuex";
import State from "@/store/modules/login/state";
import Role from "@/enums/role";

const mutations: MutationTree<State> = {
	showLoginModal(state: State){
		state.isShowLoginModal = true;
	},
	hideLoginModal(state: State){
		state.isShowLoginModal = false;
	},
	loginUser(state: State, role: Role){
		state.loginUser(role);
	},
	logoutUser(state: State){
		state.logoutUser();
	}
}

export default mutations;