const {Router}=require("express")
const { getTodo, savetodo, updatetodo, deleatetodo } = require("../controlers/todocontroler")

const router=Router()
router.get('/',getTodo)
router.post('/save',savetodo)
router.post('/update',updatetodo)
router.post('/delete',deleatetodo)
module.exports=router;  