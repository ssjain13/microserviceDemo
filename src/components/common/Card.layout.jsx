import { Card, CardActions, CardContent, Fab, Typography } from '@mui/material';
import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from 'react-router-dom';

export const CardLayout = (props) => {
    const navigate = useNavigate();
  return (
    <Card sx={{ width: 270, margin: "1em" }}>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {props.data.name}
      </Typography>

      {props.fields.map((f) => (
        <Typography variant="body2" color="text.secondary">
          {f}:{props.data[f]}
        </Typography>
      ))}
    </CardContent>

    <CardActions>
      <Fab
        color="info"
        aria-label="edit"
        size="small"
        onClick={() => {
          navigate("/update", {
            state: { toBeUpdated: props.data },
          });
        }}
      >
        <EditIcon />
      </Fab>
    </CardActions>
  </Card>
  )
}
