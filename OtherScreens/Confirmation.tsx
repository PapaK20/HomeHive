import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../Constants/GlobalStyles";

const Confirmation = () => {
  return (
    <View style={styles.confirmation}>
      <Text
        style={[styles.academicYearBlockB, styles.stTheresahIsClr]}
      >{`1 academic year Block B, GF3  `}</Text>
      <Text style={[styles.stTheresahIs, styles.stTheresahIsClr]}>
        St Theresah is here to help you if you have any questions.
      </Text>
      <Text style={[styles.shareYourReservation, styles.sendMessageTypo]}>
        Share your reservation with your guardians or anyone else who might want
        to know(Optional).
      </Text>
      <View style={styles.confirmationChild} />
      <Text style={[styles.yourReservationIs, styles.yourTypo]}>
        Your reservation is confirmed!
      </Text>
      <Text style={[styles.text, styles.textTypo]}>4.64(1921)</Text>
      <Text style={[styles.stTheresahsHostel, styles.skipTypo]}>
        St Theresah’s Hostel
      </Text>
      <Image
        style={styles.starFillIcon}
        contentFit="cover"
        source={require("../assets/star-fill.png")}
      />
      <Image
        style={[styles.confirmationItem, styles.confirmationLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <Text style={[styles.total, styles.textTypo]}>₵7500 total</Text>
      <View style={[styles.confirmationInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.meetYourHost, styles.yourTypo]}>Meet your host</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-139.png")}
      />
      <View
        style={[styles.confirmationChild1, styles.confirmationChildBorder]}
      />
      <Text style={[styles.hiStTheresahs, styles.stTheresahIsTypo]}>
        Hi St Theresahs, I’ll be moving to the hostel..
      </Text>
      <View
        style={[styles.confirmationChild2, styles.confirmationChildBorder]}
      />
      <Text style={[styles.sendMessage, styles.sendMessageTypo]}>
        SEND MESSAGE
      </Text>
      <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      <View style={[styles.confirmationChild3, styles.confirmationLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  stTheresahIsClr: {
    color: Color.colorDimgray_600,
    textAlign: "left",
  },
  sendMessageTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  yourTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  skipTypo: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  confirmationLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 10,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  confirmationChildBorder: {
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    left: 33,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  stTheresahIsTypo: {
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  academicYearBlockB: {
    top: 135,
    left: 195,
    width: 155,
    textAlign: "left",
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  stTheresahIs: {
    top: 330,
    left: 108,
    width: 293,
    textAlign: "left",
    fontFamily: FontFamily.k2DRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  shareYourReservation: {
    top: 685,
    lineHeight: 21,
    width: 355,
    left: 33,
    textAlign: "left",
    color: Color.colorDimgray_600,
  },
  confirmationChild: {
    top: 60,
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 415,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  yourReservationIs: {
    top: 16,
    left: 56,
    textAlign: "center",
  },
  text: {
    top: 182,
    left: 211,
    textAlign: "center",
  },
  stTheresahsHostel: {
    top: 94,
    left: 194,
  },
  starFillIcon: {
    top: 181,
    left: 191,
    width: 20,
    height: 20,
    position: "absolute",
  },
  confirmationItem: {
    top: 87,
    left: 31,
    width: 138,
    height: 110,
  },
  total: {
    top: 202,
    left: 197,
    textAlign: "right",
  },
  confirmationInner: {
    top: 243,
  },
  rectangleView: {
    top: 611,
  },
  meetYourHost: {
    top: 280,
    textAlign: "center",
    left: 33,
  },
  ellipseIcon: {
    top: 324,
    width: 60,
    height: 60,
    left: 33,
    position: "absolute",
  },
  confirmationChild1: {
    top: 399,
    borderColor: Color.colorGray_300,
    height: 123,
    width: 355,
  },
  hiStTheresahs: {
    top: 408,
    left: 52,
    color: "#b1aaaa",
    width: 308,
    textAlign: "left",
  },
  confirmationChild2: {
    top: 538,
    borderColor: "#e6dcdc",
    width: 175,
    height: 45,
  },
  sendMessage: {
    height: "2.68%",
    width: "63%",
    top: "44.74%",
    left: "-2.17%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: "#d6cece",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  skip: {
    top: 1159,
    left: 41,
    textDecoration: "underline",
  },
  confirmationChild3: {
    top: 1143,
    left: 248,
    backgroundColor: Color.colorOrange_100,
    width: 135,
    height: 56,
  },
  confirmation: {
    height: 1227,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default Confirmation;
