import { writable } from 'svelte/store';

export const isLogged = writable(false);

export const checkCredential = async () => {
	return localStorage.getItem("accessToken") ? true : false;
}

export const registCredential = async ( username: string, password:string ) => {
	if ( username === "admin" && password === "admin" ) {
		localStorage.setItem("accessToken", "ThisIsSuperSecretKey123")
		return true
	} else {
		return false
	}
}