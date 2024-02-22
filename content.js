console.log("Extension activated");

function SkipAd() {
    const observer = new MutationObserver((mutationsList, observer) => {
        const button = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
        if (button) {
            button.click();
            console.log('Skip button clicked!');
            // observer.disconnect(); // Stop observing once the skip button is clicked
        }

        // Hide ad overlay
        const adPlayerOverlay = document.getElementsByClassName('ytp-ad-player-overlay');
        if (adPlayerOverlay && adPlayerOverlay.length > 0) {
            adPlayerOverlay.forEach(element => {
                element.style.visibility = 'hidden';
            });
            console.log("Overlay Hidden!");
        }
    });

    observer.observe(document.body, { subtree: true, childList: true });
}

// Call the SkipAd function when the DOM content is loaded
SkipAd(); // Immediately call the function without waiting for DOMContentLoaded