import express from "express"


let router = express.Router()




router.get("/:productName", (req, res) => {
    let { productName } = req.params
    res.render("product")
})




export default router