function useIsKey(key: string): boolean{
	const cookies = document.cookie;
	return cookies.split('; ').find(cookie => cookie.startsWith(key)) !== undefined;
}

function useGetCookie(key: string): string{
	const cookies = document.cookie;
	const cookie = cookies.split('; ').find(cookie => cookie.startsWith(key));
	if(cookie)
		return cookie
	return '';
}

export {
	useIsKey,
	useGetCookie
}