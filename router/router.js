const express = require("express")
const {check , validationResult} = require("express-validator")
const router = express.Router();
require("../models/model")
router.get("/",async(req,res)=>{
    const curd = await Curd.find()
    res.send(curd)

});

router.post("/",[
    check("name", "It is required ").isAlpha().isLength({min:3,max:50}),
    check("email","It is required").isEmail().isLength({min:8,max:70}),
    check("password" ,"It is required").isLength({min:5,max:20})

], async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(404).json(error)
    } else{
        try {
            const curd = new Curd({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            await curd.save()
            res.json(curd)
        } catch (error) {
            res.status(404).json(error)
        }

    }
})

router.put("/:id",[
    check("name","It is required").isAlpha().isLength({min:3,max:50}),
    check("email","It is required").isEmail().isLength({min:8,max:70}),
    check("password","It is required").isLength({min:5,max:15})

], async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        res.status(404).send(json)
    } else{
        try {
            const curd = await Curd.findByIdAndUpdate(req.params.id ,{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            },{new:true})
            res.json(curd)
        } catch (error) {
            res.status(404).json(error)
        }
    }

});


router.delete("/:id", async(req,res)=>{
    try {
        const curd = await Curd.findByIdAndRemove(req.params.id)
        if(curd){
            res.json("Movie Deleted SuccessFully")
        } else{
            res.json("Movie already Deleted")
        }
    } catch (error) {
        res.status(404).json(error)
        
    }

})

module.exports = router;