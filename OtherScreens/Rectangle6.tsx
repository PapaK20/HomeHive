import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../Constants/GlobalStyles";

const Rectangle6 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorOrange_100,
    width: 355,
    height: 56,
  },
});

export default Rectangle6;
