# The Dog House
This application is made to store data about dogs in a shelter. I was inspired to do this project when I found an abandoned dog and took her to the shelter a few weeks ago. All of the intake work was done on paper and seemed like a poor way to handle the lives of these dogs. My hope is to continue improving this application to fully meet the record-keeping needs of the shelter and then to donate the software. In V1 the program can handle basic record keeping about the dogs almost like inventory, but in future versions it could store veterinary data and information about the home that they go to. Below are the different routes to bow-wow-api/dogs.

CREATE a new dog that enters the shelter:
URL:  https://young-crag-09807.herokuapp.com/dogs
METHOD: 'POST'
HEADERS: The user's authentication token is required.
CONTENT TYPE: application/json
REQUIRED: dog.name, dog.breed, dog.age

UPDATE an existing dog:
URL:  https://young-crag-09807.herokuapp.com/dogs/:id
METHOD: 'PATCH'
HEADERS: The user's authentication token is required.
CONTENT TYPE: application/json
REQUIRED: dog.name, dog.breed, dog.age

INDEX all dogs:
URL:  https://young-crag-09807.herokuapp.com/dogs
METHOD: 'GET'
HEADERS: The user's authentication token is required.
CONTENT TYPE: application/json

FIND an existing dog:
URL:  https://young-crag-09807.herokuapp.com/dogs/:id
METHOD: 'GET'
HEADERS: The user's authentication token is required.
CONTENT TYPE: application/json
REQUIRED: dog.id

DELETE an existing dog:
URL:  https://young-crag-09807.herokuapp.com/dogs/:id
METHOD: 'DELETE'
HEADERS: The user's authentication token is required.
CONTENT TYPE: application/json
REQUIRED: dog.id

Users can use the following routes to sign-up, sign-in, change their passwords, and sign-out:

SIGN-UP:
URL:  https://young-crag-09807.herokuapp.com/sign-up
METHOD: 'POST'
CONTENT TYPE: application/json
REQUIRED: user.email, user.password

SIGN-IN:
URL:  https://young-crag-09807.herokuapp.com/sign-in
METHOD: 'POST'
CONTENT TYPE: application/json
REQUIRED: user.email, user.password

CHANGE PW:
URL:  https://young-crag-09807.herokuapp.com/change-password
METHOD: 'PATCH'
CONTENT TYPE: application/json
HEADERS: The user's authentication token is required.
REQUIRED: user.email, user.oldpw, user.newpw

SIGN-OUT:
URL:  https://young-crag-09807.herokuapp.com/sign-out
METHOD: 'DELETE'
CONTENT TYPE: application/json
HEADERS: The user's authentication token is required.

## Important Links
- [Other Repo](https://github.com/CjeanHen/inTheDogHouse)
- [Deployed API](https://young-crag-09807.herokuapp.com/)
- [Deployed Client](https://cjeanhen.github.io/inTheDogHouse/)

### Planning Story
The first step to creating the back-end of this project was to think about the resources and how they should be represented. Once I had defined the way the resources were connected and the attributes they needed to have, I started writing curl scripts to visualize how to communicate with the API. I updated the routes based off of the information from the curl scripts and tested them out one at a time first on the User and then on the Dogs. This was the quickest and easiest part of the project. Once the curl scripts were running I moved on to the browser.

### User Stories
As a user I want to be able to create a new document for each new dog that enters the shelter.
As a user I want to be able to update the information about each dog.
As a user I want to be able to delete a dog once they're adopted.
As a user I don't want updates to be made by anyone who is not a registered user.

## Technologies Used
- Express
- Node.js
- Mongodb
- Mongoose

### Unsolved Problems
Eventually I would like to be able to build the backend entirely by myself. Of course, authentication has been done (and done well!) many times, so there is no need to reinvent the wheel, but I would like the challenge of looking for the most appropriate solution to authentication based on the needs of my application.

## ERD:
[ERD](https://photos.app.goo.gl/ao5PoKznU934fQhG6)
