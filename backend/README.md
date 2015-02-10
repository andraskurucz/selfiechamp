## Route handlers

   ###feeds:
   
     GET /feeds/list/:token -> before -> list
     GET /feeds/:feeds_id/:token -> before -> show

   ###login:
   
     POST /login -> login

   ###profile:
   
     GET /profile/:token -> before -> profile

   ###users:
   
     GET /users/list/:token -> before -> list
     GET /users/:users_id/:token -> before -> show
     POST /users/:users_id/:token -> before -> update
     POST /users/create/:token -> before -> create