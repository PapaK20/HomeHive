import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step2Description = () => {
  return (
    <View style={styles.step2Description}>
      <Text
        style={styles.describeYourHive}
      >{`Describe your Hive to students `}</Text>
      <Text
        style={[styles.writeAQuick, styles.writeAQuickTypo]}
      >{`Write a quick summary of your hive. You can
highlight what’s special about your place, the
environment, and how you’ll interact with others.`}</Text>
      <View style={styles.step2DescriptionChild} />
      <Text
        style={[styles.describeTheRooms, styles.writeAQuickTypo]}
      >{`Describe the rooms, environment, 
etc....`}</Text>
      <Text style={[styles.text, styles.textTypo]}>600</Text>
      <Text style={[styles.charactersRemaining, styles.textTypo]}>
        600 characters remaining
      </Text>
      <View style={styles.step2DescriptionItem} />
      <View style={styles.step2DescriptionInner} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
      <View style={[styles.rectangleView, styles.step2ChildLayout]} />
      <View style={[styles.step2DescriptionChild1, styles.step2ChildLayout]} />
      <View style={[styles.step2DescriptionChild2, styles.step2ChildLayout]} />
      <View style={[styles.step2DescriptionChild3, styles.step2ChildLayout]} />
      <View style={[styles.step2DescriptionChild4, styles.step2ChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  writeAQuickTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
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
  describeYourHive: {
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
    top: 200,
    left: 22,
  },
  step2DescriptionChild: {
    borderRadius: Border.br_10xs,
    borderColor: Color.colorGray_300,
    width: 322,
    height: 118,
    borderWidth: 1,
    borderStyle: "solid",
    top: 300,
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  describeTheRooms: {
    top: 317,
    left: 36,
  },
  text: {
    left: 314,
    top: 300,
    fontSize: FontSize.size_smi,
  },
  charactersRemaining: {
    top: 439,
    left: 22,
  },
  step2DescriptionItem: {
    top: 768,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  step2DescriptionInner: {
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
  step2DescriptionChild1: {
    left: 83,
    backgroundColor: Color.colorDarkslategray_400,
  },
  step2DescriptionChild2: {
    left: 165,
    backgroundColor: Color.colorWhite,
  },
  step2DescriptionChild3: {
    left: 248,
    backgroundColor: Color.colorWhite,
  },
  step2DescriptionChild4: {
    left: 331,
    backgroundColor: Color.colorWhite,
  },
  step2Description: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2Description;
