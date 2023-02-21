import FoodItem from "./foodItem.js";
import { API_URL } from "../services/apiService.js";

const init = () => {
    doApi();
    declareEvent();
}

const declareEvent = () => {
    let btn_new = document.querySelector("#btn_new");
    btn_new.addEventListener("click", () => {
        window.location.href = "addFood.html";
    })
}

const doApi = async () => {
    let url = API_URL + "/foods";
    let resp = await axios.get(url);
    console.log(resp.data);
    createFood(resp.data);
}

const createFood = (_ar) => {
    document.querySelector("#id_tbody").innerHTML = "";
    _ar.forEach((item, i) => {
        let food = new FoodItem("#id_tbody", item, i, deleteFood);
        food.render();
    });
}

const deleteFood = async (_idDel) => {
    try {
        let url = API_URL + "/foods/" + _idDel;
        let resp = await axios({
            url: url,
            method: "DELETE"
        })
        if (resp.data.deletedCount) {
            // alert("Food del")
            doApi();
        }
    }
    catch (err) {
        alert("There problem")
        console.log(err);
    }
}
init();