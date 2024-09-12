import mongoose, { Document } from "mongoose"

export interface IProducts extends Document {
name: string,
price: number,
category_id: mongoose.Schema.Types.ObjectId;
}