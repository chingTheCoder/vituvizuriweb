import express from "express"
import hbs from "hbs"
import { dirname , resolve } from "path"
import { fileURLToPath } from "url"
import category from "./routes/category.js"
import product from "./routes/product.js"
import admin from "./routes/admin/admin.js"
//import { PrismaClient} from '@prisma/client'

let filename = fileURLToPath(import.meta.url)
let directory = dirname(filename)
//const prisma = new PrismaClient()

let app = express()
app.use(express.static("public"))
app.set("view engine", "hbs")
hbs.registerPartials(resolve(directory + "/views/partials"))
app.use(express.json({urlencoded : "true"}))



app.use("/category", category)
app.use("/product", product)
app.use("/admin", admin)

app.get("/", (req, res) => {
    res.render("index")
})


app.listen(80, function () {
    console.log("listenning from vituvizuri web")
})