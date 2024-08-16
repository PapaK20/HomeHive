import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../Constants/GlobalStyles";

const Step2PhotoScenario = () => {
  return (
    <View style={styles.step2PhotoScenario1}>
      <Text style={styles.addPhotosOf}>Add photos of your Hive</Text>
      <Text
        style={styles.photosHelpStudents}
      >{`Photos help students imagine staying in your place. You can start with one and add more 
after you publish.`}</Text>
      <View style={styles.step2PhotoScenario1Child} />
      <View
        style={[styles.step2PhotoScenario1Item, styles.rectangleViewLayout]}
      />
      <Text style={[styles.uploadPhotos, styles.skipForNowTypo]}>
        Upload photos
      </Text>
      <Image
        style={[styles.uploadIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/upload1.png")}
      />
      <View style={styles.step2PhotoScenario1Inner} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={styles.back}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.skipForNow, styles.skipForNowTypo]}>
        SKIP FOR NOW
      </Text>
      <View
        style={[styles.step2PhotoScenario1Child1, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario1Child2, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario1Child3, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario1Child4, styles.step2ChildLayout]}
      />
      <View
        style={[styles.step2PhotoScenario1Child5, styles.step2ChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 56,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  skipForNowTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
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
  step2ChildLayout: {
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
    borderStyle: "solid",
    borderWidth: 1,
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
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    left: 12,
    position: "absolute",
  },
  step2PhotoScenario1Child: {
    top: 242,
    left: 22,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    width: 364,
    height: 364,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario1Item: {
    top: 396,
    left: 113,
    backgroundColor: Color.colorDarkslategray_100,
    width: 181,
  },
  uploadPhotos: {
    width: "26.57%",
    top: "45.87%",
    left: "35.75%",
  },
  uploadIcon: {
    top: 412,
    left: 125,
  },
  step2PhotoScenario1Inner: {
    top: 768,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 801,
    left: 224,
    width: 184,
    backgroundColor: Color.colorDarkslategray_400,
  },
  back: {
    top: 821,
    left: 51,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  expandLeftLightIcon: {
    top: 819,
    left: 16,
  },
  skipForNow: {
    width: "26.81%",
    top: "91.07%",
    left: "62.8%",
  },
  step2PhotoScenario1Child1: {
    backgroundColor: Color.colorDarkslategray_400,
    left: 0,
    height: 14,
    width: 83,
    borderColor: Color.colorDarkslategray_400,
    top: 56,
  },
  step2PhotoScenario1Child2: {
    left: 83,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario1Child3: {
    left: 165,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario1Child4: {
    left: 248,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario1Child5: {
    left: 331,
    backgroundColor: Color.colorWhite,
  },
  step2PhotoScenario1: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step2PhotoScenario;
