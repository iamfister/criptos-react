import styled from "@emotion/styled";

// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

// eslint-disable-next-line react-refresh/only-export-components
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 14px;
`;

const useSelectMonedas = (label, opciones) => {
  console.log(opciones);
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value="">Seleccione</option>

        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [SelectMonedas];
};

export default useSelectMonedas;