# Nothile's Router App

This app is currently deployed to Github pages.

View App: https://nothile-moyo-git.github.io/react-router/quotes 

### Welcome, this is my multipage SPA using React, React Router, SCSS, Node.js & Github Pages.

### Installation
To install all necessary package dependencies, run "npm install" followed by "npm audit fix".

To start a local server for the app, run "npm run start".

### General
This app is a routed "quotes list". These quotes have an author and quote text, and can be added, deleted, or even updated :)! I've hooked it up to a FireStore database and I make the API calls using a custom hook.

This custom hook takes an asynchronous function with the data for the API call and returns an error object, a status, a responsedata array and a function to execute our previously defined asynchronous function. 

For styling, I used SCSS and some gradients with box shadows and a "teal" color scheme in order to do it. Unlike my previous apps, I wanted to be a little bit less aggressive on the gradients and so I styled the app without them and then included them in.

The app was only suppose to have to have the functionality to add or view quotes and I wanted to make it a CRUD application so I did.

For regarding deployment, I deployed it to github pages by installing github pages for React, creating this repo and publishing my master branch to it instead of main.

![image](https://user-images.githubusercontent.com/15236959/188316791-1af96a64-1d7f-4de6-a96f-55f8777115f9.png)

