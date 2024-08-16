import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../Constants/GlobalStyles";

const Step3Hosting1 = () => {
  return (
    <View style={styles.step3Hosting2}>
      <View style={styles.step3Hosting2Child} />
      <Text style={styles.howFarIn}>{`How far in advance can guests
book?`}</Text>
      <View style={[styles.step3Hosting2Item, styles.step3Border]} />
      <Image
        style={styles.expandDownLightIcon}
        contentFit="cover"
        source={require("../assets/expand-down-light.png")}
      />
      <Text style={[styles.monthsInAdvance, styles.monthsInAdvanceTypo]}>
        6 months in advance
      </Text>
      <Text style={[styles.tipMostHostsContainer, styles.monthsInAdvanceTypo]}>
        <Text style={styles.tip}>Tip:</Text>
        <Text style={styles.mostHostsCan}>{` Most hosts can keep their
calendars updated up to 6 
months out`}</Text>
      </Text>
      <Image
        style={[styles.dateRangeDuotoneLineIcon, styles.dateIconLayout1]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Image
        style={[styles.dateRangeDuotoneLineIcon1, styles.dateIconLayout]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Image
        style={[styles.dateRangeDuotoneLineIcon2, styles.dateIconLayout1]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Image
        style={[styles.dateRangeDuotoneLineIcon3, styles.dateIconLayout]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Image
        style={[styles.dateRangeDuotoneLineIcon4, styles.dateIconLayout1]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Image
        style={[styles.dateRangeDuotoneLineIcon5, styles.rectangleViewPosition]}
        contentFit="cover"
        source={require("../assets/date-range-duotone-line.png")}
      />
      <Text style={[styles.jul, styles.julTypo]}>jul</Text>
      <Text style={[styles.aug, styles.julTypo]}>AUG</Text>
      <Text style={[styles.sep, styles.julTypo]}>SEP</Text>
      <Text style={[styles.oct, styles.octTypo]}>OCT</Text>
      <Text style={[styles.nov, styles.octTypo]}>NOV</Text>
      <Text style={[styles.dec, styles.octTypo]}>DEC</Text>
      <View style={[styles.step3Hosting2Inner, styles.step3Border]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.back, styles.julTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.julTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  step3Border: {
    borderStyle: "solid",
    position: "absolute",
  },
  monthsInAdvanceTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  dateIconLayout1: {
    height: 84,
    width: 84,
    top: 428,
    position: "absolute",
  },
  dateIconLayout: {
    top: 536,
    height: 84,
    width: 84,
  },
  rectangleViewPosition: {
    left: 261,
    position: "absolute",
  },
  julTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  octTypo: {
    top: "65.07%",
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  step3Hosting2Child: {
    top: 398,
    backgroundColor: "#f9f9f9",
    height: 387,
    left: 0,
    position: "absolute",
    width: 414,
  },
  howFarIn: {
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 17,
    position: "absolute",
  },
  step3Hosting2Item: {
    top: 218,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 238,
    height: 58,
    left: 20,
  },
  expandDownLightIcon: {
    top: 229,
    left: 221,
    width: 35,
    height: 35,
    position: "absolute",
  },
  monthsInAdvance: {
    top: 235,
    left: 40,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
  },
  tip: {
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    color: Color.colorCadetblue_100,
  },
  mostHostsCan: {
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DRegular,
  },
  tipMostHostsContainer: {
    top: 300,
    left: 20,
  },
  dateRangeDuotoneLineIcon: {
    left: 17,
    height: 84,
    width: 84,
    top: 428,
  },
  dateRangeDuotoneLineIcon1: {
    left: 20,
    position: "absolute",
  },
  dateRangeDuotoneLineIcon2: {
    left: 134,
  },
  dateRangeDuotoneLineIcon3: {
    left: 137,
    position: "absolute",
  },
  dateRangeDuotoneLineIcon4: {
    left: 258,
  },
  dateRangeDuotoneLineIcon5: {
    top: 536,
    height: 84,
    width: 84,
  },
  jul: {
    left: "10.39%",
    top: "53.01%",
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    color: Color.colorGray_200,
  },
  aug: {
    top: "52.68%",
    left: "38.65%",
    color: Color.colorGray_200,
  },
  sep: {
    left: "69.32%",
    top: "53.01%",
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    color: Color.colorGray_200,
  },
  oct: {
    left: "10.63%",
  },
  nov: {
    left: "39.37%",
  },
  dec: {
    left: "69.32%",
  },
  step3Hosting2Inner: {
    top: 785,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    left: 0,
  },
  rectangleView: {
    top: 820,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
  },
  back: {
    top: 838,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 836,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.19%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Hosting2: {
    backgroundColor: Color.colorWhite,
    height: 896,
    overflow: "hidden",
    width: 414,
  },
});

export default Step3Hosting1;
