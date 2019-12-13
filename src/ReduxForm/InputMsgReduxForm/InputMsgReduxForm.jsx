import React from "react";
import {Field, reset, reduxForm} from "redux-form";

const afterSubmit = (result, dispatch) =>
    dispatch(reset('inputMsg'));

const InputForm = (props) => {
    return <form style={{width: '100%'}} onSubmit={props.handleSubmit}>
            <Field className={"inputMsg"} name={"inputData"} component={"input"} placeholder={"Write a message ..."}/>
    </form>
};

const InputMsgReduxForm = reduxForm({
    form: 'inputMsg',
    onSubmitSuccess: afterSubmit,
})(InputForm);

export default InputMsgReduxForm;
