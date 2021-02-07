import {GetterTree} from "vuex";
import State from "@/store/modules/login/state";
import StoreState from "@/store/StoreState";
import Role from "@/enums/Role";

const getters: GetterTree<State, StoreState> = {
	isShowLoginModal(state): boolean{
		return state.isShowLoginModal;
	},
	isLoggedIn(state): boolean{
		return state.isLoggedIn;
	},
	getRole(state): Role | null{
		return state.userRole;
	},
	onlyAdmin(state): boolean{
		return state.onlyAdmin;
	},
	onlyAuthenticated(state): boolean{
		return state.onlyAuthenticated;
	}
}

export default getters;