import { Router } from "express"
import { CategoryController } from "@controllers/categories"
import { ProductsController } from "@controllers/products"

const router: Router = Router()

// <---Categories--->

router.get("/categories/all", CategoryController.GetCategories)
router.post("/categories/create", CategoryController.CreateCategories)
router.patch("/categories/update", CategoryController.UpdateCategories)
router.delete("/categories/delete/:id", CategoryController.DeleteCategories)

// <--- Products --->

router.get("/products/all", ProductsController.GetProducts)
router.post("/products/create", ProductsController.CreateProducts)
router.patch("/products/update", ProductsController.UpdateProducts)
router.delete("/products/delete/:id", ProductsController.DeleteProducts)

export default router 