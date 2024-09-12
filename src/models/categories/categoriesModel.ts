import {Schema, model } from "mongoose"
import { ICategory } from "@interfaces/categories"

const categoriesSchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true
    }
},
{
    collection: "categories"
})

let categoryModel = model("Categories", categoriesSchema)

export { categoryModel }