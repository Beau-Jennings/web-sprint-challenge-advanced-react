import { useState } from "react";
// write your custom hook here to control your checkout form

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, setValues, handleChanges]
};

    export default useForm