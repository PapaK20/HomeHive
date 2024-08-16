import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Hosthive = () => {
  return (
    <View style={styles.hosthive}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/0-9.png")}
      />
      <Text style={styles.host}>Host</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 317,
    left: 0,
    height: 160,
    position: "absolute",
    width: 443,
  },
  host: {
    top: 448,
    left: 145,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 143,
    height: 36,
    position: "absolute",
  },
  hosthive: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 896,
    overflow: "hidden",
    width: 443,
  },
});

export default Hosthive;
