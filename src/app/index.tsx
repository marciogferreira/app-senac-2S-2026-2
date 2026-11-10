import Card from "@/components/Card";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigate = useRouter();

  function navigateToLogin() {
    // navigate.push("/login");
    navigate.replace("/login");
  }

  return (
    <View style={styles.container}>
      <Card titulo="Seja Bem-vindo!">
        <Text>Este App é do SENAC</Text>
      </Card>

      <Card titulo="Totalizadores:" backgroundColor="green" colorText="white">
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: "#FFF" }}>R$ 150.164,00</Text>
        </View>
      </Card>

      <Button title="Abrir dashboard" onPress={() => navigate.push("/dashboard")} />
      <Button title="Login" onPress={navigateToLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ececec",
  },
});
