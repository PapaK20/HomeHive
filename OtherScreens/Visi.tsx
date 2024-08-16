import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Visi = () => {
  return <Text style={styles.visi}>Visi</Text>;
};

const styles = StyleSheet.create({
  visi: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Visi;
