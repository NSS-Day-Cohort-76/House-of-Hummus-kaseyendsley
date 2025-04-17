
const transientState = {
    entreeId: null,
    vegetableId: null,
    sideId: null,
}


export const setEntreeChoice = (id) => {
    transientState.entreeId = id
}

export const setVegetableChoice = (id) => {
    transientState.vegetableId = id
}

export const setSideChoice = (id) => {
    transientState.sideId = id
}

export const getTransientState = () => {
    return { ...transientState }
}

export const resetTransientState = () => {
    transientState.entreeId = null
    transientState.vegetableId = null
    transientState.sideId = null
}