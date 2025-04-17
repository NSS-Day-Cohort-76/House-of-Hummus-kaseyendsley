import { setSideChoice } from "./TransientState.js"

export const getSides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let html = "<h2>Choose a Side Dish</h2>"
    html += "<ul>"

    html += sides.map(side => `
        <li>
            <input type="radio" name="side" value="${side.id}" />
            ${side.title}
        </li>
    `).join("")

    html += "</ul>"

    return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "side") {
        setSideChoice(parseInt(event.target.value))
    }
})
