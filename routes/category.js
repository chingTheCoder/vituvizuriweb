import express from "express"


let router = express.Router()



// router.get("/", (req, res) => {
//     res.send("agfaggsggsggsgsg")
// })

router.get("/:categoryname", (req, res) => {
    let { categoryname } = req.params

    console.log(categoryname)
    res.render("category", {
        categoryname : categoryname
    })

})




export default router