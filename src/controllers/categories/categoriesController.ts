import { NextFunction, Request, Response } from "express"
import { categoryModel } from "@models/categories"
import { HydratedDocument } from "mongoose"
import { ICategory } from "@interfaces/categories"

export class CategoryController {
    static async GetCategories(req: Request, res: Response, next: NextFunction){
        try {
            let categories: HydratedDocument<ICategory>[] = await categoryModel.find()
            res.status(200).send({
            success: true,
            message: "List of categories",
            data: categories
        })
        } catch (error) {
            next(error)
        }
    }

    static async CreateCategories(req: Request, res: Response, next: NextFunction){
        let { name } = req.body
        try {
            let categories: HydratedDocument<ICategory> = await categoryModel.create({name})
            res.status(200).send({
            success: true,
            message: "Created Categories",
            data: categories
        })
        } catch (error) {
            res.status(400).send({
            success: false,
            message: error
            })
        }
    }

    static async UpdateCategories(req: Request, res: Response, next: NextFunction){
        let { id, name } = req.body
        try {
            let categories: Document | null = await categoryModel.findOneAndUpdate({_id: id}, {name}, {new: true})
            res.status(200).send({
            success: true,
            message: "Updated Categories",
            data: categories
            })
        } catch (error) {
            res.status(400).send({
            success: false,
            message: error
            })
        }
    }

    static async DeleteCategories(req: Request, res: Response) {
        let { id } = req.params
        try {
            let categories: Document | null = await categoryModel.findByIdAndDelete({_id: id})
            res.status(200).send({
            success: true,
            message: "Deleted Categories",
            data: categories   
            })
        } catch (error) {
            res.status(400).send({
            success: false,
            message: error
            })
        }
    }
}