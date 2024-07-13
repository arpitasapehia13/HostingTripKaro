const httpStatus = require("http-status")

const { } = require("./../service/AdventureDetail.service")

async function SaveNewAdventureDetail(req,res){

    try{
        const {id : adventureId} = req.query
        const {subtitle , images , content,slots} = req.body

        const modifiedDateSlots = slot.map(slot)=>{
            if(slot.date){
                const newSlot = {...slot,date: New Date(slot.date)}
                return newSlot
            }
        }
        const result = await SaveNewAdventureDetailservice(adventureId,subtitle,content,images,slots)

        if(result.success){

        }
        else{
            throw new Error("error in SaveAdventureDetail Controller")
        }


    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }

}


async function GetAdventuresDetailsUsingAdventureIdController(req,res){

    try{
        const{id : adventureId} = req.query;
        const result = await GetAdventuresDetailsUsingAdventureIdController(adventureId)

        if(result.success){

        }
        else{
            throw new Error("Error in GetAdventureDetailsUsingAdventuresIdController")
        }

    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }

}

module.exports = {
    SaveNewAdventureDetail,
    GetAdventuresDetailsUsingAdventureIdController
}
