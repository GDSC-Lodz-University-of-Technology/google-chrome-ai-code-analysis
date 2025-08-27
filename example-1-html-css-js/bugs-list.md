# HTML, CSS, JS

## Bugs List

### BUG 1
> CSS DISPLAY BUG

#### Description

The parent container `#modal-overlay` has a `display: flex;` property.
That overrides the display property of bellow `.hidden` class.
That's why the modal is always visible, and the user cannot interact with the page

#### Solution

Change display property of `.hidden` class to `visibility: hidden`

### BUG 2
> NOT AWAITED PROMISE

#### Description

`main.js` line 10 and 11 returns a Promise, but we forgot to `await` it.
This means the `users` variable will be a pending Promise, not the array of user data.
The `renderUsers` function will then fail, throwing an error in the console.
Use the AI assistant in the Console to "Explain this error."

#### Solution

Add `await` to the `main.js` line 10 and 11

### BUG 3
> TYPE ERROR: ACCESSING CHILDREN OF UNDEFINED

#### Description

Let's assume we expect a deeply nested property that doesn't exist.
This will cause a `TypeError: Cannot read properties of undefined` when the code runs.
This is another great opportunity to use the AI to explain the error from the console

#### Solution

Response has a different shape than it was assumed by the developer. We should access property directly not thru `details`
