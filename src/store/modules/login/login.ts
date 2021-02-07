import State from "@/store/modules/login/state";
import {Module} from "vuex";
import StoreState from "@/store/StoreState";
import actions from "@/store/modules/login/actions";
import mutations from "@/store/modules/login/mutations";
import getters from "@/store/modules/login/getters";

const state: State = new State();

const login: Module<State, StoreState> = {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}

export default login;