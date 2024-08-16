import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step3Hosting = () => {
  return (
    <View style={styles.step3Hosting}>
      <Text
        style={styles.successfulHostingStarts}
      >{`Successful hosting starts with
an accurate calendar`}</Text>
      <Text
        style={[styles.guestsWillBook, styles.guestsClr]}
      >{`Guests will book available days instantly 
only if you make them available. For this
reason, only get booked when you can host
by keeping your calendar and availability
settings up-to-date.`}</Text>
      <Text
        style={[styles.cancelingDisruptsGuests, styles.guestsClr]}
      >{`Canceling disrupts guests’ plans. If you 
cancel because your calendar is
inaccurate, you will be charged a penalty
fee and the dates won’t be available for
anyone else to book.`}</Text>
      <View style={[styles.step3HostingChild, styles.step3Border]} />
      <Text style={[styles.gotItIll, styles.guestsClr]}>
        Got it! I’ll keep my calendar up to date.
      </Text>
      <View style={[styles.step3HostingItem, styles.step3Border]} />
      <View style={styles.step3HostingInner} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guestsClr: {
    color: Color.colorDarkslategray_500,
    textAlign: "left",
    position: "absolute",
  },
  step3Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  backTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  successfulHostingStarts: {
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 20,
    position: "absolute",
  },
  guestsWillBook: {
    top: 199,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    left: 24,
    color: Color.colorDarkslategray_500,
  },
  cancelingDisruptsGuests: {
    top: 341,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    left: 24,
    color: Color.colorDarkslategray_500,
  },
  step3HostingChild: {
    top: 498,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 16,
    height: 16,
    left: 20,
    backgroundColor: Color.colorWhite,
  },
  gotItIll: {
    top: 494,
    left: 53,
    fontSize: FontSize.size_mini,
    lineHeight: 23,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  step3HostingItem: {
    top: 785,
    left: 4,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
  },
  step3HostingInner: {
    top: 820,
    left: 265,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 838,
    left: 55,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 836,
    width: 24,
    height: 24,
    left: 20,
    position: "absolute",
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.19%",
    left: "70.05%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Hosting: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step3Hosting;
