import Cookies from "js-cookie";
import endpoint from "./endpoint";

export const fetchUserProfile = async () => {
	const token = Cookies.get("accessToken"); // Replace 'access_token' with your actual cookie name

	if (!token) {
		throw new Error("No access token found");
	}

	const response = await fetch(`${endpoint}user/profile/`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error(`Error: ${response.status}`);
	}

	const data = await response.json();
	return data;
};
