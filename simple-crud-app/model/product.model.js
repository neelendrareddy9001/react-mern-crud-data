import mongoose from "mongoose";

const booScheema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true
        }
    },
    {timestamps: true}
)

export const Book = mongoose.model("Cat", booScheema)