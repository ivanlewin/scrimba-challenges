const email = document.getElementById("email-input");
const form = document.getElementById("newsletterForm");
const modeToggler = document.getElementById("toggler");

const showFeedback = function(feedback) {
    // Displays a modal with a success/error message
    console.log(feedback);
}

const toggleMode = function(event) {
    if(event.target.checked) {
        document.body.classList.add("dark-mode");
        document.getElementById("button-background").classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("button-background").classList.remove("dark-mode");
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    
    // Checks the email on the form against the RegExp found on the MDN website
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Basic_validation
    const check = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value);
    
    showFeedback(check);
})

modeToggler.addEventListener("change", event => toggleMode(event));