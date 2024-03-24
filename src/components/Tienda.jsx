import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";

const Tienda = ({ tienda }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {tienda.nombre}
      </Typography>
      <Typography variant="body1">{tienda.descripcion}</Typography>
      <Grid container spacing={3}>
        {tienda.productos.map((producto) => (
          <Grid item key={producto.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">{producto.nombre}</Typography>
                <Typography variant="body2" color="textSecondary">{producto.descripcion}</Typography>
                <Button variant="contained" color="primary">
                  Ver Producto
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tienda;