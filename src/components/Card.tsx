import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  titulo: string;
  children: React.ReactNode;
  backgroundColor?: string;
  colorText?: string;
};

export default function Card(props: CardProps) {
  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: props.backgroundColor || "#FFF" },
        ]}
      >
        <Text style={{ color: props.colorText || "#000" }}>{props.titulo}</Text>
        {props.children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "95%",
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
});
