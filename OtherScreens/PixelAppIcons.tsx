import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const PixelAppIcons = () => {
  return (
    <View style={styles.pixelAppIcons}>
      <Image
        style={[styles.pixelBackgroundIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pixel-background.png")}
      />
      <Image
        style={[styles.iconLayer, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlayer.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pixelBackgroundIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconLayer: {
    height: "70.69%",
    width: "70.69%",
    top: "14.48%",
    right: "14.83%",
    bottom: "14.83%",
    left: "14.48%",
  },
  pixelAppIcons: {
    width: 29,
    height: 29,
    overflow: "hidden",
  },
});

export default PixelAppIcons;
