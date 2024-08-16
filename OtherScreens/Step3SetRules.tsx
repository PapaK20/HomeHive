import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Step3SetRules = () => {
  return (
    <View style={styles.step3SetRules}>
      <Text style={styles.setHouseRules}>Set house rules for your guests</Text>
      <Text
        style={[styles.studentsMustAgree, styles.anythingElseClr]}
      >{`Students must agree to your house rules before
they book.`}</Text>
      <Text style={[styles.suitableForChildren2, styles.suitableTypo]}>
        Suitable for children(2 - 12 years)
      </Text>
      <Text style={[styles.suitableForInfantsunder, styles.suitableTypo]}>
        Suitable for infants(Under 2 years)
      </Text>
      <Text style={[styles.suitableForPets, styles.suitableTypo]}>
        Suitable for pets
      </Text>
      <Text style={[styles.smokingAllowed, styles.suitableTypo]}>
        Smoking allowed
      </Text>
      <Text style={[styles.eventsOrParties, styles.suitableTypo]}>
        Events or parties allowed
      </Text>
      <Text style={[styles.additionalRules, styles.additionalRulesTypo]}>
        Additional rules
      </Text>
      <Text style={[styles.detailsStudentsMust, styles.additionalRulesTypo]}>
        Details students must know about your hive
      </Text>
      <View style={styles.step3SetRulesChild} />
      <Text style={[styles.anythingElse, styles.addPosition]}>
        Anything else?
      </Text>
      <Text style={[styles.add, styles.addPosition]}>Add</Text>
      <View style={styles.step3SetRulesItem} />
      <View style={[styles.step3SetRulesInner, styles.step3ChildLayout]} />
      <View style={[styles.rectangleView, styles.step3ChildLayout]} />
      <View style={[styles.step3SetRulesChild1, styles.step3ChildLayout]} />
      <View style={[styles.step3SetRulesChild2, styles.step3ChildLayout]} />
      <View style={[styles.step3SetRulesChild3, styles.step3ChildLayout]} />
      <View style={[styles.step3SetRulesChild4, styles.step3ChildLayout]} />
      <View style={[styles.step3SetRulesChild5, styles.step3ChildLayout]} />
      <Text style={[styles.mustClimbStairs, styles.liveTypo]}>
        Must climb stairs
      </Text>
      <Text style={[styles.potentialForNoise, styles.liveTypo]}>
        Potential for noise
      </Text>
      <Text style={[styles.petsLiveOn, styles.liveTypo]}>
        Pet(s) live on property
      </Text>
      <Text style={[styles.noParkingOn, styles.liveTypo]}>
        No parking on property
      </Text>
      <Text style={[styles.someSpacesAre, styles.liveTypo]}>
        Some spaces are shared
      </Text>
      <Text
        style={[styles.surveillanceOrRecording, styles.liveTypo]}
      >{`Surveillance or recording devices on
property`}</Text>
      <Text style={[styles.dangerousAnimalsLive, styles.liveTypo]}>
        Dangerous animals live on property
      </Text>
      <View style={styles.lineView} />
      <View style={styles.step3SetRulesChild6} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
      <Image
        style={[styles.checkRingLightIcon, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../assets/check-ring-light.png")}
      />
      <Image
        style={[styles.checkRingLightIcon1, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../assets/check-ring-light.png")}
      />
      <Image
        style={[styles.checkRingLightIcon2, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../assets/check-ring-light.png")}
      />
      <Image
        style={[styles.checkRingLightIcon3, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../assets/check-ring-light.png")}
      />
      <Image
        style={[styles.checkRingLightIcon4, styles.checkIconLayout]}
        contentFit="cover"
        source={require("../assets/check-ring-light.png")}
      />
      <Image
        style={[styles.dellLightIcon, styles.dellIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light1.png")}
      />
      <Image
        style={[styles.dellLightIcon1, styles.dellIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light1.png")}
      />
      <Image
        style={[styles.dellLightIcon2, styles.dellIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light1.png")}
      />
      <Image
        style={[styles.dellLightIcon3, styles.dellIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light1.png")}
      />
      <Image
        style={[styles.dellLightIcon4, styles.dellIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  anythingElseClr: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
  },
  suitableTypo: {
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  additionalRulesTypo: {
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  addPosition: {
    top: 713,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  step3ChildLayout: {
    height: 16,
    width: 16,
    left: 21,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  liveTypo: {
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    left: 54,
    color: Color.colorDarkslategray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
  checkIconLayout: {
    height: 38,
    width: 38,
    left: 347,
    position: "absolute",
  },
  dellIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "71.98%",
    right: "18.84%",
    width: "9.18%",
    height: "2.76%",
    position: "absolute",
    overflow: "hidden",
  },
  setHouseRules: {
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 19,
    position: "absolute",
  },
  studentsMustAgree: {
    top: 147,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  suitableForChildren2: {
    top: 249,
    color: Color.colorDarkslategray_500,
  },
  suitableForInfantsunder: {
    top: 330,
    color: Color.colorDarkslategray_500,
  },
  suitableForPets: {
    top: 411,
    color: Color.colorDarkslategray_500,
  },
  smokingAllowed: {
    top: 492,
    color: Color.colorDarkslategray_500,
  },
  eventsOrParties: {
    top: 573,
    color: Color.colorDarkslategray_500,
  },
  additionalRules: {
    top: 654,
  },
  detailsStudentsMust: {
    top: 810,
  },
  step3SetRulesChild: {
    left: 26,
    borderRadius: Border.br_3xs,
    width: 326,
    height: 52,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    top: 698,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  anythingElse: {
    left: 43,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DRegular,
  },
  add: {
    left: 294,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorDarkslategray_500,
  },
  step3SetRulesItem: {
    left: 263,
    borderRightWidth: 1,
    width: 1,
    height: 53,
    borderColor: Color.colorGray_200,
    top: 698,
    borderStyle: "solid",
    position: "absolute",
  },
  step3SetRulesInner: {
    top: 856,
  },
  rectangleView: {
    top: 904,
  },
  step3SetRulesChild1: {
    top: 952,
  },
  step3SetRulesChild2: {
    top: 1000,
  },
  step3SetRulesChild3: {
    top: 1048,
  },
  step3SetRulesChild4: {
    top: 1096,
  },
  step3SetRulesChild5: {
    top: 1167,
  },
  mustClimbStairs: {
    top: 852,
  },
  potentialForNoise: {
    top: 900,
  },
  petsLiveOn: {
    top: 948,
  },
  noParkingOn: {
    top: 996,
  },
  someSpacesAre: {
    top: 1044,
  },
  surveillanceOrRecording: {
    top: 1092,
  },
  dangerousAnimalsLive: {
    top: 1163,
  },
  lineView: {
    top: 1278,
    left: 1,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  step3SetRulesChild6: {
    top: 1313,
    left: 262,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 1331,
    left: 52,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 1329,
    left: 17,
    width: 24,
    height: 24,
    position: "absolute",
  },
  next: {
    height: "1.89%",
    width: "19.08%",
    top: "96.37%",
    left: "69.32%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  checkRingLightIcon: {
    top: 241,
  },
  checkRingLightIcon1: {
    top: 322,
  },
  checkRingLightIcon2: {
    top: 403,
  },
  checkRingLightIcon3: {
    top: 484,
  },
  checkRingLightIcon4: {
    top: 565,
  },
  dellLightIcon: {
    top: "17.49%",
    bottom: "79.75%",
  },
  dellLightIcon1: {
    top: "23.37%",
    bottom: "73.88%",
  },
  dellLightIcon2: {
    top: "29.25%",
    bottom: "68%",
  },
  dellLightIcon3: {
    top: "35.12%",
    bottom: "62.12%",
  },
  dellLightIcon4: {
    top: "41%",
    bottom: "56.24%",
  },
  step3SetRules: {
    width: 414,
    height: 1378,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step3SetRules;
