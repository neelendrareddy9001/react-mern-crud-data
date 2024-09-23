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
app.use('/books', bookRoutes )


// //Route get all the books
// app.get('/books', async (req,res) => {
    
// })


// //get one book from database id
// app.get('/books/:id', async (req,res) => {
   
// })


// // update a book from database
// app.put('/books/:id', async (req,res) => {
    
// })


// //delete a single book from database
// app.delete('/books/:id', async (req,res) => {
   
// })


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