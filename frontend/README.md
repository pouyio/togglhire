# Emailnator 2023 🦾

![Demo](./demo.mp4)

## Description

Emailnator lets you select or drop text files from your computer. Once selected, the files will be displayed along with their names and the amount of emails parsed in each one.

The list of emails will be displayed before submiting the form. Duplicated emails are removed.

When the request is done a loader appears and makes the button disabled.

A notification alert will appear on top showing if the response was a success or had any error. In this case the list of emails will show the problematic ones.

## Tech

React with plain javascript (no typescript ☹️) and no external dependencies. Only `@testing-library/react` for the tests. Plain CSS as well.

Several component folders (component + styles) and a single global provider for the alerts, no custom hooks. Added some comments on potentially tricky parts.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Added some basic tests. Launches the test runner in the interactive watch mode.
