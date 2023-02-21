import { API_URL } from "../services/apiService.js";

const init = () => {
    declareEvents();
}

const declareEvents = () => {
    let id_form = document.querySelector("#id_form");
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let userData = {
            name: document.querySelector("#id_name").value,
            email: document.querySelector("#id_email").value,
            password: document.querySelector("#id_password").value
        }
        console.log(userData);

        if (userData.name.length < 2) {
            return alert("name too short")
        }
        if (userData.email.length < 3) {
            return alert("email too short")
        }
        if (userData.password.length < 2) {
            return alert("password too short")
        }
        doApiPost(userData);
    })
}

const doApiPost = async (_userData) => {
    let url = API_URL + "/users";
    try {
        let resp = await axios({
            method: "POST",
            url: url,
            data: _userData
        })

        console.log(resp.data);
        if (resp.data._id) {
            alert("user added");
        }
    }
    catch (err) {
        console.log(err);
        alert("problem");
    }
}

init();