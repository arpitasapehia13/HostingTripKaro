const mongoose = require("mongoose")

const SlotSchema = new mongoose.Schema({
    date : { type : Date , required : true},
    numberOfPerson : {type : Number, required : true,default : 20}
})
const AdventureDeatilSchema = new mongoose.Schema({


    adventureId : {type: mongoose.Schema.Types.ObjectId, ref : "adventures", required: true},
    subtitle : { type : String, required : true},
    images : {type : [String] , required : true},
    content : { type : String , required : true},
    available : { type : Boolean , default : true, requires : true},
    reserved : {type : Boolean , default: false,required : true},
    slots : {type : {SlotSchema},require: true}
    

})


const AdventureDeatil = mongoose.model("adventure-details", AdventureDeatilSchema)

module.exports = AdventureDeatil