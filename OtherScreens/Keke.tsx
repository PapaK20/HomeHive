import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Keke = () => {
  return <Text style={styles.keke}>Keke</Text>;
};

const styles = StyleSheet.create({
  keke: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    color: Color.colorGray_200,
    textAlign: "left",
  },
});

export default Keke;
