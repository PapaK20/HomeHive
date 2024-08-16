import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const ReadyingReservation = () => {
  return (
    <View style={styles.readyingReservation}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.wereReadyingYour}>
        We’re readying your reservation
      </Text>
      <Image
        style={styles.basicHome}
        contentFit="cover"
        source={require("../assets/24--basic--home.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    top: 0,
    left: -106,
    width: 626,
    position: "absolute",
    height: 896,
  },
  wereReadyingYour: {
    top: "49.89%",
    left: "11.35%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  basicHome: {
    height: "7.25%",
    width: "15.7%",
    top: "39.62%",
    right: "42.27%",
    bottom: "53.13%",
    left: "42.03%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  readyingReservation: {
    backgroundColor: Color.colorWhite,
    width: 414,
    overflow: "hidden",
    height: 896,
  },
});

export default ReadyingReservation;
