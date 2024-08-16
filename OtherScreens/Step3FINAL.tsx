import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../Constants/GlobalStyles";

const Step3FINAL = () => {
  return (
    <View style={styles.step3Final}>
      <Text style={styles.youreReadyTo}>{`You’re ready to
publish!`}</Text>
      <Text
        style={styles.youllBeAble}
      >{`You’ll be able to welcome your first guest
starting August 10, 2024. If you’d like to
update your calendar or house rules, you can
easily do all that after you hit publish.`}</Text>
      <View style={styles.step3FinalChild} />
      <Text style={[styles.publishListing, styles.listingTypo]}>
        publish listing
      </Text>
      <Text style={[styles.editListing, styles.listingTypo]}>EDIT LISTING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listingTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    top: "41.18%",
    width: "32.08%",
    height: "2.9%",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  youreReadyTo: {
    top: 90,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    letterSpacing: 0,
    left: 30,
    position: "absolute",
  },
  youllBeAble: {
    top: 215,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  step3FinalChild: {
    top: 354,
    left: 17,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorCadetblue_100,
    width: 183,
    height: 56,
    position: "absolute",
  },
  publishListing: {
    left: "9.67%",
    color: Color.colorWhite,
  },
  editListing: {
    left: "50%",
    color: Color.colorCadetblue_100,
  },
  step3Final: {
    backgroundColor: Color.colorWhite,
    width: 424,
    height: 896,
    overflow: "hidden",
  },
});

export default Step3FINAL;
