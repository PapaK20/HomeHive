import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../Constants/GlobalStyles";

const Step2PhotoOfHost = () => {
  return (
    <View style={styles.step2PhotoOfHost}>
      <Text style={styles.addYourPhoto}>Add your photo</Text>
      <Image
        style={styles.step2PhotoOfHostChild}
        contentFit="cover"
        source={require("../assets/ellipse-157.png")}
      />
      <View style={[styles.step2PhotoOfHostItem, styles.rectangleViewLayout]} />
      <Text style={[styles.uploadPhoto, styles.nextTypo]}>Upload photo</Text>
      <Image
        style={[styles.uploadIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/upload.png")}
      />
      <Text style={[styles.useCurrentHomehive, styles.backTypo]}>
        Use current HOMEHIVE photo
      </Text>
      <View style={styles.step2PhotoOfHostInner} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <View style={[styles.step2PhotoOfHostChild1, styles.step2ChildLayout]} />
      <View style={[styles.step2PhotoOfHostChild2, styles.step2ChildLayout]} />
      <View style={[styles.step2PhotoOfHostChild3, styles.step2ChildLayout]} />
      <View style={[styles.step2PhotoOfHostChild4, styles.step2ChildLayout]} />
      <View style={[styles.step2PhotoOfHostChild5, styles.step2ChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 56,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  nextTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "2.9%",
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
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
  step2ChildLayout: {
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addYourPhoto: {
    top: 92,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    textAlign: "left",
    color: Color.colorGray_500,
    letterSpacing: 0,
    left: 22,
    position: "absolute",
  },
  step2PhotoOfHostChild: {
    top: 152,
    width: 162,
    height: 162,
    left: 22,
    position: "absolute",
  },
  step2PhotoOfHostItem: {
    top: 342,
    borderColor: Color.colorGray_200,
    width: 226,
    borderWidth: 1,
    height: 56,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 26,
    backgroundColor: Color.colorWhite,
  },
  uploadPhoto: {
    width: "33.09%",
    top: "39.84%",
    left: "16.91%",
    color: Color.colorGray_500,
  },
  uploadIcon: {
    top: 358,
    left: 38,
  },
  useCurrentHomehive: {
    top: 410,
    color: Color.colorDarkslategray_100,
    left: 26,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
  },
  step2PhotoOfHostInner: {
    top: 768,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 803,
    left: 261,
    width: 130,
    backgroundColor: Color.colorDarkslategray_400,
    height: 56,
    borderRadius: Border.br_5xs,
  },
  back: {
    top: 821,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 819,
    left: 16,
  },
  next: {
    width: "19.08%",
    top: "91.29%",
    left: "69.08%",
    color: Color.colorWhite,
  },
  step2PhotoOfHostChild1: {
    backgroundColor: Color.colorDarkslategray_400,
    left: 0,
  },
  step2PhotoOfHostChild2: {
    left: 83,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2PhotoOfHostChild3: {
    left: 165,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2PhotoOfHostChild4: {
    left: 248,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoOfHostChild5: {
    left: 331,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoOfHost: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2PhotoOfHost;
