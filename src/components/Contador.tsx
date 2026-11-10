import { useState } from "react";
import { Button, Text } from "react-native";

export default function Contador() {
  //   let contador = 0;
  const [contador, setContador] = useState(0);

  function incrementar() {
    // contador++
    setContador(contador + 1);
  }

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <Text>Contador</Text>
      <Text>{contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
    </>
  );
}
