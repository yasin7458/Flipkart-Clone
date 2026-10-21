function validation(email, password) {
    let errors = {};

    if (email === "") {
        errors.email = "Email Is Required";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        errors.email = "Enter A Valid Email"
    }

    if (password === "") {
        errors.password = "PassWord Is Not Required";
    }

    return errors;
}

export default validation;