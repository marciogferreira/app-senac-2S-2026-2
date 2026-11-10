import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  taLogado: false,
  setTaLogado: (value: boolean) => {},
});

export default function RootLayout() {
  const [taLogado, setTaLogado] = useState(false);

  return (
    <AuthContext.Provider value={{ taLogado, setTaLogado }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "AppSenac", headerShown: false }}
        />
        <Stack.Screen
          name="login"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="dashboard"
          options={{ title: "Dashboard", headerShown: false }}
        />
      </Stack>
    </AuthContext.Provider>
  );
}
