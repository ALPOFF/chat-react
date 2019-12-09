import React from "react";
import {Field, reduxForm} from "redux-form";

const InputForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field className={"input"} name={"inputData"} component={"input"}/>
    </form>
};

const InputReduxForm = reduxForm({
    form: 'input'
})(InputForm);

export default InputReduxForm;
