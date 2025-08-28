# Workshop: Debugging with Chrome's AI Assistant

Welcome to the official repository for the "Debugging with Chrome's AI Assistant" workshop. This repository contains a
set of hands-on examples designed to demonstrate how to use the experimental AI features built into Google Chrome
DevTools to analyze and debug web applications more efficiently.

---

## Prerequisites

Before you begin, please ensure you have the following installed and set up:

* **Google Chrome**: The latest version of the Google Chrome browser.
* **Node.js**: Required for the Network Request Analysis demo. You can download it
  from [nodejs.org](https://nodejs.org/).
* **A Google Account**: You will need to be logged into a Google account to enable the experimental AI features.

---

## Getting Started: Enabling the AI Assistant

The AI Assistant in Chrome DevTools is an experimental feature and must be enabled manually.

1. **Open DevTools**: Open any web page and press `Cmd+Opt+I` (Mac) or `Ctrl+Shift+I` (Windows/Linux).
2. **Go to Settings**: Click the cog icon (⚙️) in the top-right corner of the DevTools panel.
3. **Navigate to Experiments**: Select the "Experiments" tab from the left-hand menu.
4. **Enable AI Features**: In the filter box, type "AI" and check the box next to **"Console insights"** or any similar
   generative AI feature.
5. **Reload DevTools**: A button will appear prompting you to "Reload DevTools". Click it.
6. **Log In**: You may be prompted to log in with your Google account to grant permission for the feature to work.

You should now see new AI-related icons (like a sparkle ✨) in the Console, Sources, and Network panels.

---

## Running the Demos

This repository is structured into three distinct demo projects. Start by cloning or downloading this repository to your
local machine.

### Demo 1: HTML, CSS & JS Debugging

This demo showcases how to fix common frontend bugs in a user profile card application.

* **How to run**:
    1. Navigate to the `exmaple-1-html-css-js` directory.
    2. Open the `index.html` file directly in Google Chrome.
* **Workshop Goals**:
    * Use the AI Assistant in the **Console** to explain and fix JavaScript errors (`TypeError`, missing `await`).
    * Use the AI Assistant in the **Elements** panel to understand and fix a complex CSS `visibility` issue.

### Demo 2: Network Request Analysis

This demo uses a simple Node.js server to simulate various API responses, allowing you to analyze them in the Network
panel.

* **How to run**:
    1. Navigate to the `exmaple-2-network` directory in your terminal.
    2. Install dependencies (if any, though this example has none): `npm install`
    3. Start the server: `node server.js`
    4. The terminal will show `Server running at http://localhost:3000/`.
    5. Open the `index.html` file from this directory in Google Chrome.
* **Workshop Goals**:
    * Analyze a successful `200 OK` request and ask the AI to summarize its JSON payload.
    * Investigate a `401 Unauthorized` error and ask the AI for common causes.
    * Understand HTTP caching by observing a `304 Not Modified` response.

### Demo 3: Performance Analysis

This demo contains two components with intentional performance bottlenecks: a slow animation and an inefficiently
rendered table.

* **How to run**:
    1. Navigate to the `03-performance-analysis` directory.
    2. Open the `index.html` file directly in Google Chrome.
* **Workshop Goals**:
    * Record the animation in the **Performance** panel and ask the AI to explain the "Forced Reflow / Layout Thrashing"
      warnings.
    * Record a table cell edit, identify the resulting "Long Task", and ask the AI for an explanation and optimization
      strategies.

---

## Additional Resources

To learn more about the AI Assistant and other modern DevTools features, check out these official resources:

* **Official Chrome Demos for AI Assistance**: [AI assistance](https://developer.chrome.com/docs/devtools/ai-assistance)
* **Gemini in Chrome**: [Learn more about Gemini in Google Chrome](https://gemini.google/overview/gemini-in-chrome/)
