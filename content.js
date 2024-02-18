// contentScript.js

console.log("Extension activated");

function clickButton() {
    const observer = new MutationObserver((mutationsList, observer) => {
        const button = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
        if (button) {
            button.click();
            console.log('Skip button clicked!');
            // observer.disconnect(); // Stop observing once the skip button is clicked
        }
    });

    observer.observe(document.body, { subtree: true, childList: true });
}
// Call the clickButton function when the DOM content is loaded
clickButton(); // Immediately call the function without waiting for DOMContentLoaded