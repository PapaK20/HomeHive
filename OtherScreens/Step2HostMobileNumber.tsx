import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../Constants/GlobalStyles";

const Step2HostMobileNumber = () => {
  return (
    <View style={styles.step2HostMobileNumber}>
      <Text style={styles.addYourMobile}>Add your mobile number</Text>
      <Text
        style={styles.wellSendYou}
      >{`We’ll send you booking requests, reminders, and other notifications. This number should be 
able to receive texts or calls`}</Text>
      <View style={[styles.step2HostMobileNumberChild, styles.step2Layout]} />
      <View style={[styles.step2HostMobileNumberItem, styles.step2Layout]} />
      <Text style={styles.countryregion}>Country/Region</Text>
      <Text style={[styles.ghana233, styles.textTypo]}>Ghana(+233)</Text>
      <Text style={[styles.text, styles.textTypo]}>+233</Text>
      <Image
        style={[styles.lockLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/lock-light.png")}
      />
      <Text style={[styles.verify, styles.backTypo]}>VERIFY</Text>
      <View style={styles.step2HostMobileNumberInner} />
      <View style={styles.rectangleView} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={styles.finish}>FINISH</Text>
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
      <View
        style={[styles.step2HostMobileNumberChild5, styles.step2ChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  step2Layout: {
    height: 69,
    width: 355,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 35,
    color: Color.colorGray_200,
    position: "absolute",
  },
  lightIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  backTypo: {
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  step2ChildLayout: {
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addYourMobile: {
    top: 92,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  wellSendYou: {
    top: 152,
    lineHeight: 24,
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  step2HostMobileNumberChild: {
    top: 245,
  },
  step2HostMobileNumberItem: {
    top: 335,
  },
  countryregion: {
    top: 250,
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 35,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    position: "absolute",
  },
  ghana233: {
    top: 274,
  },
  text: {
    top: 357,
  },
  lockLightIcon: {
    top: 268,
    left: 339,
  },
  verify: {
    top: 361,
    left: 318,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_400,
  },
  step2HostMobileNumberInner: {
    top: 770,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 805,
    left: 261,
    backgroundColor: "#70adb8",
    width: 130,
    height: 56,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  back: {
    top: 823,
    left: 51,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_base,
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
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  step2HostMobileNumberChild1: {
    backgroundColor: Color.colorDarkslategray_400,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    left: 0,
  },
  step2HostMobileNumberChild2: {
    left: 83,
    backgroundColor: Color.colorDarkslategray_400,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2HostMobileNumberChild3: {
    left: 165,
    backgroundColor: Color.colorDarkslategray_400,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2HostMobileNumberChild4: {
    left: 248,
    backgroundColor: Color.colorDarkslategray_400,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2HostMobileNumberChild5: {
    left: 331,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    backgroundColor: Color.colorWhite,
  },
  step2HostMobileNumber: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2HostMobileNumber;
