import React,{useEffect,useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar(); 
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios.put(`http://localhost:3050/books/editabook/${id}`)
    .then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false)
      enqueueSnackbar('Book Edited successfully', {variant: 'success'})
    }).catch((error) => {
      setLoading(false)
      enqueueSnackbar('Error', {variant: 'warning'})
      alert('An error happended. Please check console')
      console.log(error)
    })
  },[])
  const handleEditBook = () => {
    const data = {
      title, 
      author,
      publishYear
    }
    setLoading(true);
    axios
      .put(`http://localhost:3050/books/editabook/${id}`, data)
      .then(() => {
        setLoading(false)
        navigate("/")
      })
      .catch((error) => {
        setLoading(false)
        alert("An error happended. Please check console")
        console.log(error)
      },[])
  }
  // const handleSaveBook = () => {
  //   const data = {
  //     title,
  //     author,
  //     publishYear
  //   }
  //   setLoading(true)
  //   axios
  //     .post('http://localhost:3050/books', data)
  //     .then(() => {
  //       setLoading(false)
  //       navigate("/")
  //     })
  //     .catch((error) => {
  //       setLoading(false)
  //       alert('An error happended. Please check console')
  //       console.log(error)
  //     })
  // }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto my-8'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-md' 
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='text' value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8 rounded-xl' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook