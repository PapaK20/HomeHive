import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../Constants/GlobalStyles";

const Step3Pricing = () => {
  return (
    <View style={styles.step3Pricing}>
      <View style={[styles.step3PricingChild, styles.step3Layout]} />
      <View style={[styles.step3PricingItem, styles.step3Layout]} />
      <View style={[styles.step3PricingInner, styles.step3Layout]} />
      <View style={[styles.rectangleView, styles.step3Layout]} />
      <Text style={styles.settingThePricing}>Setting the pricing</Text>
      <Text style={[styles.basePrice, styles.priceTypo]}>Base price</Text>
      <Text style={[styles.minimumPrice, styles.priceTypo]}>Minimum price</Text>
      <Text style={[styles.maximumPrice, styles.priceTypo]}>Maximum price</Text>
      <Text style={[styles.currency, styles.priceTypo]}>Currency</Text>
      <Text style={styles.increaseYourChancesContainer}>
        <Text
          style={styles.increaseYourChances}
        >{`Increase your chances of getting booked
`}</Text>
        <Text
          style={styles.bySettingReasonable}
        >{`by setting reasonable prices based on
your quality and other competitive
demand in the area.`}</Text>
      </Text>
      <Text
        style={[styles.thisWillBe, styles.demandTypo]}
      >{`This will be your default price for periods
where there aren’t any booker influx’s or
lows`}</Text>
      <Text
        style={[styles.whenDemandFor, styles.demandTypo]}
      >{`When demand for your place is low, you may
choose this price to attract more guests`}</Text>
      <Text
        style={[styles.ifDemandFor, styles.demandTypo]}
      >{`If demand for your place is high, set the
highest price you’re willing to charge`}</Text>
      <Text
        style={[styles.youreAlwaysIn, styles.demandTypo]}
      >{`You’re always in control of the pricing you
set!`}</Text>
      <Text style={[styles.text, styles.textTypo]}>₵</Text>
      <Text style={[styles.text1, styles.textTypo]}>₵</Text>
      <Text style={[styles.text2, styles.textTypo]}>₵</Text>
      <Text style={[styles.ghc, styles.textTypo]}>GHC</Text>
      <Text style={[styles.tip8500, styles.tipTypo]}>Tip: ₵ 8500</Text>
      <Text style={[styles.tip8000, styles.tipTypo]}>Tip: ₵ 8000</Text>
      <Text style={[styles.tip9000, styles.tipTypo]}>Tip: ₵ 9000</Text>
      <Text style={[styles.useBasePrice, styles.tipTypo]}>
        Use base price only
      </Text>
      <Image
        style={styles.expandDownLightIcon}
        contentFit="cover"
        source={require("../assets/expand-down-light.png")}
      />
      <View style={styles.lineView} />
      <View style={styles.step3PricingChild1} />
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
  step3Layout: {
    height: 41,
    width: 215,
    borderWidth: 1,
    left: 27,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  priceTypo: {
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 27,
    position: "absolute",
  },
  demandTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 27,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    position: "absolute",
  },
  tipTypo: {
    color: Color.colorCadetblue_100,
    textAlign: "right",
    fontSize: FontSize.size_lg,
    left: 27,
    position: "absolute",
  },
  backTypo: {
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  step3PricingChild: {
    top: 371,
  },
  step3PricingItem: {
    top: 574,
  },
  step3PricingInner: {
    top: 777,
  },
  rectangleView: {
    top: 931,
  },
  settingThePricing: {
    top: 92,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 27,
    position: "absolute",
  },
  basePrice: {
    top: 278,
  },
  minimumPrice: {
    top: 492,
  },
  maximumPrice: {
    top: 695,
  },
  currency: {
    top: 898,
  },
  increaseYourChances: {
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
  },
  bySettingReasonable: {
    fontFamily: FontFamily.k2DRegular,
    color: "#3c4043",
  },
  increaseYourChancesContainer: {
    top: 140,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 27,
    position: "absolute",
  },
  thisWillBe: {
    top: 301,
  },
  whenDemandFor: {
    top: 515,
  },
  ifDemandFor: {
    top: 718,
  },
  youreAlwaysIn: {
    top: 985,
  },
  text: {
    top: 380,
    left: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  text1: {
    top: 583,
    left: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  text2: {
    top: 786,
    left: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  ghc: {
    top: 940,
    left: 44,
  },
  tip8500: {
    top: 436,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorCadetblue_100,
  },
  tip8000: {
    top: 639,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorCadetblue_100,
  },
  tip9000: {
    top: 842,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorCadetblue_100,
  },
  useBasePrice: {
    top: 1058,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
  },
  expandDownLightIcon: {
    top: 934,
    left: 207,
    width: 35,
    height: 35,
    position: "absolute",
  },
  lineView: {
    top: 1221,
    left: 0,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  step3PricingChild1: {
    top: 1256,
    left: 261,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 1274,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 1272,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  next: {
    height: "1.97%",
    width: "19.08%",
    top: "96.14%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Pricing: {
    width: 414,
    height: 1322,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step3Pricing;
