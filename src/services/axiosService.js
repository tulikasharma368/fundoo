import axios from "axios";

const signup = async function(obj) {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", obj);
    return response;
}

export default signup