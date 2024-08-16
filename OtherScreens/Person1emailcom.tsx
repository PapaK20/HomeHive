import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Person1emailcom = () => {
  return <Text style={styles.person1emailcom}>person1@email.com</Text>;
};

const styles = StyleSheet.create({
  person1emailcom: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    color: Color.colorDimgray_500,
    textAlign: "center",
  },
});

export default Person1emailcom;
