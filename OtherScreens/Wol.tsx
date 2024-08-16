import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Wol = () => {
  return <Text style={styles.wol}>Wol</Text>;
};

const styles = StyleSheet.create({
  wol: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Wol;
