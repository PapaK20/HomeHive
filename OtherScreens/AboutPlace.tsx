import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const AboutPlace = () => {
  return (
    <View style={styles.aboutPlace2}>
      <View style={[styles.aboutPlace2Child, styles.aboutLayout]} />
      <View style={[styles.aboutPlace2Item, styles.aboutLayout]} />
      <View style={[styles.aboutPlace2Inner, styles.aboutLayout]} />
      <Text style={styles.whatAmenitiesDo}>What amenities do you offer?</Text>
      <Text
        style={[styles.thisIsImportant, styles.tvTypo]}
      >{`This is important for process. Please check
the boxes that apply and dont accidentally
choose something you don’t have`}</Text>
      <Text style={[styles.essentials, styles.tvTypo]}>Essentials</Text>
      <Text style={[styles.airConditioning, styles.tvTypo]}>
        Air conditioning
      </Text>
      <Text style={[styles.heat, styles.tvTypo]}>Heat</Text>
      <Text style={[styles.closetdrawers, styles.tvTypo]}>Closet/drawers</Text>
      <Text style={[styles.tv, styles.tvTypo]}>TV</Text>
      <Text style={[styles.fridge, styles.tvTypo]}>Fridge</Text>
      <Text style={[styles.roomDesks, styles.tvTypo]}>Room desks</Text>
      <Text style={[styles.towelsBedSheets, styles.tvTypo]}>
        Towels, bed sheets, pillows, etc
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.aboutPlace2Child1, styles.lineViewLayout]} />
      <View style={[styles.aboutPlace2Child2, styles.aboutChildPosition]} />
      <View style={[styles.aboutPlace2Child3, styles.aboutChildPosition]} />
      <View style={[styles.aboutPlace2Child4, styles.aboutChildPosition]} />
      <View style={[styles.aboutPlace2Child5, styles.aboutChildPosition]} />
      <View style={[styles.aboutPlace2Child6, styles.aboutChildPosition]} />
      <Image
        style={[styles.ellipseIcon, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-147.png")}
      />
      <Image
        style={[styles.aboutPlace2Child7, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-147.png")}
      />
      <Image
        style={[styles.aboutPlace2Child8, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-149.png")}
      />
      <Image
        style={[styles.aboutPlace2Child9, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-149.png")}
      />
      <Image
        style={[styles.aboutPlace2Child10, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-149.png")}
      />
      <Image
        style={[styles.aboutPlace2Child11, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-149.png")}
      />
      <Image
        style={[styles.aboutPlace2Child12, styles.aboutChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-149.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Text style={[styles.exit, styles.backTypo]}>EXIT</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>NEXT</Text>
      <Image
        style={[styles.doneLightIcon, styles.doneIconPosition]}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
      <Image
        style={[styles.doneLightIcon1, styles.doneIconPosition]}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutLayout: {
    height: 14,
    width: 140,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_400,
    borderStyle: "solid",
    top: 92,
    position: "absolute",
  },
  tvTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 22,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    left: -2,
    borderStyle: "solid",
    position: "absolute",
  },
  aboutChildPosition: {
    left: 0,
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  aboutChildLayout: {
    height: 43,
    width: 43,
    left: 355,
    position: "absolute",
  },
  backTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  doneIconPosition: {
    left: 365,
    height: 24,
    width: 24,
    position: "absolute",
  },
  aboutPlace2Child: {
    left: -3,
    backgroundColor: Color.colorDarkslategray_400,
  },
  aboutPlace2Item: {
    left: 137,
    backgroundColor: Color.colorDarkslategray_400,
  },
  aboutPlace2Inner: {
    left: 277,
    backgroundColor: Color.colorWhite,
  },
  whatAmenitiesDo: {
    top: 162,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
    left: 22,
    position: "absolute",
  },
  thisIsImportant: {
    top: 206,
  },
  essentials: {
    top: 314,
  },
  airConditioning: {
    top: 436,
  },
  heat: {
    top: 538,
  },
  closetdrawers: {
    top: 640,
  },
  tv: {
    top: 742,
  },
  fridge: {
    top: 844,
  },
  roomDesks: {
    top: 946,
  },
  towelsBedSheets: {
    top: 348,
  },
  lineView: {
    top: 400,
  },
  aboutPlace2Child1: {
    top: 502,
  },
  aboutPlace2Child2: {
    top: 604,
  },
  aboutPlace2Child3: {
    top: 706,
  },
  aboutPlace2Child4: {
    top: 808,
  },
  aboutPlace2Child5: {
    top: 910,
  },
  aboutPlace2Child6: {
    top: 1012,
  },
  ellipseIcon: {
    top: 333,
  },
  aboutPlace2Child7: {
    top: 426,
  },
  aboutPlace2Child8: {
    top: 528,
  },
  aboutPlace2Child9: {
    top: 630,
  },
  aboutPlace2Child10: {
    top: 732,
  },
  aboutPlace2Child11: {
    top: 834,
  },
  aboutPlace2Child12: {
    top: 936,
  },
  rectangleView: {
    top: 1045,
    left: 246,
    borderRadius: Border.br_5xs,
    width: 162,
    height: 56,
    backgroundColor: Color.colorDarkslategray_400,
    position: "absolute",
  },
  back: {
    top: 1065,
    left: 51,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  exit: {
    top: 41,
    left: 359,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  expandLeftLightIcon: {
    top: 1063,
    left: 16,
    height: 24,
    width: 24,
    position: "absolute",
  },
  next: {
    height: "2.31%",
    width: "23.43%",
    top: "94.06%",
    left: "67.15%",
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
  doneLightIcon: {
    top: 343,
  },
  doneLightIcon1: {
    top: 436,
  },
  aboutPlace2: {
    width: 414,
    height: 1127,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AboutPlace;
