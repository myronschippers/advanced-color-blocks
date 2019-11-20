# Color Blocks - Solo Challenge(s)

## Description

The application is a JavaScript exercise that leverages jQuery for DOM manipulation with the goal of creating different Colored Blocks and adding them to the DOM based off of the specific button the user clicks. Additional features will be available for deleting the Colored Blocks and even altering their visual layout.

### Screen Shot

<img src="documentation/color-blocks-advanced.png" alt="Application Screenshot" />

## Prerequisites

The following software is required to run this application.

1. [Node.js](https://nodejs.org/en/)

## Installation

In the terminal from the root of the project directory run the following:

1. `npm install`
1. `npm start`

This will launch the server at port 5000 so the application can be viewed at [localhost:5000](http://localhost:5000/).

## Usage

1. By clicking either the **Add Red**, **Add Blue**, **Add Green**, or **Add Yellow** buttons a *Color Block* element gets added to the page with the appropriate color displayed in the element.
1. Each *Color Block* consists of three parts; a color swatch, a label with the name of the color, and a **Delete** button.
1. When the **Delete** button on an individual *Color Block* is clicked it will remove that particular *Color Block* from the DOM.
1. In the top right of the application to the right of the **Layout** label are five icons. Clicking on any of the icons will alter the layout of the *Color Blocks*. From left to right the icons are; auto, 1 across, 2 across, 3 across, & 4 across.
    * **auto** - will inherit the size of the *Color Blocks* default size and wrap to the next line when there isn't enough room
    * **1 across** - will cause each *Color Block* to fill up the entire available width so that only one *Color Block* fits on each line
    * **2 across** - will size each *Color Block* so that only 2 can fit on a single line but fill up the entire available space
    * **3 across** - will size each *Color Block* so that only 3 can fit on a single line but fill up the entire available space
    * **3 across** - will size each *Color Block* so that only 4 can fit on a single line but fill up the entire available space

## Built With

* JavaScript
* Node.js
