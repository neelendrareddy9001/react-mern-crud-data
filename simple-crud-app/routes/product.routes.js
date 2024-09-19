import express from "express"
import { Book } from "../model/product.model.js";

const router = express.Router();


//Route for save a new Book
router.post('/', async (req, res) => {})

//Route for get all Books from database
router.get('/', async (req, res) => {})

//Route for get One book from database
router.get('/:id', async (req, res) => {})

//Route for update one book
router.put('/:id', async (req, res) => {})

//Route for delete one book
router.delete('/:id', async (req, res) => {})


export default router;