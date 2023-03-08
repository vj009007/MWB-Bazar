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




static getAllBazarList(datas:any) {
	return http.get("bazaar/data/?page="+datas, { headers: AppService.authHeader() });
};

static getAllBazarListLiveSerach(datas:any) {
	return http.get("bazaar/data/?search="+datas, { headers: AppService.authHeader() });
};

static getAllBazarListSearch(datas:any) {
	return http.get("bazaar/data/?search="+datas, { headers: AppService.authHeader() });
};
static getAllBazarListwholeseller(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/wholesellers-list/", { headers: AppService.authHeader() });
};

static getAllBazarListwholesellerSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/wholesellers-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};
static getAllBazarAgentList(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/agents-list/", { headers: AppService.authHeader() });
};

static getAllBazarAgentListSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/agents-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};

static getAllBazarProductListSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/products-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};
static getAllBazarProductList(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/products-list/", { headers: AppService.authHeader() });
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

static getAllDashBazaarLists(){
	return http.get("dashboard/report/", { headers: AppService.authHeader() });
}
static getAllPlans(){
	return http.get("dashboard/plan/", { headers: AppService.authHeader() });
	
}
static getAllPlansData(){
	return http.get("dashboard/plan-list/", { headers: AppService.authHeader() });
	
}

}