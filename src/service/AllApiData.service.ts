import http from "./http-common";
export class AppService {


static login(username:string, password:string) {
	// const response = await axios.get(`${BASE_URL}/bazaar/`);
	// return http.post("/login/", {
	// 	username,
	// 	password,
	//   });

	return http.post("/login/", {
		username,
		password,
	  })
	  .then((response) => {
		if (response.data.access) {
		  localStorage.setItem("user", JSON.stringify(response.data));
		}
  
		return response.data;
	});

};

static getCurrentUser = () => {
	const userStr = localStorage.getItem("user");
	if (userStr) return JSON.parse(userStr);
  
	return null;
  };





  static authHeader() {
	const userStr = localStorage.getItem("user");
	let user = null;
	if (userStr)
	  user = JSON.parse(userStr);
  
	if (user && user.access) {
	  return { Authorization: 'Bearer ' + user.access }; // for Spring Boot back-end
	  // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
	} else {
	  return { Authorization: '' }; // for Spring Boot back-end
	  // return { 'x-access-token': null }; // for Node Express back-end
	}
  }




static getAllBazarList() {
	return http.get("bazaar/data/", { headers: AppService.authHeader() });
};

static getAllAgentList() {
	return http.get("agent/", { headers: AppService.authHeader() });
};
static getAllwholesellerList() {
	return http.get("wholeseller/", { headers: AppService.authHeader() });
};

static getAllSummerys(){
	return http.get("dashboard/summary/", { headers: AppService.authHeader() });
}


}
