import * as axios from "axios";

export const getUsersData = () => {
    return axios.get(`http://localhost:3000/dialogs/`);
};

export const getDialog = (dialogId) => {
    return axios.get(`http://localhost:3000/dialogs/` + dialogId);
};
