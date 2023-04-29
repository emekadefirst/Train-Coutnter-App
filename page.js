// document.getElementById("count-el").innerText = 5

// initialize the count as o
// lsitent for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the html to reflect the new count
// console.log("The button was clicked")


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countstr = count  +  " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}
