import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../Constants/GlobalStyles";

const Step1AboutPlace = () => {
  return (
    <View style={styles.step1AboutPlace}>
      <Text style={[styles.aboutYourHive, styles.aboutTypo]}>
        About your Hive
      </Text>
      <Text style={[styles.tellUsAbout, styles.aboutTypo]}>{`Tell us about your 
HomeHive!`}</Text>
      <Text style={[styles.firstSelectThe, styles.firstSelectTheTypo]}>
        First, select the type of place
      </Text>
      <Text style={[styles.nowTellUs, styles.nowTellUsTypo]}>
        Now tell us about the setting:
      </Text>
      <Text style={[styles.universitycollege, styles.noTheyreSharedTypo]}>
        University/College
      </Text>
      <View style={[styles.step1AboutPlaceChild, styles.step1Layout]} />
      <View style={styles.step1AboutPlaceItem} />
      <View style={[styles.step1AboutPlaceInner, styles.step1Layout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.step1AboutPlaceChild1, styles.rectangleViewLayout]}
      />
      <Text style={[styles.selectOne, styles.yesTypo]}>Select one</Text>
      <Text style={[styles.whichUniversityIs, styles.yesTypo]}>
        Which university is this for?
      </Text>
      <Text style={[styles.enterNumber, styles.enterTypo]}>Enter number</Text>
      <Text style={[styles.enterNumber1, styles.enterTypo]}>Enter number</Text>
      <Text style={[styles.yes, styles.yesTypo]}>Yes</Text>
      <Text style={[styles.noTheyreShared, styles.sharedPosition]}>
        No, they’re shared
      </Text>
      <Text style={[styles.locationDetails, styles.roomTypo]}>
        Location details
      </Text>
      <Text style={[styles.whatCanStudents, styles.roomTypo]}>
        What can students have?
      </Text>
      <Text style={[styles.howManyPrivate, styles.howTypo]}>
        How many private rooms?
      </Text>
      <Text style={[styles.howManyShared, styles.howTypo]}>
        How many shared rooms?
      </Text>
      <Text style={[styles.areThereBathrooms, styles.howTypo]}>
        Are there bathrooms in each room?
      </Text>
      <Image
        style={[styles.expandDownLightIcon, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-down-light.png")}
      />
      <Image
        style={[styles.expandDownLightIcon1, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-down-light.png")}
      />
      <View style={styles.lineView} />
      <Text style={[styles.address1, styles.address1Typo]}>Address 1</Text>
      <Text style={[styles.address2Optional, styles.address1Typo]}>
        Address 2 (Optional)
      </Text>
      <View style={[styles.step1AboutPlaceChild2, styles.step1ChildLayout2]} />
      <View style={[styles.step1AboutPlaceChild3, styles.step1ChildLayout2]} />
      <View style={[styles.step1AboutPlaceChild4, styles.step1ChildLayout1]} />
      <View style={[styles.step1AboutPlaceChild5, styles.step1ChildLayout1]} />
      <Text style={[styles.privateRoom, styles.roomTypo]}>Private room</Text>
      <Text style={[styles.sharedRoom, styles.roomTypo]}>Shared room</Text>
      <Text style={[styles.studentsHaveA, styles.roomTypo]}>
        Students have a room to themselves.
      </Text>
      <Text
        style={[styles.studentsSleepIn, styles.roomTypo]}
      >{`Students sleep in a room or common area
that could be shared with other roommates`}</Text>
      <View style={styles.step1AboutPlaceChild6} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-145.png")}
      />
      <Image
        style={[styles.step1AboutPlaceChild7, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-145.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>NEXT</Text>
      <View style={[styles.step1AboutPlaceChild8, styles.step1ChildLayout]} />
      <View style={[styles.step1AboutPlaceChild9, styles.step1ChildLayout]} />
      <View style={[styles.step1AboutPlaceChild10, styles.step1ChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    left: 22,
    position: "absolute",
  },
  firstSelectTheTypo: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 22,
  },
  nowTellUsTypo: {
    left: 23,
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
  },
  noTheyreSharedTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  step1Layout: {
    height: 46,
    width: 322,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleViewLayout: {
    width: 142,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    left: 23,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  yesTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  enterTypo: {
    left: 35,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  sharedPosition: {
    left: 59,
    color: Color.colorGray_200,
  },
  roomTypo: {
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  howTypo: {
    left: 24,
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  expandIconLayout: {
    height: 35,
    width: 35,
    left: 303,
    position: "absolute",
  },
  address1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    left: 36,
    color: Color.colorGray_200,
    position: "absolute",
  },
  step1ChildLayout2: {
    width: 386,
    borderColor: Color.colorLightgray_100,
    left: 14,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  step1ChildLayout1: {
    height: 16,
    width: 16,
    left: 26,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  backTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  step1ChildLayout: {
    height: 14,
    width: 140,
    borderColor: Color.colorDarkslategray_400,
    top: 92,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  aboutYourHive: {
    top: 28,
    fontSize: FontSize.size_17xl,
    color: Color.textPrimary,
  },
  tellUsAbout: {
    top: 162,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
  },
  firstSelectThe: {
    top: 272,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  nowTellUs: {
    top: 400,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  universitycollege: {
    top: 461,
    left: 23,
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
  },
  step1AboutPlaceChild: {
    top: 310,
  },
  step1AboutPlaceItem: {
    top: 572,
    height: 118,
    width: 322,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  step1AboutPlaceInner: {
    top: 490,
  },
  rectangleView: {
    top: 955,
  },
  step1AboutPlaceChild1: {
    top: 1044,
  },
  selectOne: {
    top: 321,
    left: 42,
    color: Color.colorGray_200,
  },
  whichUniversityIs: {
    top: 501,
    left: 42,
    color: Color.colorGray_200,
  },
  enterNumber: {
    top: 966,
  },
  enterNumber1: {
    top: 1055,
  },
  yes: {
    top: 1164,
    left: 58,
  },
  noTheyreShared: {
    top: 1197,
    fontFamily: FontFamily.k2DRegular,
    left: 59,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  locationDetails: {
    top: 550,
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 22,
  },
  whatCanStudents: {
    top: 704,
    left: 23,
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
  },
  howManyPrivate: {
    top: 926,
  },
  howManyShared: {
    top: 1015,
  },
  areThereBathrooms: {
    top: 1133,
  },
  expandDownLightIcon: {
    top: 315,
  },
  expandDownLightIcon1: {
    top: 495,
  },
  lineView: {
    top: 631,
    width: 323,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 22,
    position: "absolute",
  },
  address1: {
    top: 577,
  },
  address2Optional: {
    top: 636,
  },
  step1AboutPlaceChild2: {
    top: 448,
  },
  step1AboutPlaceChild3: {
    top: 1253,
  },
  step1AboutPlaceChild4: {
    top: 738,
  },
  step1AboutPlaceChild5: {
    top: 819,
  },
  privateRoom: {
    top: 732,
    left: 59,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  sharedRoom: {
    top: 813,
    left: 59,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  studentsHaveA: {
    top: 760,
    left: 59,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
  },
  studentsSleepIn: {
    top: 841,
    left: 59,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
  },
  step1AboutPlaceChild6: {
    top: 1287,
    left: 240,
    borderRadius: Border.br_5xs,
    width: 162,
    height: 56,
    backgroundColor: Color.colorDarkslategray_400,
    position: "absolute",
  },
  back: {
    top: 1307,
    left: 45,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 1305,
    left: 10,
    width: 24,
    height: 24,
    position: "absolute",
  },
  ellipseIcon: {
    top: 1167,
    left: 26,
    height: 18,
    width: 18,
  },
  step1AboutPlaceChild7: {
    top: 1199,
    left: 25,
  },
  next: {
    height: "1.9%",
    width: "23.43%",
    top: "95.31%",
    left: "65.7%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step1AboutPlaceChild8: {
    left: 0,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step1AboutPlaceChild9: {
    left: 140,
    backgroundColor: Color.colorWhite,
  },
  step1AboutPlaceChild10: {
    left: 280,
    backgroundColor: Color.colorWhite,
  },
  step1AboutPlace: {
    width: 414,
    height: 1366,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step1AboutPlace;
