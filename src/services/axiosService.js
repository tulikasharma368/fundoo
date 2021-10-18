import axios from "axios";

// const signup = async function(obj) {
//     console.log(obj);
//     let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", obj);
//     return response;
// }

class Axiosservice{
    postMeth(url,data,header=false){
        return axios.post(url,data);
    }
}

export default Axiosservice;