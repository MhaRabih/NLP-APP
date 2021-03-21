## Summary

This repo is a frontend application that uses MeaningCloud API to make NLP for any valid submitted URL with two building modes development and production 


## Technologies

- Webpack is the building tool with loaders and plugins to fit the requirements 
- NodeJs configured with Axious and dotenv
- jest for unit testing for each js function
- HTML,SASS,CSS,JS to develop the front end
-  Netlify for deployment


## Main functionalities
 
 - collecting submitted URL 
 - Validate URL Regax 
 - alerting Error if using a non valid URL
 - display loading until the output is ready
 - Sending URL to server side
 - fetching API URL
 - receiving API response
 - sending sentiment (Agreement, Subjectivity, Confidence, Irony) from API response to client side
 - presenting the data on the frontend
 - testing each function is defined 
 - testing regax validation function is working as expected


## Usage
 - first you need to install all packages using the terminal in the project path `npm install`
 - Build the project in one of the two available modes production or development `npm run build-prod`or`npm run build-dev`
 - starting the server `npm start`
 You can also use the Deployed link to try the application [Netlify](https://6056b1f8c0098555ff8673f0--festive-lamarr-f0870b.netlify.app/)
