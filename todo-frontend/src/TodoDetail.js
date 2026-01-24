import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const TodoDetail = () => {
  const { id } = useParams(); 
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/${id}/`)
      .then(res => {
        setTodo(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default TodoDetail;
