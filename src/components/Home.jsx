import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Bienvenido a tu Galería de E-commerce
      </Typography>
      <Button variant="contained" color="primary">
        Ver Tiendas
      </Button>
      {/* Otros elementos de la página */}
    </Container>
  );
};

export default Home;
  