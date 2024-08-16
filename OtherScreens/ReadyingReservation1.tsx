import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../Constants/GlobalStyles";

const ReadyingReservation1 = () => {
  return (
    <View style={styles.readyingReservation}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.reviewingPaymentDetails}>
        Reviewing payment details
      </Text>
      <Image
        style={styles.moneyDuotoneLineIcon}
        contentFit="cover"
        source={require("../assets/money-duotone-line.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    top: 0,
    left: -106,
    width: 626,
    position: "absolute",
    height: 896,
  },
  reviewingPaymentDetails: {
    top: "49.89%",
    left: "17.39%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  moneyDuotoneLineIcon: {
    top: 345,
    left: 167,
    width: 80,
    height: 80,
    position: "absolute",
  },
  readyingReservation: {
    backgroundColor: Color.colorWhite,
    width: 414,
    overflow: "hidden",
    height: 896,
  },
});

export default ReadyingReservation1;
