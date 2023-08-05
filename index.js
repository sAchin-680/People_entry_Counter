let ab = document.getElementById("ab")
let count = 0
function increment() {
    count += 1
   ab.innerText = count
}

function save() {
    console.log(count)
}
