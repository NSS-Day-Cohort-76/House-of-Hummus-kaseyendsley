import { setEntreeChoice } from "./TransientState.js"

export const getEntrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let html = "<h2>Choose an Entree</h2><ul>"

    html += entrees.map(entree => `
        <li>
            <input type="radio" name="entree" value="${entree.id}" />
            ${entree.name}
        </li>
    `).join("")

    html += "</ul>"
    return html
}

export const getEntreeById = async (id) => {
    const response = await fetch(`http://localhost:8088/entrees/${id}`)
    return await response.json()
}

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
})
