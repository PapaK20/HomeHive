import * as React from "react";
import { StyleSheet, View } from "react-native";

const Line = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: "#ebe8e8",
    borderTopWidth: 1,
    width: 415,
    height: 1,
  },
});

export default Line;
