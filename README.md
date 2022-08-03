# Netbuttik

Netbuttik is a responsive web application built from scratch using ReactJS, Redux, Carbon Components React, SASS, Webpack & ExpressJS.

## Technical Information

- In order to make dynamic content available using API's the application is divided into two parts :
  1. Client - Servers the Front-end of the application built using ReactJS, Redux, Carbon Components
  2. Server - Serves API's built using ExpressJS
- Netbuttik uses Yarn for package management, build/startup scripts can be run using simple yarn commands
- In production mode both Front-end and API's are served from Netbuttik API server.

**Note : The information below is for Windows OS, If you are running Mac OS, try installing prerequisites using Homebrew.**

## Prerequisists

- Please install following tools globally (make sure they are added to PATH environment variable)

  1. Node (v12) - https://nodejs.org/en/
  2. NPM (6.9.0) - comes with node
  3. Yarn (1.9.4) - https://yarnpkg.com/en/docs/install#windows-stable

- Check versions using following commands and:
  1. `node -v`
  2. `npm -v`
  3. `yarn -v`

## Startup

- Please follow below steps to run the application locally.
  1. Download the respository and navigate to Netbuttik folder in a command window / terminal.
  2. run `yarn install`
  3. run `yarn start` (You can also use `yarn dev` for starting a dev build, this allows you to refresh changes automagically on browser as you save - both client and server )
  4. Netbuttik Front-end should start on port 3000 and Netbuttik API starts on port 8080
  5. Open http://localhost:8080 in browser to access the application

## IMPORTANT

- In production mode (when using `yarn start`) the application Front-end is served from server (distribution package) hence the app can be only be accessed from http://localhost:8080.
- In development mode (when using `yarn dev`) the Frontend runs separetely and can be accessed from http://localhost:3000
- In both modes Netbuttik API is accessible at http://localhost:880
