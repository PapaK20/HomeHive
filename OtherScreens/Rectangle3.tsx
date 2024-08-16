import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../Constants/GlobalStyles";

const Rectangle3 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 355,
    height: 56,
  },
});

export default Rectangle3;
