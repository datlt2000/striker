# striker
scheduler management project
project has 3 session: front-end, backend, database

backend is written in java spring boot and spring jpa managed by maven and run by spring boot app in port 8080
  -backend is written in MVC model => every package has 3 class: Controller, Service, Storage. Controller is class which receive request from frontend
   and choose which response method. Service is class which handle bussiness logic that will decide what is response to frontend. Storage will validate
   data before save to database.
  -backend has 3 flow package:
    - Login: has 3 main class Controller, Service, Storage and DTO (Data Tranfer Object) class that will send to front end
    - LongSchedulerManagement: same to Login but manage long time scheduler
    - ShortSchedulerManagement: same to Login but manage short time scheduler
   and package data that contain entity and repository of JPA, Entitys is classes which corresponding table in database and repository is interface that
   handle query.
   
front-end is written in reactjs and run by npm in port 3000
  -front-end is written in react-redux, react-scheduler-ej2
  -front-end has 4 main package:
    -component: that has base component of page
    -layout: that is made up from base component. Layout contain complete page
    -action: that connect to server (backend) layout will call action to get data and send data
    -reducer: that change state and manage state of web that action receive.
 
 database is written in mysql:
  user: root
  password: root
  
  detail design see striker/confic
