import Role from "@/enums/role";

export default class State{
	private showLoginModal: boolean;
	private loggedIn: boolean;
	private role: Role | null;
	
	constructor() {
		this.showLoginModal = false;
		this.loggedIn = false;
		this.role = null;
	}
	
	get isShowLoginModal(){
		return this.showLoginModal;
	}
	
	set isShowLoginModal(showLoginModal: boolean){
		this.showLoginModal = showLoginModal;
	}
	
	get userRole(): Role|null{
		return this.role;
	}
	
	get onlyAdmin(): boolean{
		return this.role === Role.ADMIN;
	}
	
	get onlyAuthenticated(): boolean{
		return this.role !== null;
	}
	
	get isLoggedIn(): boolean{
		return this.loggedIn;
	}
	
	loginUser(role: Role){
		this.role = role;
		this.loggedIn = true;
	}
	
	logoutUser(){
		this.role = null;
		this.loggedIn = false;
	}
}