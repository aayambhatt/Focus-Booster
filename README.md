<p align="center">
  <img src="https://i.imgur.com/CYomUY9.jpeg" alt="Focus Booster Preview" width="500">
</p>



# Focus Booster

**Focus Booster** is a Chrome extension designed to help users stay productive by blocking distracting websites (such as Facebook and YouTube) and displaying motivational quotes instead. The extension provides a simple toggle button to enable or disable the blocker, making it easy for users to control when they want to focus.

## Features

- **Distraction Blocking:**  
  Replaces the content of distracting websites with a motivational screen.
- **Toggle Functionality:**  
  A single button in the popup lets users enable or disable the blocker.
- **Motivational Quotes:**  
  Randomly displays motivational quotes to encourage focus.
- **Persistent Settings:**  
  Uses Chrome's storage API to save user preferences between sessions.

## How It Works

1. **Content Script:**  
   Injected into specified websites (e.g., Facebook, YouTube, Instagram), it checks the stored setting and either blocks the page by displaying a motivational message or allows the site to load normally.
2. **Popup UI:**  
   Provides a toggle button that updates based on the current state. Clicking the button toggles the blocker on or off.
3. **Storage:**  
   The blocker’s state is saved using Chrome's `chrome.storage` API, ensuring that user preferences persist across sessions.

## Installation
- **For Local Testing:**  
  1. Clone or download the repository.
  2. Open Chrome and navigate to `chrome://extensions/`.
  3. Enable **Developer Mode**.
  4. Click **Load unpacked** and select the project folder.

## Usage

- **When Enabled:**  
  Visiting a blocked website (e.g., YouTube) displays a motivational screen.
- **When Disabled:**  
  The website loads normally.
- **Toggling the Blocker:**  
  Click the extension icon to open the popup and use the toggle button to switch the blocker on or off.

## Author

Aayam Bhatt

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
