import { Sales } from "./Sales.js"
import { getEntrees } from "./Entrees.js"
import { getVegetables } from "./Vegetables.js"
import { getSides } from "./SideDishes.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await getEntrees()
    const vegetablesHTML = await getVegetables()
    const sidesHTML = await getSides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="options-container">
            <section class="options">
                ${entreesHTML}
            </section>
            <section class="options">
                ${vegetablesHTML}
            </section>
            <section class="options">
                ${sidesHTML}
            </section>
        </article>

        <div class="button-container">
            <button id="purchase">Purchase Combo</button>
        </div>

        <article class="customerOrders">
           <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `
}