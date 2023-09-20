# Challenge 19: Progressive Note Taker with Auto Save

## Description
In Challenge 11, the task was to create a notetaking application where the user could create new notes, save them, and delete them once they were no longer needed. However, one limitation of this application was that it did not function offline. The user should still be able to take notes even without an internet connection. This application works offline, auto saves every time the user clicks off of the text window, and can be installed on the user's computer. I learned how to use webpack to build an application, make an app installable, and modify the contents of a database.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
No installation is required for this project; however, you can click the 'Install!' button in the top left corner to install the app on your computer: (picture of install button)

## Usage
The text editor starts with no text except the JATE (Just Another Text Editor) logo when loaded up: (picture of starting page) After writing your own text, the new content is saved when you click off the window (anywhere outside of the writing area) (picture of console message the window has lost focus here) **Important:** You must click off the window for the content to be saved. If you write new text then refresh or close the tab without clicking off the window first, your newest changes will be lost (browser only). You can also turn off the wifi and your changes are still saved. The following pictures show the application tab of the devtools thingy: (picture of manifest) (picture of service worker) (picture of indexeddb > jate > jate)

A link to the deployed application can be found [here](https://progressive-note-taking-app-eb6bc28e4725.herokuapp.com/).

This app can also be installed on your mobile device. If you find your IP address for your internet network, you can go to your browser in Chrome and enter:

`ip address:port`

In my case it is (picture of ip address:port here)

and once you have navigated to the app in the browser, you can install it (insert picture of installation here)

and it will appear on your phone app screen thingy, as shown here:

(picture of app installed on phone here)

## Credits
Received assistance from tutor Mansi Patel, AskBCS assistant David, TA Michael Seaman, and instructor Robbert Wijtman. The following web resources helped me write the code for this project: (blah blah blah blah blah)

https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md

https://developer.mozilla.org/en-US/docs/Web/API/Request/destination

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

https://web.dev/codelab-make-installable/

https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

## Contributing
No contribution is necessary for this project.

## Tests
No tests have been written for this application.

## License
No license is attached to this repository.

## Questions
If you have any questions for me, you can [follow me on GitHub](https://github.com/GimmeKitties711) or email me at eric20wang.wang@gmail.com.
