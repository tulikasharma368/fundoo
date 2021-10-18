import Axiosservice from './Axiosservice';

const obj = new Axiosservice();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
var url = baseUrl.split('/');
const token = url[ url.length - 1 ];
const header = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

class Userservice{
    Signup(data){
        let response = obj.postMeth(`${baseUrl}user/userSignUp`,data);
        return response;
    }

    Signin(data){
        let response = obj.postMeth(`${baseUrl}user/login`,data);
        return response;
    }

    Forgot(data) {
        let response = obj.postMeth(`${baseUrl}user/reset`, data);
        return response;
    }

    Resetpass(data){
        let response = obj.postMeth(`${baseUrl}user/reset-password`,data,header);
        return response;
    }
}

export default Userservice;
