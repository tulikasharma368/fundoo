import Axiosservice from './Axiosservice';

const obj = new Axiosservice();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const token = localStorage.getItem("token");

const headerConfig = {
    headers : {
        Authorization : token,
    },
};

// var url = baseUrl.split('/');
// const passtoken =  url[url.length-1];
// const headerConfigPass = {
//     headers:{
//         Authorization : `Bearer ${passtoken}`,
//     }
// }

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
        let response = obj.postMeth(`${baseUrl}user/reset-password`,data,headerConfig);
        return response;
    }

    Addnote(data){
        let response = obj.postMeth(`${baseUrl}notes/addNotes`,data,headerConfig);
        return response;
    }

    Displaynotes(){
        let response = obj.getMeth(`${baseUrl}notes/getNotesList`,headerConfig);
        return response;
    }

    Changecolor(data){
        let response = obj.postMeth(`${baseUrl}notes/changesColorNotes`,data, headerConfig);
        return response;
    }
    
    Archive(data){
        let response = obj.postMeth(`${baseUrl}notes/archiveNotes`,data,headerConfig);
        return response;
    }

    Delete(data){
        let response = obj.postMeth(`${baseUrl}notes/trashNotes`,data,headerConfig);
        return response;
    }

    ArchiveNotesList(){
        let response = obj.getMeth(`${baseUrl}notes/getArchiveNotesList`,headerConfig);
        return response;
    }
    
}



export default Userservice;
