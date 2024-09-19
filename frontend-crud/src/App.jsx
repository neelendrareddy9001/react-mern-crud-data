import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import CreatBook from './pages/CrateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreatBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
