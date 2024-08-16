import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Person4emailcom = () => {
  return <Text style={styles.person4emailcom}>person4@email.com</Text>;
};

const styles = StyleSheet.create({
  person4emailcom: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    color: Color.colorDimgray_500,
    textAlign: "center",
  },
});

export default Person4emailcom;
