import React from "react";
import {Field, reset, reduxForm} from "redux-form";

const afterSubmit = (result, dispatch) =>
    dispatch(reset('input'));

const InputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field className={"input"} name={"inputData"} component={"input"} placeholder={"Write a message ..."}/>
    </form>
};

const InputReduxForm = reduxForm({
    form: 'input',
    onSubmitSuccess: afterSubmit,
})(InputForm);

export default InputReduxForm;
