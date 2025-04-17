import { setVegetableChoice } from "./TransientState.js"

export const getVegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let html = "<h2>Choose a Vegetable</h2><ul>"

    html += vegetables.map(vegetable => `
        <li>
            <input type="radio" name="vegetable" value="${vegetable.id}" />
            ${vegetable.type}
        </li>
    `).join("")

    html += "</ul>"

    return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
})
