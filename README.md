# Google Chrome AI Code Analysis

## Resources


        // WORKSHOP DEMO: CONSOLE ERROR & EXPLANATION
        // `main.js` line 10 and 11 returns a Promise, but we forgot to `await` it.
        // This means the `users` variable will be a pending Promise, not the array of user data.
        // The `renderUsers` function will then fail, throwing an error in the console.
        // Use the AI assistant in the Console to "Explain this error".


        // WORKSHOP DEMO: CONSOLE TYPEERROR
        // BUG 2: Let's assume we expect a deeply nested property that doesn't exist.
        // This will cause a `TypeError: Cannot read properties of undefined` when the code runs.
        // This is another great opportunity to use the AI to explain the error from the console
