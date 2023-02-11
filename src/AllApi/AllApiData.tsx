import axios from 'axios';
const BASE_URL='http://13.232.244.133';


export const getAllBazarList = async () => {
	const response = await axios.get(`${BASE_URL}/bazaar`);
	const responseJson = await response.data;
	 console.log(responseJson);
	return responseJson;
};
