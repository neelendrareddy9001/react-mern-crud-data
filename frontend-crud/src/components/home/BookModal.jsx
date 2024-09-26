import React, {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const BookModal = ({ book, onClose }) => {

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClose={onClose}
    >
        <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
            {book.publishYear}
        </h2>
    </div>
  );
};

export default BookModal;
