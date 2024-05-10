const {Router} = require('express')
const router=new Router()

const customers=require('./app/controllers/CustomerController')


router.get("/customers",customers.index)
router.post("/customers",customers.create)
router.get("/customers/:id",customers.show)
router.put("/customers/:id",customers.update)
router.delete("/customers/:id",customers.destroy)





module.exports=router



