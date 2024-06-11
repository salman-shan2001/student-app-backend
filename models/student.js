const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,require:true},
        "rollno":String,
        "admissionno":String,
        "college":String
    }
)

const studentmodel = mongoose.model("students",schema);
module.exports={studentmodel}