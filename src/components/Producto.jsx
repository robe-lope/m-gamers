import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Producto = ({ producto }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {producto.nombre}
      </Typography>
      <Typography variant="body1">{producto.descripcion}</Typography>
      <Typography variant="h6">Precio: ${producto.precio}</Typography>
      <Button variant="contained" color="primary">
        Agregar al Carrito
      </Button>
    </Container>
  );
};

export default Producto;