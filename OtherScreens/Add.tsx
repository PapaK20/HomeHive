import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const Add = () => {
  return <Text style={styles.add}>Add</Text>;
};

const styles = StyleSheet.create({
  add: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Add;
