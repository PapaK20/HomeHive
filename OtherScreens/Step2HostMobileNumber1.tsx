import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../Constants/GlobalStyles";

const Step2HostMobileNumber1 = () => {
  return (
    <View style={styles.step2HostMobileNumber}>
      <Text style={styles.addYourMobile}>Add your mobile number</Text>
      <Text style={styles.canStudentsUse}>
        Can students use this number to get in touch with you?
      </Text>
      <Text
        style={styles.wellSendYou}
      >{`We’ll send you booking requests, reminders, and other notifications. This number should be 
able to receive texts or calls`}</Text>
      <Text style={styles.text}>+233 020 000 0000</Text>
      <Text style={[styles.verified, styles.backTypo]}>VERIFIED</Text>
      <View style={styles.step2HostMobileNumberChild} />
      <View style={styles.step2HostMobileNumberItem} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.finish, styles.backTypo]}>FINISH</Text>
      <Image
        style={[styles.doneLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <Text style={[styles.yesStudentsCan, styles.noAddAnotherTypo]}>
        Yes, students can use this number
      </Text>
      <Text style={[styles.noAddAnother, styles.noAddAnotherTypo]}>
        No, add another number for students
      </Text>
      <Image
        style={[styles.step2HostMobileNumberInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-145.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-145.png")}
      />
      <View style={[styles.rectangleView, styles.step2ChildLayout]} />
      <View
        style={[styles.step2HostMobileNumberChild1, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2HostMobileNumberChild2, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2HostMobileNumberChild3, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2HostMobileNumberChild4, styles.step2ChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  lightIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  noAddAnotherTypo: {
    left: 54,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 18,
    width: 18,
    left: 22,
    position: "absolute",
  },
  step2ChildLayout: {
    height: 14,
    width: 83,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    borderStyle: "solid",
    position: "absolute",
  },
  addYourMobile: {
    top: 92,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  canStudentsUse: {
    top: 337,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  wellSendYou: {
    top: 152,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  text: {
    top: 251,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    textAlign: "center",
    color: Color.colorGray_200,
    left: 22,
    position: "absolute",
  },
  verified: {
    top: 289,
    left: 62,
    fontSize: FontSize.size_sm,
    color: Color.colorCadetblue_100,
  },
  step2HostMobileNumberChild: {
    top: 770,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  step2HostMobileNumberItem: {
    top: 805,
    left: 261,
    borderRadius: Border.br_5xs,
    width: 130,
    height: 56,
    backgroundColor: Color.colorDarkslategray_400,
    position: "absolute",
  },
  back: {
    top: 823,
    left: 51,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  expandLeftLightIcon: {
    top: 821,
    left: 16,
  },
  finish: {
    height: "2.9%",
    width: "19.08%",
    top: "91.52%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  doneLightIcon: {
    top: 286,
    left: 31,
  },
  yesStudentsCan: {
    top: 397,
  },
  noAddAnother: {
    top: 433,
  },
  step2HostMobileNumberInner: {
    top: 400,
  },
  ellipseIcon: {
    top: 436,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslategray_400,
    left: 0,
    height: 14,
    width: 83,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2HostMobileNumberChild1: {
    left: 83,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2HostMobileNumberChild2: {
    left: 165,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2HostMobileNumberChild3: {
    left: 248,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2HostMobileNumberChild4: {
    left: 331,
    backgroundColor: Color.colorWhite,
  },
  step2HostMobileNumber: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2HostMobileNumber1;
