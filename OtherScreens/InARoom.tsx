import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const InARoom = () => {
  return <Text style={styles.inARoom}>{`2 in a room `}</Text>;
};

const styles = StyleSheet.create({
  inARoom: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorDimgray_600,
    textAlign: "left",
    width: 155,
  },
});

export default InARoom;
