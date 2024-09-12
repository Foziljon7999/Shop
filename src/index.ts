import express, { Application } from "express"
import { mongo } from "@mongo"
import router from "./routes"


const app: Application = express()
app.use(express.json())
app.use(router)


mongo()
     .then(() => console.log("DB connected"))
     .catch((err) => console.log(err))

app.listen(9000, () => {
    console.log(9000)
})