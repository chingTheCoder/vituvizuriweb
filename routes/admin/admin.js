//add product
//delete product
//update product
//see all the products

import express from "express"
import multer from "multer"
import { dirname , resolve } from "path"
import { fileURLToPath } from "url"

let filename = fileURLToPath(import.meta.url)
let directory = dirname(filename)
 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/")
    },
    filename: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1]
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`)
    }
})


const upload = multer({ storage })


let router = express.Router()



//see all the products
router.get("/", (req, res) => {
    res.render("adminpanel")
})

//create product
router.get("/createproduct", (req, res) => {
    res.render("createproduct")
})

router.post("/fileupload", upload.single('filename') , (req, res) => {
    
    res.status(200).json({
        status : "success",
        file : req.file.filename
     })
     
})
router.post("/createproduct", (req, res) => {
    res.send("product created")
})

//view product and update
router.get("/view/:productname", (req, res) => {
    res.render("viewproduct")
})

//order

export default router