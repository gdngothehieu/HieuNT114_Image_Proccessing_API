# This is how you are using the Image Processing API

### the endpoint ("/api") is the main page.
### the endpoint ("/api/images") is where the image processing is occurred.

## to resize the image, you need to do the following:
1- make sure that the image is in the "original-pic" folder

2- in the address bar, add the prober variable, name (which is the name of the original picture, width (required width), and height (required height) in that order.
example:
http://localhost:3000/api/images?name=fjord.jpg&width=300&height=700

3-if the image processing succeeded, you will find a message tells you that the thumbnail had been created.

4- if the api finds out that the thumbnail is already exist, it will not make any processing, and a message will tell you that the thumbnail is already exist

5- if the process is successful, the thumbnail will be saved it the "thumbnail" folder

6- the thumbnail will be saved with the original picture name + new width and height (fjord.jpg-300-750.jpg)

## To start the application 
npm run start

## To start building
npm run build

## To start testing
npm run test //(it will build then test)
