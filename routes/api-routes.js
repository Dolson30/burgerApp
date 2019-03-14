var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) 
    {
        res.redirect("/burgers");
    });


    app.get("/burgers", function(req, res) 
    {
        db.Burgers.findAll(
        {
            where: {Eaten: false}
        }).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });
    app.get("/burgers/eaten", function(req, res) 
    {
        db.Burgers.findAll(
        {
            where: {Eaten: true}
        }).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });
    app.post("/burgers/add",function(req,res)
    {
        console.log(req.body);
        db.Burgers.create({Name:req.body.name});
    })
    app.put("/burgers/devour/:id",function(req,res)
    {
        db.Burgers.update({Eaten:true}, {where:{id:req.params.id}});
    })

    
}