import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const Step3Terms = () => {
  return (
    <View style={styles.step3Terms}>
      <Text style={styles.rulesLawsAnd}>Rules, laws and regulations</Text>
      <Text style={styles.makeSureYouContainer}>
        <Text
          style={styles.makeSureYou}
        >{`Make sure you familiarize yourself with 
your local laws, as well as `}</Text>
        <Text style={styles.homehivesNondiscriminationP}>{`HomeHive’s
Nondiscrimination Policy and terms`}</Text>
      </Text>
      <Text
        style={[styles.takeAMoment, styles.takeAMomentTypo]}
      >{`Take a moment to review the local laws
that apply to your listing. We want to
make sure you have everything you 
need to get off to a great start.`}</Text>
      <Text
        style={[styles.sinceYouAre, styles.takeAMomentTypo]}
      >{`Since you are responsible for your own decision
to list or book, you should get comfortable with 
the applicable rules before listing on HomeHive.
Thanks!`}</Text>
      <Text
        style={[styles.byAcceptingOur, styles.takeAMomentTypo]}
      >{`By accepting our Terms of Service and listing
your space, you certify that you will follow
applicable laws and regulations.`}</Text>
      <Text
        style={[styles.mostCitiesHave, styles.takeAMomentTypo]}
      >{`Most cities have rules covering homesharng,
and the specific codes and ordinances can
appear in many places(such as zoning, building,
liscensing or tax codes). In most places, you must
register, get a permit, or obtain a license before
you list your property or accept guests. You may
also be responsible for collecting and remitting
certain taxes in some places, short-term rentals
could be prohibited altogether.`}</Text>
      <Text style={styles.learnMore}>Learn more</Text>
      <View style={styles.step3TermsChild} />
      <View style={styles.step3TermsItem} />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.finish, styles.backTypo]}>FINISH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  takeAMomentTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_500,
    textAlign: "left",
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
  rulesLawsAnd: {
    top: 92,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 25,
    position: "absolute",
  },
  makeSureYou: {
    color: Color.colorDarkslategray_500,
  },
  homehivesNondiscriminationP: {
    color: Color.colorCadetblue_100,
  },
  makeSureYouContainer: {
    top: 138,
    fontSize: FontSize.size_base,
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  takeAMoment: {
    top: 239,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    left: 25,
  },
  sinceYouAre: {
    top: 575,
    left: 27,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  byAcceptingOur: {
    top: 749,
    left: 27,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  mostCitiesHave: {
    top: 357,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    left: 25,
  },
  learnMore: {
    top: 683,
    textAlign: "right",
    fontSize: FontSize.size_mini,
    color: Color.colorCadetblue_100,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 25,
    position: "absolute",
  },
  step3TermsChild: {
    top: 925,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    position: "absolute",
  },
  step3TermsItem: {
    top: 960,
    left: 261,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
    height: 56,
    position: "absolute",
  },
  back: {
    top: 978,
    left: 51,
    color: Color.colorDarkslategray_400,
  },
  expandLeftLightIcon: {
    top: 976,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  finish: {
    height: "2.47%",
    width: "19.08%",
    top: "92.68%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Terms: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 1052,
    overflow: "hidden",
  },
});

export default Step3Terms;
