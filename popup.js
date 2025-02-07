// Get the button element from popup.html
const toggleBtn = document.getElementById("toggleBtn");

// Function to change button text based on blocker state
function updateButtonText(isEnabled) {
    if (isEnabled) {
        toggleBtn.textContent = "Disable Blocker";
    } else {
        toggleBtn.textContent = "Enable Blocker";
    }
}

// When popup opens, check current blocker state
chrome.storage.local.get(['blockerEnabled'], function(result) {
    let currentValue = result.blockerEnabled;
    
    // For first-time users, set default to true
    if (currentValue === undefined) {
        currentValue = true;
        // Save this default setting
        chrome.storage.local.set({ blockerEnabled: true });
    }
    // Update button text to match current state
    updateButtonText(currentValue);
});

// Listen for button clicks
toggleBtn.addEventListener("click", function() {
    // Get current state when button is clicked
    chrome.storage.local.get(['blockerEnabled'], function(result) {
        let currentValue = result.blockerEnabled;
        // Flip the value 
        const newValue = !currentValue;
        // Save the new value
        chrome.storage.local.set({ blockerEnabled: newValue }, function() {
            // Update button text after saving
            updateButtonText(newValue);
        });
    });
});