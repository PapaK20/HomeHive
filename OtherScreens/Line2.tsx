import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../Constants/GlobalStyles";

const Line2 = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
  },
});

export default Line2;
