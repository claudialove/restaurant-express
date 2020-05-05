const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded) ({ extended: true});
app.use(express.json());


//what routes do we need
    //homepage
    //make a reservation page (GET)
    //api resuest handler for current tables (GET)
    //api request handler to show the waiting list (GET)
    //api route to POST a new reservation request


//what variables do we need
    //who has a reservation (array)
    //who is on the waiting list (array)

    const reservations = [];
    const waitinglist = [];


    app.get("/", function (req, res){
    //send  back index.html file
    });

    app.get("/reservation", function (req, res){
//send back resvation request html file

    });

    app.get("/api/tables", function (req, res){
        //send back JSON of all current tables reserved
    });


    app.post("/api/waitinglist", function (req, res){
        //send back JSON  of everyone on waiting list
    })

    app.get("/api/newreservation", function (req, res){
        //parse posted data and do whatever you need to do
    });


    app,listen(PORT, function (){
        console.log("app listening on PORT" + PORT);
    });

    
  


