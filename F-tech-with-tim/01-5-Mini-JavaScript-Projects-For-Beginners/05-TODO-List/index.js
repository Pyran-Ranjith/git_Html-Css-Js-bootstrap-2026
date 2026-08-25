let items = ["item-1", "item-2", "item-3", ]
const itemsDev = document.getElementById("items")

function loadItems() {
    itemsDev.innerHTML = null
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div") 
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)
        itemsDev.appendChild(container)
   
    }
}

function renderItems() {
    
}
function saveItems() {
    
}
function addItems() {
    
}
function removeItems() {
    items.splice(idx,1)
    renderItems()
}