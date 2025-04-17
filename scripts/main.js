import { FoodTruck } from "./FoodTruck.js"
import { purchaseOrder } from "./Sales.js"

const container = document.querySelector("#container")

const render = async () => {
    const html = await FoodTruck()
    container.innerHTML = html
}

render()

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        purchaseOrder()
    }
})

document.addEventListener("stateChanged", async () => {
    await render()
})
