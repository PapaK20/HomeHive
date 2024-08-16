import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../Constants/GlobalStyles";

const Step3Bonus = () => {
  return (
    <View style={styles.step3Bonus}>
      <View style={styles.step3BonusChild} />
      <Text style={styles.somethingSpecialFor}>{`Something special for your
first guests`}</Text>
      <Text style={[styles.offer20Off, styles.dontAddATypo]}>
        Offer 20% off to your first guests
      </Text>
      <Text style={[styles.dontAddA, styles.dontAddATypo]}>
        Don’t add a special offer
      </Text>
      <Text
        style={[styles.theFirst3, styles.theFirst3Typo]}
      >{`The first 3 guests who book your place will
het 20% off the price. This special offer
can attract new guests, and help you get
the reviews you need for a star rating`}</Text>
      <Text
        style={[styles.onceYouPublish, styles.theFirst3Typo]}
      >{`Once you publish your listing, you won’t be
able to add this offer.`}</Text>
      <Text style={styles.recommended}>RECOMMENDED</Text>
      <View style={[styles.step3BonusItem, styles.lineViewLayout]} />
      <View style={styles.step3BonusInner} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.lineViewPosition]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-158.png")}
      />
      <Image
        style={[styles.step3BonusChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-158.png")}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dontAddATypo: {
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 31,
    position: "absolute",
  },
  theFirst3Typo: {
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 31,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  backTypo: {
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  lineViewPosition: {
    left: 16,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 22,
    width: 22,
    left: 369,
    position: "absolute",
  },
  step3BonusChild: {
    left: 29,
    backgroundColor: "#f5ecec",
    width: 119,
    height: 20,
    top: 257,
    position: "absolute",
  },
  somethingSpecialFor: {
    top: 92,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 31,
    position: "absolute",
  },
  offer20Off: {
    top: 234,
  },
  dontAddA: {
    top: 425,
  },
  theFirst3: {
    top: 273,
  },
  onceYouPublish: {
    top: 448,
  },
  recommended: {
    left: 34,
    color: Color.colorGray_600,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    top: 257,
    position: "absolute",
  },
  step3BonusItem: {
    top: 791,
    left: 0,
    borderColor: Color.colorLightgray_100,
    width: 415,
    position: "absolute",
  },
  step3BonusInner: {
    top: 826,
    left: 261,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 844,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 842,
    width: 24,
    height: 24,
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.86%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon: {
    top: 240,
  },
  step3BonusChild1: {
    top: 431,
  },
  lineView: {
    top: 388,
    borderColor: "#e5d3d3",
    width: 392,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  step3Bonus: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default Step3Bonus;
