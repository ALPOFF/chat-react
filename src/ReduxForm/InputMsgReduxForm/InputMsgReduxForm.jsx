import React from "react";
import {Field, reset, reduxForm} from "redux-form";
import planeIcon from "../../assets/images/plane_icon.png";

const afterSubmit = (result, dispatch) =>
    dispatch(reset('inputMsg'));

const InputForm = (props) => {
    return <form style={{width: '100%', display: 'flex'}} onSubmit={props.handleSubmit}>
            <Field className={"inputMsg"} name={"inputData"} component={"input"} placeholder={"Write a message ..."}/>
        <button className="inputBtn">
            <img src={planeIcon} alt=""/>
        </button>
    </form>
};

const InputMsgReduxForm = reduxForm({
    form: 'inputMsg',
    onSubmitSuccess: afterSubmit,
})(InputForm);

export default InputMsgReduxForm;
