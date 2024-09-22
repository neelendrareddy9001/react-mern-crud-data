import React,{useEffect,useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3050/${id}`)
    .then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false)
    }).catch((error) => {
      setLoading(false)
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
      .put(`http://localhost:3050/books/${di}`, data)
      .then(() => {
        setLoading(false)
        navigate("/")
      })
      .catch((error) => {
        setLoading(false)
        alert("An error happended. Please check console")
        console.log(error)
      })
  }
  return (
    <div>EditBook</div>
  )
}

export default EditBook