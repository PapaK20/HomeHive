import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const AddEmailAddress = () => {
  return <Text style={styles.addEmailAddress}>Add email address</Text>;
};

const styles = StyleSheet.create({
  addEmailAddress: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    color: Color.colorGray_200,
    textAlign: "center",
  },
});

export default AddEmailAddress;
