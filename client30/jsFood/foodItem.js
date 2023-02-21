export default class FoodItem {
    constructor(_parent, _item, _index, _deleteFood) {
        this.parent = _parent,
            this.name = _item.name,
            this.price = _item.price,
            this.cals = _item.cals,
            this.index = _index,
            this.id = _item._id,
            this.deleteFood = _deleteFood;
    }

    render() {
        let tr = document.createElement("tr");
        tr.className = "";
        document.querySelector(this.parent).append(tr);
        tr.innerHTML = `
        <td>${this.index + 1}</td>
        <td>${this.name}</td>
        <td>${this.price}</td>
        <td>${this.cals}</td>
        <td><button class="btn btn-danger x-btn">&times</button></td>
        `
        let xBtn = tr.querySelector(".x-btn");
        xBtn.addEventListener("click", () => {
            //יקפיץ פןפ אפ אישור לביצוע הפעולה 
            // &&-> צריך שהראשון יהיה אמת בשביל שהשני יתקיים
            window.confirm("delete food?") && this.deleteFood(this.id);
        })
    }
}