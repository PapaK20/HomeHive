import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Person3emailcom = () => {
  return <Text style={styles.person3emailcom}>person3@email.com</Text>;
};

const styles = StyleSheet.create({
  person3emailcom: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    color: Color.colorDimgray_500,
    textAlign: "center",
  },
});

export default Person3emailcom;
