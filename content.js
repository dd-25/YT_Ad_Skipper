// console.log("Extension activated");

// function clickButton() {
//     const observer = new MutationObserver((mutationsList, observer) => {
//         const button = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
//         if (button) {
//             button.click();
//             console.log('Skip button clicked!');
//             // observer.disconnect(); // Stop observing once the skip button is clicked
//         }

//         // Hide ad overlay
//         const adPlayerOverlay = document.getElementsByClassName('ytp-ad-player-overlay');
//         if (adPlayerOverlay[0] && adPlayerOverlay.length > 0) {
//             adPlayerOverlay[0].style.visibility = 'hidden';
//         }
//     });

//     observer.observe(document.body, { subtree: true, childList: true });
// }

// // Call the clickButton function when the DOM content is loaded
// clickButton(); // Immediately call the function without waiting for DOMContentLoaded



// Send a message to the background script to show the page action
// console.log("Extension Activated")

// // Function to handle mutations
// function handleMutations(mutationsList) {
//     mutationsList.forEach(mutation => {
//         // Check if ad overlay or skip button is added to the DOM
//         if (mutation.addedNodes) {
//             mutation.addedNodes.forEach(node => {
//                 if (node.classList.contains('ytp-ad-player-overlay') ||
//                     node.classList.contains('ytp-ad-image-overlay') ||
//                     node.classList.contains('ytp-ad-skip-button')) {
//                     handleAdElements();
//                 }
//             });
//         }
//     });
// }

// // Function to handle ad elements
// function handleAdElements() {
//     const adPlayerOverlay = document.querySelector('.ytp-ad-player-overlay');
//     const adImageOverlay = document.querySelector('.ytp-ad-image-overlay');
//     const skipButton = document.querySelector('.ytp-ad-skip-button');

//     // Hide ad overlays
//     if (adPlayerOverlay) {
//         adPlayerOverlay.style.visibility = 'hidden';
//         console.log("Ad Player Hidden")
//     }
//     if (adImageOverlay) {
//         adImageOverlay.style.visibility = 'hidden';
//         console.log("Ad Image Hidden")
//     }

//     // Click skip button if available
//     if (skipButton) {
//         skipButton.click();
//         console.log("Skip Button Clicked")
//     }
// }

// // Create a MutationObserver to watch for mutations in the body subtree
// const observer = new MutationObserver(handleMutations);
// observer.observe(document.body, { subtree: true, childList: true });

// Function to handle mutations
console.log("Extension Activated")

function handleMutations(mutationsList) {
    mutationsList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.classList.contains('video-ads') || 
                node.classList.contains('ytp-ad-player-overlay') || 
                node.classList.contains('ytp-ad-image-overlay')) {
                node.style.visibility = 'hidden'; // Hide ad overlay
                console.log("Overlay Hidden")
            }
            if (node.classList.contains('ytp-ad-skip-button')) {
                node.click(); // Click skip button
                console.log("Button Clicked")
            }
        });
    });
}

// Create a MutationObserver to watch for mutations in the body subtree
const observer = new MutationObserver(handleMutations);
observer.observe(document.body, { subtree: true, childList: true });