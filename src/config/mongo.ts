import mongoose from "mongoose"

const mongo = async () => {
    return await mongoose.connect("mongodb://localhost:27017/shop")
}

export { mongo }