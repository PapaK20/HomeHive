import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border } from "../Constants/Styles";
import { Color } from "@/Constants/Colors";

const StartStep1 = () => {
  return (
    <View style={styles.startStep2}>
      <Text style={[styles.stStepComplete, styles.finishUpTypo]}>
        1st Step complete!
      </Text>
      <Text style={[styles.makeItStand, styles.finishUpTypo]}>
        Make it stand out
      </Text>
      <Text style={[styles.finishUp, styles.finishUpTypo]}>Finish up</Text>
      <Text style={[styles.tellUsAbout, styles.stepTypo]}>
        Tell us about your Hive so you can startpublishing your place
      </Text>
      <Text
        style={[styles.photosShortDescription, styles.rectangleViewPosition]}
      >
        Photos, short description, title
      </Text>
      <Text style={[styles.setPriceBooking, styles.rectangleViewPosition]}>
        Set price, booking settings, etc
      </Text>
      <Text style={[styles.step2, styles.stepTypo]}>STEP 2</Text>
      <Text style={[styles.step3, styles.stepTypo]}>STEP 3</Text>
      <Text style={[styles.change, styles.changeTypo]}>CHANGE</Text>
      <Image
        style={styles.startStep2Child}
        contentFit="cover"
        source={require("../assets/ellipse-147.png")}
      />
      <Image
        style={styles.doneLightIcon}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
      <View style={[styles.startStep2Item, styles.startLayout]} />
      <View style={[styles.startStep2Inner, styles.startLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.continue, styles.changeTypo]}>CONTINUE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  finishUpTypo: {
    textAlign: "left",
    fontFamily: 'mon-b',
    lineHeight: 48,
    letterSpacing: 0,
    fontSize: FontSize.size_13xl,
    left: 30,
    position: "absolute",
  },
  stepTypo: {
    fontFamily: 'mon-b',
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  rectangleViewPosition: {
    left: 32,
    position: "absolute",
  },
  changeTypo: {
    textAlign: "center",
    fontFamily: 'mon-b',
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  startLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  stStepComplete: {
    top: 90,
    color: Color.colorGray_500,
  },
  makeItStand: {
    top: 346,
    color: Color.colorGray_500,
  },
  finishUp: {
    top: 620,
    color: Color.colorGray_200,
  },
  tellUsAbout: {
    top: 156,
    color: Color.colorGray_200,
    left: 30,
    position: "absolute",
  },
  photosShortDescription: {
    top: 399,
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  setPriceBooking: {
    top: 673,
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_200,
  },
  step2: {
    top: 307,
    color: Color.colorGray_200,
    left: 30,
    position: "absolute",
  },
  step3: {
    top: 581,
    color: Color.colorGray_200,
    left: 30,
    position: "absolute",
  },
  change: {
    top: 216,
    color: Color.colorDarkslategray_400,
    left: 30,
  },
  startStep2Child: {
    top: 194,
    left: 317,
    width: 43,
    height: 43,
    position: "absolute",
  },
  doneLightIcon: {
    top: 204,
    left: 327,
    width: 24,
    height: 24,
    position: "absolute",
  },
  startStep2Item: {
    top: 280,
  },
  startStep2Inner: {
    top: 554,
  },
  rectangleView: {
    top: 437,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 139,
    height: 48,
  },
  continue: {
    height: "2.46%",
    width: "20.29%",
    top: "50.22%",
    left: "14.25%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  startStep2: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default StartStep1;
