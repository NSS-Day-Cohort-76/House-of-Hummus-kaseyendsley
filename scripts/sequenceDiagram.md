


title House of Hummus 

participant "main.js" as Main
participant "Entrees.js" as Entrees
participant "Vegetables.js" as Vegetables
participant "SideDishes.js" as Sides
participant "TransientState.js" as TransientState
participant "Purchase.js" as Purchase
participant "Sales.js" as Sales


Main -> Entrees : getEntrees()
Entrees -> TransientState : setEntreeChoice(id) (via event)

Main -> Vegetables : getVegetables()
Vegetables -> TransientState : setVegetableChoice(id) (via event)

Main -> Sides : getSides()
Sides -> TransientState : setSideChoice(id) (via event)

Main -> Sales : Sales() (displays current purchases)


Main -> Purchase : purchaseOrder()
Purchase -> TransientState : getTransientState()
TransientState -> Entrees : getEntrees()
TransientState -> Vegetables : getVegetables()
TransientState -> Sides : getSides()

Purchase -> Purchase : Calculate totalPrice
Purchase -> Purchase : Create purchase object

Purchase -> TransientState : resetTransientState()
Purchase -> Main : dispatchEvent("stateChanged")

Main -> Sales : Sales() (re-renders list)

