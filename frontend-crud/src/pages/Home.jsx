import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BookCard from '../components/home/BookCard';
import BookTable from '../components/home/BookTable';


import { Link } from 'react-router-dom';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowtype] = useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3050/books/getallbooks')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false)
      }).catch((error) =>{
        console.log(error)
      })
  },[])
  
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 py-1 rounded-lg p-3 px-8'
          onClick={() => setShowtype('table')}
        >Table</button>
        <button
          className='bg-sky-300 hover:bg-sky-600 py-1 rounded-lg p-3 px-8'
          onClick={() => setShowtype('card')}
        >Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ): showType === 'table' ? (
        <BookTable books={books} />
      ): (
        <BookCard books={books} />
      )}
    </div>
  )
}

export default Home
