## Team Profile Generator

## Description

Keep track of your teams using a Node.js command-line application that takes in information about employees on a software engineering team. This application collects inputs and then generates an HTML webpage that displays summaries for each person. In addition this application tests the roles to making code maintainable. Scroll down to see how to runa unit test for every part of the code and ensure that it passes each test as you make changes to the code.

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN the user is prompted for the user's team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN the user clicks on an email address in the HTML
THEN the user's default email program opens and populates the TO field of the email with the address
WHEN the user clicks on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN the user starts the application
THEN the user is prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN the user enters the team manager’s name, employee ID, email address, and office number
THEN the user is presented with a menu with the option to add an engineer or an intern or to finish building the user's team
WHEN the user selects the engineer option
THEN the user is prompted to enter the engineer’s name, ID, email, and GitHub username, and the user is taken back to the menu
WHEN the user selects the intern option
THEN the user is prompted to enter the intern’s name, ID, email, and school, and the user is taken back to the menu
WHEN the user decides to finish building the user's team
THEN the user exits the application, and the HTML is generated
```

## Installation

```
npm install inquirer
npm install jest

To run:
node index.js
```

## Walkthrough video

![how-to gif](./Untitled_%20Jun%2022%2C%202022%2012_41%20AM.gif)

## **License**

*MIT License*

Copyright (c) [2022] [Kyle Justine Yang]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.