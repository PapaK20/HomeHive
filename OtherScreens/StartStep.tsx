import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const StartStep = () => {
  return (
    <View style={styles.startStep3}>
      <Text style={styles.finalStep}>Final step!</Text>
      <Text style={styles.finishUp}>Finish up</Text>
      <Text style={[styles.tellUsAbout, styles.tellUsAboutTypo]}>
        Tell us about your Hive so you can start publishing your place
      </Text>
      <Text
        style={[styles.photosShortDescription, styles.rectangleViewPosition]}
      >
        Photos, short description, title
      </Text>
      <Text style={[styles.setPriceBooking, styles.rectangleViewPosition]}>
        Set price, booking settings, etc
      </Text>
      <Text style={[styles.step3, styles.step3Typo]}>STEP 3</Text>
      <Text style={[styles.change, styles.changeTypo]}>CHANGE</Text>
      <Text style={[styles.change1, styles.changeTypo]}>CHANGE</Text>
      <Image
        style={[styles.startStep3Child, styles.startLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-147.png")}
      />
      <Image
        style={[styles.startStep3Item, styles.startLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-147.png")}
      />
      <Image
        style={[styles.doneLightIcon, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
      <Image
        style={[styles.doneLightIcon1, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
      <View style={[styles.startStep3Inner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.continue, styles.changeTypo]}>CONTINUE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tellUsAboutTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  rectangleViewPosition: {
    left: 32,
    position: "absolute",
  },
  step3Typo: {
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
  },
  changeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  startLayout: {
    height: 43,
    width: 43,
    left: 317,
    position: "absolute",
  },
  doneIconLayout: {
    height: 24,
    width: 24,
    left: 327,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorMistyrose,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  finalStep: {
    top: 90,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    lineHeight: 48,
    letterSpacing: 0,
    fontSize: FontSize.size_13xl,
    left: 30,
    position: "absolute",
  },
  finishUp: {
    top: 590,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    lineHeight: 48,
    letterSpacing: 0,
    fontSize: FontSize.size_13xl,
    left: 30,
    position: "absolute",
  },
  tellUsAbout: {
    top: 156,
    left: 30,
    position: "absolute",
  },
  photosShortDescription: {
    top: 361,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  setPriceBooking: {
    top: 643,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
  },
  step3: {
    top: 551,
    left: 30,
    position: "absolute",
  },
  change: {
    top: 216,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    left: 30,
  },
  change1: {
    top: 400,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    left: 30,
  },
  startStep3Child: {
    top: 194,
  },
  startStep3Item: {
    top: 372,
  },
  doneLightIcon: {
    top: 204,
  },
  doneLightIcon1: {
    top: 382,
  },
  startStep3Inner: {
    top: 280,
  },
  lineView: {
    top: 499,
  },
  rectangleView: {
    top: 691,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 139,
    height: 48,
  },
  continue: {
    height: "2.46%",
    width: "20.29%",
    top: "78.57%",
    left: "14.25%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  startStep3: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default StartStep;
