import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../Constants/GlobalStyles";

const HostingSetUpStart = () => {
  return (
    <View style={styles.hostingSetUpStart}>
      <Text style={styles.setUpYour}>Set up your HomeHive!</Text>
      <View style={[styles.hostingSetUpStartChild, styles.hostingLayout1]} />
      <View style={[styles.hostingSetUpStartItem, styles.hostingLayout1]} />
      <Text style={[styles.tellUsAbout, styles.tellUsAboutTypo]}>
        1 Tell us about your Hive
      </Text>
      <Text
        style={[styles.makeItStand, styles.tellUsAboutTypo]}
      >{`2  Make it stand out  `}</Text>
      <Text
        style={[styles.finishUpAnd, styles.tellUsAboutTypo]}
      >{`3  Finish up and issue  `}</Text>
      <Text
        style={[styles.shareSomeBasic, styles.add5OrTypo]}
      >{`Share some basic info, such as where it is and how many rooms
are available.`}</Text>
      <Text
        style={[styles.add5Or, styles.add5OrTypo]}
      >{`Add 5 or more photos including interiors and exteriors, and
titles and descriptions.`}</Text>
      <Text
        style={[styles.chooseTheSpecification, styles.add5OrTypo]}
      >{`Choose the specification of
students you’d be accepting, set
a starting price, and publish
your listing`}</Text>
      <Image
        style={[styles.hostingSetUpStartInner, styles.hostingLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4170.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.hostingLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4171.png")}
      />
      <Image
        style={[styles.hostingSetUpStartChild1, styles.hostingLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4172.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.getStarted}>GET STARTED</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hostingLayout1: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  tellUsAboutTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 25,
    textAlign: "center",
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  add5OrTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    left: 48,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  hostingLayout: {
    height: 102,
    width: 113,
    left: 284,
    position: "absolute",
  },
  setUpYour: {
    top: 76,
    left: 20,
    fontSize: FontSize.size_17xl,
    color: Color.textPrimary,
    textAlign: "center",
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  hostingSetUpStartChild: {
    top: 306,
  },
  hostingSetUpStartItem: {
    top: 475,
  },
  tellUsAbout: {
    top: 166,
  },
  makeItStand: {
    top: 329,
  },
  finishUpAnd: {
    top: 498,
  },
  shareSomeBasic: {
    top: 198,
  },
  add5Or: {
    top: 361,
  },
  chooseTheSpecification: {
    top: 530,
  },
  hostingSetUpStartInner: {
    top: 166,
  },
  rectangleIcon: {
    top: 329,
  },
  hostingSetUpStartChild1: {
    top: 498,
  },
  rectangleView: {
    top: 777,
    left: 19,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 374,
    height: 56,
    position: "absolute",
  },
  getStarted: {
    height: "2.96%",
    width: "63%",
    top: "88.39%",
    left: "18.36%",
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  hostingSetUpStart: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default HostingSetUpStart;
