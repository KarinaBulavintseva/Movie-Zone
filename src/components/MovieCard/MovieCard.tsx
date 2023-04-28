import React from 'react';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';

interface MovieCardProps {
  imageUrl: string;
  title: string;
}

export default function MovieCard(props: MovieCardProps) {
  return (
    <Card
      sx={{
        width: 200,
        cursor: 'pointer',
        boxShadow: 'none',
        borderRadius: '0px',
        transition: 'transform .2s ease',
        '&:hover': { transform: 'scale(1.05)' }
      }}>
      <CardMedia
        component='img'
        alt='Movie image'
        sx={{
          height: 280
        }}
        image={props.imageUrl}
      />
      <CardContent
        sx={{
          paddingLeft: '0px',
          paddingRight: '0px',
          overflow: 'hidden'
        }}>
        <Typography>{props.title}</Typography>
      </CardContent>
    </Card>
  );
}
