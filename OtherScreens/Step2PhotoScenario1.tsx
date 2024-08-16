import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step2PhotoScenario1 = () => {
  return (
    <View style={styles.step2PhotoScenario2}>
      <Text style={styles.addPhotosOf}>Add photos of your Hive</Text>
      <Text
        style={[styles.photosHelpStudents, styles.addMoreTypo]}
      >{`Photos help students imagine staying in your place. You can start with one and add more 
after you publish.`}</Text>
      <Image
        style={styles.step2PhotoScenario2Child}
        contentFit="cover"
        source={require("../assets/rectangle-4180.png")}
      />
      <View style={styles.step2PhotoScenario2Item} />
      <View style={styles.step2PhotoScenario2Inner} />
      <Text style={[styles.back, styles.backText]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backText]}>Next</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.text, styles.backText]}>+</Text>
      <Text style={[styles.addMore, styles.addMoreTypo]}>Add More</Text>
      <Text style={styles.addACaption}>Add a caption</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-155.png")}
      />
      <Image
        style={[styles.step2PhotoScenario2Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-155.png")}
      />
      <Image
        style={[styles.closeRoundLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/close-round-light.png")}
      />
      <Image
        style={styles.iconPencilEdit2}
        contentFit="cover"
        source={require("../assets/icon--pencil-edit-21.png")}
      />
      <View
        style={[styles.step2PhotoScenario2Child2, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario2Child3, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario2Child4, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario2Child5, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario2Child6, styles.step2ChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addMoreTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    textAlign: "left",
    position: "absolute",
  },
  backText: {
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  lightIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 35,
    width: 35,
    top: 249,
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
  addPhotosOf: {
    top: 90,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 12,
    position: "absolute",
  },
  photosHelpStudents: {
    top: 150,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    left: 12,
  },
  step2PhotoScenario2Child: {
    borderRadius: 4,
    height: 220,
    width: 364,
    left: 22,
    top: 242,
    position: "absolute",
  },
  step2PhotoScenario2Item: {
    top: 768,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  step2PhotoScenario2Inner: {
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
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
  },
  expandLeftLightIcon: {
    top: 819,
    left: 16,
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
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
  },
  rectangleView: {
    top: 501,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    height: 227,
    borderWidth: 1,
    width: 364,
    left: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 581,
    left: 179,
    fontSize: 64,
    fontWeight: "300",
    fontFamily: FontFamily.k2DLight,
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    color: Color.colorGray_200,
  },
  addMore: {
    top: 629,
    left: 156,
    fontSize: FontSize.size_xl,
  },
  addACaption: {
    top: 462,
    left: 22,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    left: 68,
  },
  step2PhotoScenario2Child1: {
    left: 25,
  },
  closeRoundLightIcon: {
    top: 255,
    left: 31,
  },
  iconPencilEdit2: {
    left: 62,
    width: 48,
    height: 48,
    top: 242,
    position: "absolute",
    overflow: "hidden",
  },
  step2PhotoScenario2Child2: {
    backgroundColor: Color.colorDarkslategray_400,
    left: 0,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2PhotoScenario2Child3: {
    left: 83,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario2Child4: {
    left: 165,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario2Child5: {
    left: 248,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario2Child6: {
    left: 331,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario2: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2PhotoScenario1;
