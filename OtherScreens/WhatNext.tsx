import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const WhatNext = () => {
  return (
    <View style={[styles.whatNext, styles.whatNextLayout]}>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light.png")}
      />
      <Text style={[styles.hiJohnDoe, styles.notNowFlexBox]}>
        Hi John Doe! Looking for things to do in Kumasi?
      </Text>
      <Text style={[styles.hereAreSome, styles.seeMoreTypo]}>
        Here are some places to visit and activities around your area. Check out
        restaurants, malls, and more.
      </Text>
      <Image
        style={[styles.whatNextChild, styles.whatNextChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3971.png")}
      />
      <Image
        style={[styles.whatNextItem, styles.whatLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3973.png")}
      />
      <Image
        style={[styles.whatNextInner, styles.whatLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3974.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.whatNextChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3972.png")}
      />
      <Image
        style={[styles.favoriteLightIcon, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon1, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon2, styles.favoriteIconPosition]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon3, styles.favoriteIconPosition]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>4.64(120)</Text>
      <Image
        style={[styles.starFillIcon, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/star-fill.png")}
      />
      <Text style={[styles.text1, styles.textFlexBox]}>4.64(120)</Text>
      <Image
        style={[styles.starFillIcon1, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/star-fill.png")}
      />
      <Text
        style={[styles.aTopRated, styles.aTopRatedTypo]}
      >{`A top rated restaurant -
Barbecue City`}</Text>
      <Text style={[styles.visitPice, styles.aTopRatedTypo]}>
        Visit Pice - Enjoy quality and affordable meals...
      </Text>
      <Text
        style={[styles.from30PersonContainer, styles.from30ContainerPosition]}
      >
        <Text style={styles.from30Typo}>From ₵30</Text>
        <Text style={styles.textTypo}> /person</Text>
      </Text>
      <Text
        style={[styles.from30PersonContainer1, styles.from30ContainerPosition]}
      >
        <Text style={styles.from30Typo}>From ₵30</Text>
        <Text style={styles.textTypo}> /person</Text>
      </Text>
      <View style={[styles.lineView, styles.viewPosition]} />
      <View style={[styles.rectangleView, styles.viewPosition]} />
      <View style={styles.whatNextChild1} />
      <Text style={[styles.seeMore, styles.textFlexBox]}>SEE MORE</Text>
      <Text style={[styles.notNow, styles.from30Typo]}>Not now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whatNextLayout: {
    width: 414,
    backgroundColor: Color.colorWhite,
  },
  notNowFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  seeMoreTypo: {
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  whatNextChildLayout: {
    height: 209,
    width: 161,
    top: 255,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  whatLayout: {
    top: 596,
    height: 209,
    width: 161,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  favoriteIconLayout: {
    height: 24,
    width: 24,
    left: 162,
    position: "absolute",
  },
  favoriteIconPosition: {
    left: 364,
    height: 24,
    width: 24,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  starIconLayout: {
    height: 20,
    width: 20,
    top: 475,
    position: "absolute",
  },
  aTopRatedTypo: {
    top: 495,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  from30ContainerPosition: {
    top: 537,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  viewPosition: {
    left: 0,
    top: 797,
    position: "absolute",
  },
  from30Typo: {
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  expandLeftLightIcon: {
    top: 13,
    left: 10,
    width: 34,
    height: 34,
    position: "absolute",
  },
  hiJohnDoe: {
    top: 78,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    width: 286,
    height: 68,
    color: Color.colorBlack,
    textAlign: "left",
    left: 31,
  },
  hereAreSome: {
    top: 146,
    lineHeight: 24,
    color: Color.colorDimgray_600,
    width: 328,
    height: 71,
    textAlign: "left",
    position: "absolute",
    left: 31,
  },
  whatNextChild: {
    left: 34,
  },
  whatNextItem: {
    left: 34,
  },
  whatNextInner: {
    left: 236,
  },
  rectangleIcon: {
    left: 236,
  },
  favoriteLightIcon: {
    top: 260,
  },
  favoriteLightIcon1: {
    top: 606,
  },
  favoriteLightIcon2: {
    top: 261,
  },
  favoriteLightIcon3: {
    top: 605,
  },
  text: {
    left: 54,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 476,
    textAlign: "center",
    color: Color.colorBlack,
  },
  starFillIcon: {
    left: 32,
  },
  text1: {
    left: 258,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 476,
    textAlign: "center",
    color: Color.colorBlack,
  },
  starFillIcon1: {
    left: 236,
  },
  aTopRated: {
    left: 38,
  },
  visitPice: {
    left: 241,
  },
  textTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  from30PersonContainer: {
    left: 38,
  },
  from30PersonContainer1: {
    left: 242,
  },
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 415,
    height: 1,
  },
  rectangleView: {
    height: 99,
    width: 414,
    backgroundColor: Color.colorWhite,
  },
  whatNextChild1: {
    top: 819,
    left: 252,
    backgroundColor: Color.colorOrange_100,
    width: 135,
    height: 56,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  seeMore: {
    height: "2.68%",
    width: "63%",
    top: "93.19%",
    left: "46.14%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  notNow: {
    top: 834,
    left: 42,
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  whatNext: {
    height: 896,
    overflow: "hidden",
  },
});

export default WhatNext;
