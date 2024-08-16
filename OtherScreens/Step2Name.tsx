import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step2Name = () => {
  return (
    <View style={styles.step2Name}>
      <Text style={styles.nameYourPlace}>Name your place</Text>
      <Text
        style={[styles.writeAQuick, styles.hiveNameTypo]}
      >{`Write a quick summary of your hive. You can
highlight what’s special about your place, the
environment, and how you’ll interact with others.`}</Text>
      <View style={styles.step2NameChild} />
      <Text style={[styles.hiveName, styles.hiveNameTypo]}>Hive name</Text>
      <Text style={[styles.charactersRemaining, styles.hiveNameTypo]}>
        50 characters remaining
      </Text>
      <View style={styles.step2NameItem} />
      <View style={styles.step2NameInner} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
      <View style={[styles.rectangleView, styles.step2ChildLayout]} />
      <View style={[styles.step2NameChild1, styles.step2ChildLayout]} />
      <View style={[styles.step2NameChild2, styles.step2ChildLayout]} />
      <View style={[styles.step2NameChild3, styles.step2ChildLayout]} />
      <View style={[styles.step2NameChild4, styles.step2ChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  hiveNameTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    textAlign: "left",
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
  nameYourPlace: {
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
  writeAQuick: {
    top: 152,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    left: 22,
  },
  step2NameChild: {
    top: 252,
    borderRadius: Border.br_10xs,
    borderColor: Color.colorGray_300,
    width: 322,
    height: 62,
    borderWidth: 1,
    borderStyle: "solid",
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  hiveName: {
    top: 268,
    left: 38,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    letterSpacing: 0,
    fontFamily: FontFamily.k2DRegular,
  },
  charactersRemaining: {
    top: 335,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.k2DRegular,
    left: 22,
  },
  step2NameItem: {
    top: 768,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  step2NameInner: {
    top: 803,
    left: 261,
    borderRadius: Border.br_5xs,
    width: 130,
    height: 56,
    backgroundColor: Color.colorDarkslategray_400,
    position: "absolute",
  },
  back: {
    top: 821,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 819,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "91.29%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslategray_400,
    left: 0,
  },
  step2NameChild1: {
    left: 83,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2NameChild2: {
    left: 165,
    backgroundColor: Color.colorWhite,
  },
  step2NameChild3: {
    left: 248,
    backgroundColor: Color.colorWhite,
  },
  step2NameChild4: {
    left: 331,
    backgroundColor: Color.colorWhite,
  },
  step2Name: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2Name;
