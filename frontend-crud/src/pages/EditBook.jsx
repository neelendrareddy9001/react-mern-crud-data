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
  const handleSaveBook = () => {
    const data = {
      title, 
      author,
      publishYear
    }
    setLoading(true);
    axios('http://localhost:3050', data)
    .then(() => {
      setLoading(false)
      navigate("/");
    })
  }
  return (
    <div>EditBook</div>
  )
}

export default EditBook