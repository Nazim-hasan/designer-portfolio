import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import fontBold from "./assets/fonts/PlusJakartaSansBold.ttf";
import fontRegular from "./assets/fonts/PlusJakartaSansRegular.ttf";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native";
import { colors } from "./app/theme/colors";
import DesignerPortfolio from "./app/screens/DesignerPortfolio";
import { ScrollView } from "react-native";
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      PlusJakartaSansBold: fontBold,
      PlusJakartaSansRegular: fontRegular,
    });
    setFontLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);

  return fontLoaded ? (
    <SafeAreaView
      style={[
        Platform.OS === "android" && { marginTop: 20 },
        { flex: 1, backgroundColor: colors.white },
      ]}
    >
      <StatusBar style="dark" />
      <ScrollView>
        <DesignerPortfolio />
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "PlusJakartaSansBold",
  },
});
