function submitName() {
    // Get user input
    var userName = document.getElementById('userName').value;

    // Display the input
    var outputElement = document.getElementById('output');

    // Check if the input is the specific name to make the content accessible
    if (userName.toLowerCase() === 'chloe rogers') {
        hideInputPrompt();
        hidefuck();
        showAccessibleContent();
    }
    else {
        showfuck();
    }
}

function showAccessibleContent() {
    // Display the accessible content
    var accessibleContent = document.getElementById('accessibleContent');
    accessibleContent.style.display = 'block';
}

function showfuck() {
    var fuck = document.getElementById('fuck');
    fuck.style.display = 'block';
}

function hidefuck() {
    var fuck = document.getElementById('fuck');
    fuck.style.display = 'none';
}

function handleKeyUp(event) {
    if (event.key === 'Enter') {
        submitName();
    }
}

function hideWill() {
    var will = document.getElementById('will');
    will.style.display = 'none'
}

function hideInputPrompt() {
    var prompt = document.getElementById('prompt');
    prompt.style.display = 'none';
}

const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "PLEASE!",
    "Ok, why don't we just start over..."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/sad.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        window.location.reload();
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById("banner");
    banner.src = "public/images/yay.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}