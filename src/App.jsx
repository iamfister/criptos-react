import styled from "@emotion/styled";
import "./App.css";
import ImagenCripto from './assets/img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
`;

function App() {
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto}/>
        <Heading>Hola</Heading>
      </Contenedor>
    </>
  );
}

export default App;
