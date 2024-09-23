import express from "express"
import { Book } from "../model/product.model.js";
import {createABook,getAllBooks,getABook,editABook,deleteABook} from '../controllers/product.controller.js'

const router = express.Router();


//Route for save a new Book
router.post('/createbook', createABook)

//Route for get all Books from database
router.get('/getallbooks', getAllBooks )

//Route for get One book from database
router.get('/getabook/:id', getABook )

//Route for update one book
router.put('/editaboook/:id', editABook)

//Route for delete one book
router.delete('/deleteabook/:id', deleteABook)


export default router;