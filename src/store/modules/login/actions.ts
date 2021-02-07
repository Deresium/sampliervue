import {ActionTree} from "vuex";
import State from "@/store/modules/login/state";
import StoreState from "@/store/StoreState";
import Role from "@/enums/role";

const actions: ActionTree<State, StoreState> = {
	showLoginModal(context): void{
		context.commit('showLoginModal');
	},
	hideLoginModal(context): void{
		context.commit('hideLoginModal');
	},
	loginUser(context, role: Role){
		context.commit('loginUser', role);
	},
	logoutUser(context){
		context.commit('logoutUser');
	}
}

export default actions;