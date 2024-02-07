 import axios from "axios";


export const POST_PROFILE = "POST_PROFILE";

export const postLogin =  (data) => {
    
      return (dispatch) => {
            return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
                console.log(res.data)
           dispatch({ type: POST_PROFILE, payload: res.data }); 
           })  
        console.log(data)
    }  
   


}