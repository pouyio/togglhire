# Emailnator 2023 🦾

https://user-images.githubusercontent.com/5225417/205484149-92a0ab26-4b1b-49af-a7f9-54717bef1a56.mp4

## Description

Emailnator lets you select or drop text files from your computer. Once selected, the files will be displayed along with their names and the amount of emails parsed in each one.

The list of emails will be displayed before submiting the form. Duplicated emails are removed.

When the request is done a loader appears and makes the button disabled.

A notification alert will appear on top showing if the response was a success or had any error. In this case the list of emails will show the problematic ones.

## Tech

React with plain javascript (no typescript ☹️) and no external dependencies. Only `@testing-library/react` for the tests. Plain CSS as well.

Several component folders (component + styles) and a single global provider for the alerts, no custom hooks. Added some comments on potentially tricky parts.

## Performance

Basic lighthouse test results serving the production build.

https://user-images.githubusercontent.com/5225417/205485292-a852024b-e3cc-4057-a528-c86388e2b558.mp4

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Added some basic tests. Launches the test runner in the interactive watch mode.
