import mongoose, { model, Schema } from "mongoose"
import { IProducts } from "@interfaces/products/products"

const productsSchema = new Schema<IProducts>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
},
{
    collection: "products"
})

const productsModel = model("Products", productsSchema)

export { productsModel }