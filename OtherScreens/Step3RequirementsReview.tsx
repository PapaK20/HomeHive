import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step3RequirementsReview = () => {
  return (
    <View style={styles.step3RequirementsReview}>
      <Text style={styles.reviewHomehivesStudent}>{`Review HomeHive’s student 
requirements`}</Text>
      <Text
        style={styles.homehiveHasCaveats}
      >{`HomeHive has caveats and requirements students 
must meet before they book their hostels`}</Text>
      <Text
        style={[styles.theirContactInformation, styles.youTypo]}
      >{`Their contact information
(Email and confirmed phone number)`}</Text>
      <Text
        style={[styles.agreedToAny, styles.youTypo]}
      >{`Agreed to any rules and regulations
you have set for your Hive`}</Text>
      <Text
        style={[styles.theirPaymentInformationyou, styles.youTypo]}
      >{`Their payment information(You will
confirm this with them upon
arrival)`}</Text>
      <Text style={[styles.informedYouAbout, styles.youTypo]}>
        Informed you about their arrival dates
      </Text>
      <Text
        style={[styles.letYouKnow, styles.youTypo]}
      >{`Let you know how many people are 
coming`}</Text>
      <Text style={[styles.makeSureAll, styles.makeTypo]}>
        Make sure all students have provided:
      </Text>
      <Text style={[styles.makeSureAll1, styles.makeTypo]}>
        Make sure all students have:
      </Text>
      <Image
        style={[styles.doneLightIcon, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <Image
        style={[styles.doneLightIcon1, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <Image
        style={[styles.doneLightIcon2, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <Image
        style={[styles.doneLightIcon3, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <Image
        style={[styles.doneLightIcon4, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/done-light1.png")}
      />
      <View style={styles.step3RequirementsReviewChild} />
      <View style={styles.step3RequirementsReviewItem} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon, styles.doneIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  youTypo: {
    left: 56,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  makeTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  doneIconLayout: {
    height: 24,
    width: 24,
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
  reviewHomehivesStudent: {
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 19,
    position: "absolute",
  },
  homehiveHasCaveats: {
    top: 173,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  theirContactInformation: {
    top: 307,
  },
  agreedToAny: {
    top: 505,
  },
  theirPaymentInformationyou: {
    top: 359,
  },
  informedYouAbout: {
    top: 560,
  },
  letYouKnow: {
    top: 597,
  },
  makeSureAll: {
    top: 277,
  },
  makeSureAll1: {
    top: 470,
  },
  doneLightIcon: {
    top: 308,
    left: 19,
    height: 24,
    width: 24,
  },
  doneLightIcon1: {
    top: 509,
    left: 19,
    height: 24,
    width: 24,
  },
  doneLightIcon2: {
    top: 356,
    left: 19,
    height: 24,
    width: 24,
  },
  doneLightIcon3: {
    top: 557,
    left: 19,
    height: 24,
    width: 24,
  },
  doneLightIcon4: {
    top: 594,
    left: 19,
    height: 24,
    width: 24,
  },
  step3RequirementsReviewChild: {
    top: 784,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    position: "absolute",
  },
  step3RequirementsReviewItem: {
    top: 819,
    left: 261,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 837,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 835,
    left: 16,
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.08%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3RequirementsReview: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default Step3RequirementsReview;
