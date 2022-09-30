let textInput = document.querySelector("#input-text")
let resultsSpan = document.querySelector("#results")

textInput.addEventListener('keyup', countCharacters)

function countCharacters() {
    let characterCount = textInput.value.length
    resultsSpan.innerText = `${characterCount}`
}