import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const Step3Hosting2 = () => {
  return (
    <View style={styles.step3Hosting3}>
      <Text style={styles.howManyAcademic}>{`How many academic years 
guests stay?`}</Text>
      <View style={[styles.step3Hosting3Child, styles.step3Border]} />
      <Image
        style={styles.expandDownLightIcon}
        contentFit="cover"
        source={require("../assets/expand-down-light.png")}
      />
      <Text style={[styles.academicYears, styles.academicYearsTypo]}>
        2 academic years
      </Text>
      <Text
        style={[styles.studentsMayBook, styles.academicYearsTypo]}
      >{`Students may book for each
year but can also choose to
book for any number of years
they remain a student.`}</Text>
      <View style={[styles.step3Hosting3Item, styles.step3Border]} />
      <View style={styles.step3Hosting3Inner} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  step3Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  academicYearsTypo: {
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
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
  howManyAcademic: {
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 18,
    position: "absolute",
  },
  step3Hosting3Child: {
    top: 218,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 238,
    height: 58,
    left: 18,
    borderStyle: "solid",
  },
  expandDownLightIcon: {
    top: 229,
    left: 219,
    width: 35,
    height: 35,
    position: "absolute",
  },
  academicYears: {
    top: 235,
    left: 38,
    color: Color.colorGray_200,
  },
  studentsMayBook: {
    top: 300,
    left: 22,
    color: Color.colorDarkslategray_500,
  },
  step3Hosting3Item: {
    top: 785,
    left: -4,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
  },
  step3Hosting3Inner: {
    top: 820,
    left: 257,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 838,
    left: 47,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 836,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.19%",
    left: "68.12%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Hosting3: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default Step3Hosting2;
