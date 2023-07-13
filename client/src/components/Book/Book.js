import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
function Book(props) {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async (req, res) => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/books/${_id}`)

      .then((res) => res.data)
      .then(() => navigate("http://localhost:5000"))
      .then(() => navigate("/books"));
  };

  return (

    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>

      <h3>Rs: {price} $</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>

  );
}

export default Book;
