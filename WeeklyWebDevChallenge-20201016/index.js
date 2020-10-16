const email = document.getElementById("email-input");
const name = document.getElementById("name-input");
const form = document.getElementById("newsletterForm");
const modeToggler = document.getElementById("toggler");
const emailAddress = document.getElementById("emailAddress");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const nameSpan = document.getElementById("name");

const showFeedback = function(feedback) {
const showFeedback = function(success) {
    // Displays a modal with a success/error message
    if(success) {
        confetti.start();
        document.getElementById("feedback").textContent = "Hooray! 🎉";
        console.log(name.value)
        if(name.value != "") {
            document.getElementById("feedback-msg").innerHTML = `<span id="name">Welcome aboard, ${name.value}</span>! We added <span id="emailAddress">${email.value}</span> to the mailing list! 📬`;
        } else {
            document.getElementById("feedback-msg").innerHTML = `We added <span id="emailAddress">${email.value}</span> to the mailing list! 📬`;
            }
        }
    else {
        if(name.value != "") {
            document.getElementById("feedback-msg").innerHTML = `<span id="name">Sorry, ${name.value}</span>, we couldn't add <span id="emailAddress">your email</span> to the mailing list because it's not a valid address. Please try again.`
        }
        emailAddress.textContent = email.value;
    }
        
    overlay.style.display = "block";
    
    document.getElementById("close-modal").addEventListener("click", function() {
        overlay.style.display = "none";
        confetti.stop();
    })
    
    overlay.addEventListener("click", function(e) {
        e.stopPropagation();
        if(e.target == overlay) {
            overlay.style.display = "none";
            confetti.stop();
        }
    })
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