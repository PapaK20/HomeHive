import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const SUBMIT = () => {
  return <Text style={styles.submit}>SUBMIT</Text>;
};

const styles = StyleSheet.create({
  submit: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 18,
    textTransform: "uppercase",
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 261,
    height: 24,
  },
});

export default SUBMIT;
