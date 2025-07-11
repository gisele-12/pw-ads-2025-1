import { Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import Box from '@mui/material/Box';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useState, useEffect } from "react";
import vintageImage from '../assets/vintage-cars.png';

export default function About() {
  const [likes, setLikes] = useState(() => {
    return parseInt(localStorage.getItem("likes")) || 0;
  });

  const [state, setState] = useState('');

  function handleLike() {
    setLikes(prev => {
      const newLikes = prev + 1;
      localStorage.setItem("likes", newLikes);
      return newLikes;
    });
  }

  async function loadData() {
    try {
      const response = await fetch(import.meta.env.VITE_API_BASE + '/sobre/1');
      const data = await response.json();
      setState(data.info);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
      <Card style={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Vintage car"
          height="200"  // ajuste conforme seu layout
          image={vintageImage}
          sx={{
            objectFit: 'cover'
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sobre o projeto Karangos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {state}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<ThumbUpIcon />}
            onClick={handleLike}
          >
            Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
