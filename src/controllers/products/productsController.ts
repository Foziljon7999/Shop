import { productsModel } from "@models/products"
import { Request, Response, NextFunction} from "express"
import { HydratedDocument } from "mongoose"
import { IProducts } from "@interfaces/products/products"

export class ProductsController{
    static async GetProducts(req: Request, res: Response, next: NextFunction){
        try {
            let products: HydratedDocument<IProducts>[] = await productsModel.find()
            res.status(200).send({
                success: true,
                message: "List of products",
                data: products
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }

    static async CreateProducts(req: Request, res: Response){
        let { name, price, category_id } = req.body
        try {
            let products: HydratedDocument<IProducts> = await productsModel.create({name, price, category_id})
            res.status(200).send({
                success: true,
                message: "Created Products",
                data: products
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }

    static async UpdateProducts(req: Request, res: Response){
        let {id, name, price, category_id } = req.body
        try {
            let products: Document | null = await productsModel.findByIdAndUpdate({_id: id},{name, price, category_id}, {new: true})
            res.status(200).send({
                success: true,
                message: "Updated Products",
                data: products
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }

    static async DeleteProducts(req: Request, res: Response){
        let { id } = req.params
        try {
            let products: Document | null = await productsModel.findByIdAndDelete({_id: id})
            res.status(200).send({
                success: true,
            message: "Deleted Products",
            data: products
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }
}