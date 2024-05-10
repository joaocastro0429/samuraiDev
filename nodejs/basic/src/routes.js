const {Router} = require('express')
const router=new Router()

router.get("/customers",(request,response)=>{
    return response.json("bem vindo")
})



module.exports=router



