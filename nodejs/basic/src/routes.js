import {Router} from 'express'

import customers from './app/controllers/CustomerController'
const router=new Router()


router.get("/customers",customers.index)
router.post("/customers",customers.create)
router.get("/customers/:id",customers.show)
router.put("/customers/:id",customers.update)
router.delete("/customers/:id",customers.destroy)





export default router


