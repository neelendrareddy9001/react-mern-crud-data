import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import { Book}  from './model/product.model.js';
import bookRoutes from './routes/product.routes.js'

const app  = express();
app.use(express.json());
//Middlewar for handling cors policy
//Option 1: Allow Origins with Defaults of CORS(*)
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5176',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}))


const port = process.env.PORT | 3050;
const mongo_url = "mongodb+srv://ramkrish9649:ramkrish9649@cluster0.dmhpr.mongodb.net/Book-Store?retryWrites=true&w=majority&appName=Cluster0";

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send("Welcomem to Mern stack tutorial")
})


//Route for save a new book
app.post('/books', async (req,res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author,publishYear"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book  = await Book.create(newBook);
        return res.status(201).send(book)
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})


//Route get all the books
app.get('/books', async (req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch(error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})


//get one book from database id
app.get('/books/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book)
    } catch(error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})


// update a book from database
app.put('/books/:id', async (req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: "Send all the required fields: title, author, publishYear"
            })
        }
        const {id} = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result) {
            return res.status(404).json({message: "Book not found"})
        }
        return res.status(200).send({message: "Book updated successfully"})

    } catch(error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})


//delete a single book from database
app.delete('/books/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result) {
            return res.status(404).json({message: "Book not found"})
        }
        return res.status(200).send({message: "Book deleted successfully"})
    } catch(error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})


app.use('/books', bookRoutes)

mongoose
    .connect(mongo_url)
    .then(() => {
        console.log("App connected to databaase");
        app.listen(port, () => {
            console.log(`App is running at ${port}`)
        })
    }).catch((err) => {
        console.log(err)
    })