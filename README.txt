Steps for Assignemnt 1:

-> npm install -g@angular/cli
-> ng new --no-standalone
-> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
-> ng new  --no-standalone
-> SCSS
-> Project name: Sal_Syeda_Travelitinerary
-> Changed version to 0.0.1 in package.json file
-> npm run-script generatecomponent (generate a component)
-> npm run-script generatepipe (generate a pipe)
-> npm run-script generatedirective (generate a directive)

-> New folder inside app folder called helper-files
-> Added a file named content-interface.ts (defined an interface)
-> Created another file named content-list.ts inside helper-files (contains class ContentList)

-> Created new Content-Card (ng generate component Content-Card)
-> Added content in the content-card.ts, .html and .css files
-> Add component in the actual app .html for it to display the content
-> To run the application we used the command (ng serve)


Steps for Assignment 2: 

-> Deleted ContentList class implementation for the Content-card
-> Deleted content-list.ts helper file.
-> Created a new component called Content-list
-> In the Content-list componenet, Defined an array of 5 content item's.
-> Used an ngFor directive in Content-list's html file
-> Displayed 5 content cards by passing in the values from the content array
-> Made the required css changes for the content array
-> Display works 