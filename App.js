import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Routes from "./src/Router.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" translucent={true} />
      <Routes />
    </>
  );
}
