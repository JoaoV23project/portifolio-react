import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} //Mostra o caminho ou arquivo que está, não sei ao certo
      />
      <Stack.Screen
        name="IMC"
        options={{ headerShown: false }} //Mostra o caminho ou arquivo que está, não sei ao certo
      />
    </Stack>
  );
}