const TodoModel=require('../models/todomodels')  
module.exports.getTodo=async(req,res)=>{
    const todo=await TodoModel.find()
    res.send(todo)
} 
module.exports.savetodo=async (req,res)=>{
    const { text }=req.body
    TodoModel
    .create({ text })
    .then((data)=>{
        console.log("Added Successfully..")
        console.log(data)
        res.send(data)
    })
}
module.exports.updatetodo=async (req,res)=>{
    const {_id,text}=req.body
    TodoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated Successfully"))
    .catch((err) =>console.log(err))
}
module.exports.deleatetodo=async (req,res)=>{
    const {_id}=req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("deleated Successfully"))
    .catch((err) =>console.log(err))
}