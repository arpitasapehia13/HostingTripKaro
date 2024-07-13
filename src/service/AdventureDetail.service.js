const AdventureDetailsRouter = require("../routes/AdventureDetails.Router")

async function SaveNewAdventureDetailService(adventureId,subtitle,images,slots){

    try{
      const result =   AdventureDetail.create({
        adventureId,
        subtitle,
        images,
        content,
        slots

        })
        if(result){
            success : true;
            data : result
        }
        else{
            throw new Error("Erro in SaveAdventureDeatilsService")
        }

    }catch(err){
        console.log(err)
        return{
            success:false
        }

    }

}

module.exports = {
    SaveNewAdventureDetailService
}