function onOff() {
  document.querySelector("#modal")
  .classList
  .toggle('hide')

  document
    .querySelector("body")
    .classList
    .toggle('hideScroll')

  document
  .querySelector("#modal")
  .classList
  .toggle('addScroll')

  document
  .querySelector(".delidea")
  .classList
  .toggle('hide')
}


function checkFields(event) {
  const valuesToCheck = [
    "title",
    "image",
    "description",
    "link"
  ]

  const isEmpty = valuesToCheck.find(function(value) {
    const checkIfIsString = typeof event.target[value].value === "string"
    const checkIfIsEmpty = !event.target[value].value.trim()

    if(checkIfIsString && checkIfIsEmpty) {
      return true
    }
  })

  if (isEmpty) {
    event.preventDefault()
    alert("Porfavor preencha todos os campos")
  }

}



//   const btn = document.querySelector(".delidea")

//   btn
//     .onclick = function () {
//     alert('Cliquei')
// }
