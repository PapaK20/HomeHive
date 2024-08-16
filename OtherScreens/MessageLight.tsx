import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../Constants/GlobalStyles";

const MessageLight = () => {
  return (
    <View style={styles.messageLight}>
      <View style={[styles.messageLightChild, styles.messageLayout]} />
      <Image
        style={[styles.messageLightItem, styles.messageLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageLightChild: {
    height: "52.5%",
    width: "69.25%",
    top: "23.75%",
    right: "15.25%",
    bottom: "23.75%",
    left: "15.5%",
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
  },
  messageLightItem: {
    height: "16.75%",
    width: "66.75%",
    top: "37.5%",
    right: "16.5%",
    bottom: "45.75%",
    left: "16.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  messageLight: {
    top: 726,
    left: 35,
    width: 40,
    height: 40,
    position: "absolute",
  },
});

export default MessageLight;
