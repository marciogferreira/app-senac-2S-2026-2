import Card from "@/components/Card";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthContext } from "./_layout";

export default function Login() {
  const navigate = useRouter();
  const { setTaLogado } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [ocultaSenha, setOcultaSenha] = useState(true);

  function toggleOcultaSenha() {
    setOcultaSenha(!ocultaSenha);
  }

  function submitLogin() {
    if (login === "admin" && senha === "admin") {
      setTaLogado(true);
      navigate.push("/dashboard");
      alert("Login realizado com sucesso!");
    } else {
      alert("Login ou senha incorretos!");
    }
  }

  // useState?

  // useEffect?
  // 1 Missao do useEffect: Executar quando o componente for montado (exibido na tela).
  useEffect(() => {
    console.log("Componente Montado");
  }, []);
  // 2 Missao do useEffect: Executar quando o componente for atualizado (quando o estado mudar).
  useEffect(() => {
    console.log("Alterando Senha: ", senha);
  }, [senha]);
  // 3 Missao do useEffect: Executar quando o componente for desmontado (removido da tela).
  useEffect(() => {
    return () => {
      console.log("Componente Desmontado");
    };
  }, []);
  // contextAPI?

  return (
    <>
      <View style={styles.container}>
        <Card titulo="Tela de Acesso" backgroundColor="white">
          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Login - {login}</Text>
            <TextInput
              value={login}
              onChangeText={(value) => setLogin(value)}
              style={styles.input}
            />
            <Text>Senha - {senha}</Text>
            <TextInput
              secureTextEntry={ocultaSenha}
              value={senha}
              onChangeText={(value) => setSenha(value)}
              style={styles.input}
            />
            <Button title="Acessar" onPress={submitLogin} />
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ececec",
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
