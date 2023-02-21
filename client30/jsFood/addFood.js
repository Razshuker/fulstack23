import { API_URL } from "../services/apiService.js";

const init = () => {
    declareFromEvent();
}

const declareFromEvent = () => {
    let id_form = document.querySelector("#id_form");
    let btn_cancel = document.querySelector("#btn_cancel");

    btn_cancel.addEventListener("click", () => {
        window.location.href = "foodList.html";
    })
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("form work");
        let bodyData = {
            name: document.querySelector("#id_name").value,
            price: document.querySelector("#id_price").value,
            cals: document.querySelector("#id_cals").value
        }

        if (bodyData.name.length < 2) {
            return alert("name too short")
        }
        if (bodyData.price < 1) {
            return alert("price too low")
        }
        if (bodyData.calories < 1) {
            return alert("cals too low")
        }

        console.log(bodyData);
        doApiPost(bodyData);
    })
}

const doApiPost = async (_bodyData) => {
    let url = API_URL + "/foods";
    try {

        let resp = await axios({
            method: "POST",
            url: url,
            data: _bodyData
        })
        console.log(resp.data);
        if (resp.data._id) {
            alert("food added");
            window.location.href = "foodList.html";

        }
    }
    catch (err) {
        console.log(err);
        alert("There problem,come back later")
    }
}



init();