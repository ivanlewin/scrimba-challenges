const email = document.getElementById("email-input");
const form = document.getElementById("newsletterForm");


*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

console.log("asd")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("email: ", email.value)
})

