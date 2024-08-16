import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const LastStepShareYourReservation = () => {
  return (
    <Text style={styles.lastStepShare}>Last step: share your reservation</Text>
  );
};

const styles = StyleSheet.create({
  lastStepShare: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
});

export default LastStepShareYourReservation;
