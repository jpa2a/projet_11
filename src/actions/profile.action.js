import axios from "axios";

export const POST_PROFILE = "POST_PROFILE";

export const postProfile = () => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile").then((res) => {
            console.log(res);
            console.log(res.data);

        })
    }

}