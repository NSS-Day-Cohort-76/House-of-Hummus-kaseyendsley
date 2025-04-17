import { getTransientState, resetTransientState } from "./TransientState.js"

export const Sales = async () => {
    const purchases = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
        .then(res => res.json())

    const salesDivs = purchases.map((purchase, index) => {
        return `<p>Receipt ${index + 1} = $${purchase.totalPrice.toFixed(2)}</p>`
    })

    return salesDivs.join("")
}

export const purchaseOrder = async () => {
    const { entreeId, vegetableId, sideId } = getTransientState()

    if (!entreeId || !vegetableId || !sideId) {
        window.alert("Please choose one from each category.")
        return
    }

    const entree = await fetch(`http://localhost:8088/entrees/${entreeId}`).then(res => res.json())
    const vegetable = await fetch(`http://localhost:8088/vegetables/${vegetableId}`).then(res => res.json())
    const side = await fetch(`http://localhost:8088/sides/${sideId}`).then(res => res.json())

    const totalPrice = parseFloat((entree.price + vegetable.price + side.price).toFixed(2))

    const newPurchase = {
        entreeId,
        vegetableId,
        sideId,
        totalPrice
    }

    await fetch("http://localhost:8088/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPurchase)
    })

    resetTransientState()
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
