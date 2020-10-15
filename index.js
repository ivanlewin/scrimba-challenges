const email = document.getElementById("email-input");
const form = document.getElementById("newsletterForm");

const showFeedback = function(feedback) {
    // Displays a modal with a success/error message
    console.log(feedback);
}

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

console.log("asd")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("email: ", email.value)
form.addEventListener("submit", e => {
    e.preventDefault();
    
    // Checks the email on the form against the RegExp found on the MDN website
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Basic_validation
    const check = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value);
    
    showFeedback(check);
})

