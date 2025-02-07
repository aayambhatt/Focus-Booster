
// Define an array of motivational quotes.
const quotes = [
    "There are no two words in the English language more harmful than 'good job",
    "Stay Focused, Stay Positive!",
    "Keep pushing forward!",
    "Discipline is the bridge between goals and accomplishment.",
    "Your future is created by what you do today.",
    "Dream big, work hard, stay focused."
  ];
  
  // Function to choose a random quote.
  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }
  
  // Function to clear the page and display the motivational message.
  function blockPage() {
    // Remove all existing content.
    document.documentElement.innerHTML = "";
  
    // Create a container to hold the motivational content.
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100vh";
    container.style.backgroundColor = "#f0f0f0";
    container.style.textAlign = "center";
    container.style.padding = "20px";
  
    // Create an element for the motivational quote.
    const quoteEl = document.createElement("h1");
    quoteEl.innerText = getRandomQuote();
    quoteEl.style.color = "#333";
    quoteEl.style.fontFamily = "Arial, sans-serif";
  
    // Create an element for a follow-up message.
    const subheadingEl = document.createElement("p");
    subheadingEl.innerText = "Time to focus on your goals!";
    subheadingEl.style.fontFamily = "Arial, sans-serif";
    subheadingEl.style.fontSize = "18px";
    subheadingEl.style.color = "#666";
  
    // Append the quote and subheading to the container.
    container.appendChild(quoteEl);
    container.appendChild(subheadingEl);
  
    // Append the container to the body.
    document.body.appendChild(container);
  }
  
  // Check the stored setting and block the page if needed.
  function checkAndBlock() {
    chrome.storage.local.get(['blockerEnabled'], function(result) {
      // If no value is found or it's set to true, block the page.
      if (result.blockerEnabled === undefined || result.blockerEnabled === true) {
        blockPage();
      }
      // If blockerEnabled is false, do nothing, letting the site load normally.
    });
  }
  
  // Execute the function when the script loads.
  checkAndBlock();
  