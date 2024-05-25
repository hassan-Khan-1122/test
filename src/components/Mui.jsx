import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Mui() {
  return (
     <>
    {/* <h1 className='text-center mt-4 text-4xl'>This is a MUi Card in React</h1> */}

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=  "https://picsum.photos/300"
      classname = "ml-[20px]" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of species which are in 60,000 in all over the paksitan
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </>
  )
}


