const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body, (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
});

studentRoute.route("/update-student/:id")
    .get((req, res) => {
        studentSchema.findById(req.params.id, (err, data) => {
            if (err)
                return err;
            else
                res.json(data);
        })
    }
    )
    .put((req,res)=>{
        studentSchema.findByIdAndUpdate(req.params.id, {$set:req.body},
            (err,data)=>{
                if(err)
                    return err;
                else
                    res.json(data);
            })
    });

// http://localhost:4000/studentRoute/update-student/652d21320d4a367f69086c38
// Axios.put(url,obj)
// Axios.put(http://localhost:4000/studentRoute/update-student/652d21320d4a367f69086c38,{"name":"abc"})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id, {$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

module.exports = studentRoute;