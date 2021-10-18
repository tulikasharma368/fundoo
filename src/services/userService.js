import Axiosservice from './Axiosservice';

const obj = new Axiosservice();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

class Userservice{
    Signup(data){
        let response = obj.postMeth(`${baseUrl}user/userSignUp`,data);
        return response;
    }

    Signin(data){
        let response = obj.postMeth(`${baseUrl}user/login`,data);
        return response;
    }
}

export default Userservice;
