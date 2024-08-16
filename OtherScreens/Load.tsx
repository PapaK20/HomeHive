import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../Constants/GlobalStyles";

const Load = () => {
  return (
    <View style={styles.load}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/0-8.png")}
      />
      <Text style={styles.liveStudythrive}>LIVE, STUDY,THRIVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 289,
    left: 48,
    width: 373,
    height: 154,
    position: "absolute",
  },
  liveStudythrive: {
    top: 413,
    left: 168,
    fontSize: 12,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 133,
    height: 21,
    position: "absolute",
  },
  load: {
    backgroundColor: "#fbbc04",
    width: 468,
    height: 886,
    overflow: "hidden",
  },
});

export default Load;
