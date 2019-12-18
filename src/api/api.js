import * as axios from "axios";

export const pst = (a) => {
    return axios.get(`http://localhost:3000/users/`);
};
