# `native-prompt`
Create native prompts with Node.js and Electron

# What is this?
While `alert` and `confirm` are both supported in Electron, `prompt` isn't (see [this issue](https://github.com/electron/electron/issues/472)). `native-prompt` aims to fix this by allowing you to create prompt boxes that are native to the user's OS. As an added bonus, it also works in Node.js.

# Screenshots
## Windows
![A prompt showing on Windows](https://raw.githubusercontent.com/ssight/native-prompt/master/screenshots/Windows.png)
## Linux
![A prompt showing on Linux](https://raw.githubusercontent.com/ssight/native-prompt/master/screenshots/Linux.png)
## MacOS
![A prompt showing on MacOS](https://raw.githubusercontent.com/ssight/native-prompt/master/screenshots/MacOS.png)

# Installation
### Through [NPM](https://www.npmjs.com/package/native-prompt):
>`npm i native-prompt`
### ...or the long way:
>`npm install native-prompt@latest --save`

# Usage
## Synopsis
```js
prompt (title, body, defaultText)
```
### `title:string`
>The title you want to display at the top of the window
### `body:string`
>Any helpful text to go inside the message box
### `defaultText:string`
>The text you want to already be in the input box beforehand (optional)

## Examples
### Importing
#### Javascript
```js
const prompt = require('native-prompt').prompt
```
#### Typescript
```ts
import { prompt } from 'native-prompt'
```
---
### Async function usage
```js
(async () => {
    const text = await prompt("This is a title.", "What would you really like to see next?", "Nothing");
    if (text) {
        // Do something with the input
    } else {
        // The user either clicked cancel or left the space blank
    }
})()
```
### Regular promise usage
```js
prompt("This is a title.", "What would you really like to see next?", "Nothing").then(text => {
    if (text) {
        // Do something with the input
    } else {
        // The user either clicked cancel or left the space blank
    }
})
```

# Limitations
Currently, MacOS is not supported, but it should be in the future. Check back soon.