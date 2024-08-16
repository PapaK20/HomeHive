import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const CONFIRMANDPAY1 = () => {
  return <Text style={styles.confirmAndPay}>CONFIRM AND PAY</Text>;
};

const styles = StyleSheet.create({
  confirmAndPay: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default CONFIRMANDPAY1;
