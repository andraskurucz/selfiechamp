## Route handlers

### login:
  
    POST /login -> login

### feeds:
  
    GET /feeds/list/:token -> list
    GET /feeds/:feeds_id/:token -> show

### profile:
  
    GET /profile/:token -> profile

### uploads:
  
    POST /uploads/create/:token -> create
    GET /:token -> index

### users:
  
    GET /users/list/:token -> list
    GET /users/:users_id/:token -> show
    POST /users/:users_id/:token -> update
    POST /users/create/:token -> create
    
## Examples

### login:

request:

    {
      "email": "szabolcs.va@gmail.com",
      "password": "test123"
    }
    
response: 

    {
        "status": true,
        "token": "asdasdasdasdasdasd"
    }
    
## User and feed
### user:

request (concat the token to the end of the GET request) :

    http://selfie.szabolcsvaradi.com/users/list/asdasdasdasdasdasd

response:

    [
        {
            "id": "1234",
            "name": "Thomas Jalalo",
            "firstName": "Thomas",
            "lastName": "Jalalo",
            "age": "18",
            "gender": "male",
            "facebook_id": "facebook_1234565",
            "email": "kresshy@gmail.com",
            "image": "/images/no_photo.jpg"
        },
        {
            "id": "1235",
            "name": "Guillermo Ablala",
            "firstName": "Guillermo",
            "lastName": "Ablala",
            "age": "18",
            "gender": "male",
            "facebook_id": "facebook_1234566",
            "email": "kresshy+1@gmail.com",
            "image": "/images/no_photo.jpg"
        },
        {
            "id": "1236",
            "name": "Nathan Yolo",
            "firstName": "Nathan",
            "lastName": "Yolo",
            "age": "18",
            "gender": "male",
            "facebook_id": "facebook_1234567",
            "email": "kresshy+2@gmail.com",
            "image": "/images/no_photo.jpg"
        }
    ]
    
### user by id:

request:

    selfie.szabolcsvaradi.com/users/1234/asdasdasdasdasdasd

response:

    {
        "id": "1234",
        "name": "Thomas Jalalo",
        "firstName": "Thomas",
        "lastName": "Jalalo",
        "age": "18",
        "gender": "male",
        "facebook_id": "facebook_1234565",
        "email": "kresshy@gmail.com",
        "image": "/images/no_photo.jpg"
    }
    
## Upload:

request (POST):

    selfie.szabolcsvaradi.com/uploads/create/asdasdasdasdasdasd
    
fields:
1. _image_ - must be an image
2. _title_ - title of the picture
3. _id_ - could be anything right now
4. _userid_ - the logged in user id

response: 
    
    {
        "id": "2265",
        "userId": "1234",
        "title": "asd",
        "image": "/images/46aeb83a36fdd07bbae814ba8984da18bc43ebf1.jpg",
        "time": "2015-02-15T22:04:48.579Z",
        "favs": []
    }
    



    