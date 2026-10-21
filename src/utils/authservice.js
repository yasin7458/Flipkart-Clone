import axios from "axios";

function checkLogin(email, password) {
    let API = "http://localhost:3000/users";

    return axios.get(API).then((res) => {
        let loginUser = null;

        res.data.map((user) => {
            if (user.email === email && user.password === password) {
                loginUser = user;
            }
        });

        return loginUser;
    });
}

export { checkLogin };
