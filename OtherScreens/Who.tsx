import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const Who = () => {
  return (
    <View style={styles.who}>
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={styles.whoChild} />
      <Text style={[styles.explore, styles.maleTypo]}>Explore</Text>
      <Text style={[styles.bookmarks, styles.bookingsTypo]}>Bookmarks</Text>
      <Text style={[styles.trending, styles.staysLayout]}>Trending</Text>
      <Text style={[styles.hostel, styles.mustTypo]}>Hostel</Text>
      <Text style={[styles.apartment, styles.whenLayout]}>Apartment</Text>
      <Text style={[styles.campus, styles.whenLayout]}>Campus</Text>
      <Text style={[styles.bookings, styles.bookingsTypo]}>Bookings</Text>
      <Text style={[styles.profiile, styles.maleTypo]}>Profiile</Text>
      <Image
        style={styles.userCicrleLightIcon}
        contentFit="cover"
        source={require("../assets/user-cicrle-light.png")}
      />
      <Image
        style={[styles.homeLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/home-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/favorite-light1.png")}
      />
      <View style={styles.whoItem} />
      <Text
        style={[styles.kwameNkrumahUniversity, styles.maleFlexBox]}
      >{`Kwame Nkrumah University Of  Science & Technology`}</Text>
      <Image
        style={styles.searchIcon1}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.fireIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fire.png")}
      />
      <Image
        style={[styles.casaParticularIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/casa-particular.png")}
      />
      <Image
        style={[styles.apartmentIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/apartment.png")}
      />
      <Image
        style={styles.schoolIcon}
        contentFit="cover"
        source={require("../assets/school.png")}
      />
      <View style={styles.whoInner} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.whoChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Image
        style={[styles.whoChild1, styles.whoChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-62.png")}
      />
      <Text style={[styles.stTheresahsHostel, styles.clearAllTypo]}>
        St Theresah’s Hostel, Ayeduase
      </Text>
      <Text style={styles.viewed30000Times}>
        Viewed 30,000 times last week 1 academic year
      </Text>
      <Image
        style={[styles.dotsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/dots.png")}
      />
      <Text style={[styles.minPerYearContainer, styles.maleFlexBox]}>
        <Text style={styles.textTypo3}>{`₵7000 `}</Text>
        <Text style={styles.minPerYear}>min per year</Text>
      </Text>
      <Image
        style={[styles.favoriteLightIcon1, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon2, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../assets/favorite-light.png")}
      />
      <Text style={[styles.knowAPlace, styles.placePosition]}>
        Know a place?
      </Text>
      <Text style={[styles.anyPlace, styles.placePosition]}>
        Any place - Any year - Add occupants
      </Text>
      <Image
        style={styles.starFillIcon}
        contentFit="cover"
        source={require("../assets/star-fill.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["rgba(217, 217, 217, 0.8)", "rgba(219, 219, 219, 0.7)"]}
      />
      <View style={[styles.rectangleView, styles.whoChild2ShadowBox]} />
      <View style={[styles.whoChild2, styles.whoChild2ShadowBox]} />
      <Text style={[styles.where, styles.whenLayout]}>Where</Text>
      <Text style={[styles.when, styles.whenPosition]}>When</Text>
      <Text style={[styles.aBizarrePlace, styles.maleFlexBox]}>
        A bizarre place, Zodia
      </Text>
      <Text style={[styles.july2023, styles.maleFlexBox]}>July 2023</Text>
      <View style={[styles.whoChild3, styles.lineViewLayout]} />
      <Text style={[styles.stays, styles.staysLayout]}>Stays</Text>
      <Image
        style={[styles.dellLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light.png")}
      />
      <View style={styles.whoChild4} />
      <Text style={[styles.whosJoiningYou, styles.whenPosition]}>
        Who’s joining you?
      </Text>
      <View style={[styles.whoChild5, styles.whoChildBorder]} />
      <View style={[styles.whoChild6, styles.whoChildBorder]} />
      <View style={styles.whoChild7} />
      <Text style={[styles.clearAll, styles.searchPosition]}>Clear all</Text>
      <Text
        style={[styles.search, styles.searchPosition]}
      >{`SEARCH     `}</Text>
      <Text style={[styles.male, styles.maleFlexBox]}>Male</Text>
      <Text style={[styles.female, styles.maleFlexBox]}>Female</Text>
      <Text style={[styles.mustBeAn, styles.mustTypo]}>
        Must be an enrolled student
      </Text>
      <Text style={[styles.mustBeAn1, styles.mustTypo]}>
        Must be an enrolled student
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.whoChild8Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-140.png")}
      />
      <Image
        style={[styles.whoChild8, styles.whoChild8Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-140.png")}
      />
      <Image
        style={[styles.whoChild9, styles.whoChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-140.png")}
      />
      <Image
        style={[styles.whoChild10, styles.whoChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-140.png")}
      />
      <Text style={[styles.text1, styles.textTypo2]}>-</Text>
      <Text style={[styles.text2, styles.textTypo2]}>-</Text>
      <Text style={[styles.text3, styles.textTypo1]}>+</Text>
      <Text style={[styles.text4, styles.textTypo1]}>+</Text>
      <Text style={[styles.text5, styles.textTypo]}>1</Text>
      <Text style={[styles.text6, styles.textTypo]}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 43,
    width: 43,
    top: 830,
    position: "absolute",
  },
  maleTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  bookingsTypo: {
    bottom: 8,
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  staysLayout: {
    height: 25,
    width: 65,
    textAlign: "center",
    position: "absolute",
  },
  mustTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  whenLayout: {
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
  },
  lightIconLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  maleFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    width: 42,
    top: 177,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  lineViewLayout: {
    height: 3,
    width: 66,
    borderTopWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  whoChild1Layout: {
    width: 351,
    position: "absolute",
  },
  clearAllTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
  },
  favoriteIconLayout: {
    height: 24,
    width: 24,
    left: 346,
    position: "absolute",
  },
  placePosition: {
    left: 80,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  whoChild2ShadowBox: {
    borderColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 355,
    height: 56,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  whenPosition: {
    left: 23,
    textAlign: "center",
    position: "absolute",
  },
  whoChildBorder: {
    borderColor: Color.colorDarkgray_200,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  searchPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  whoChild8Layout: {
    height: 31,
    width: 31,
    left: 283,
    position: "absolute",
  },
  whoChildPosition: {
    left: 364,
    height: 31,
    width: 31,
    position: "absolute",
  },
  textTypo2: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_13xl,
    left: 291,
    textAlign: "left",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo1: {
    left: 370,
    color: Color.colorGray_400,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_6xl,
    left: 335,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    position: "absolute",
  },
  searchIcon: {
    left: 31,
  },
  whoChild: {
    top: 818,
    borderColor: Color.colorDarkgray_300,
    width: 415,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  explore: {
    top: 870,
    left: 29,
    color: Color.colorCadetblue_100,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  bookmarks: {
    left: 114,
    color: Color.colorDarkgray_300,
  },
  trending: {
    left: 22,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    bottom: 652,
    fontSize: FontSize.size_sm,
  },
  hostel: {
    left: 116,
    color: Color.colorGray_200,
    height: 25,
    width: 65,
    textAlign: "center",
    position: "absolute",
    bottom: 652,
    fontSize: FontSize.size_sm,
  },
  apartment: {
    left: 206,
    bottom: 652,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  campus: {
    bottom: 651,
    left: 297,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  bookings: {
    left: 227,
    color: Color.colorGray_200,
  },
  profiile: {
    bottom: 7,
    left: 330,
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  userCicrleLightIcon: {
    top: 829,
    left: 329,
    width: 47,
    height: 47,
    position: "absolute",
  },
  homeLightIcon: {
    top: 826,
    left: 232,
  },
  favoriteLightIcon: {
    left: 128,
  },
  whoItem: {
    top: 107,
    shadowColor: "rgba(229, 220, 220, 0.69)",
    borderRadius: Border.br_21xl,
    borderColor: Color.colorDarkgray_100,
    width: 383,
    height: 56,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 15,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  kwameNkrumahUniversity: {
    top: 26,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    left: 15,
    textAlign: "left",
  },
  searchIcon1: {
    top: 117,
    left: 41,
    width: 36,
    height: 36,
    position: "absolute",
  },
  fireIcon: {
    left: 34,
    position: "absolute",
  },
  casaParticularIcon: {
    marginLeft: -79,
    height: 42,
    width: 42,
    top: 177,
  },
  apartmentIcon: {
    marginLeft: 16,
    width: 41,
    height: 41,
    top: 177,
    left: "50%",
  },
  schoolIcon: {
    top: 179,
    left: 315,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  whoInner: {
    top: 244,
    left: 407,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 7,
    height: 55,
    position: "absolute",
  },
  lineView: {
    top: 238,
    left: 24,
  },
  rectangleIcon: {
    left: 30,
    borderRadius: Border.br_3xs,
    height: 274,
    top: 264,
    width: 351,
  },
  whoChild1: {
    top: 721,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 97,
    left: 31,
  },
  stTheresahsHostel: {
    top: 552,
    left: 34,
    position: "absolute",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  viewed30000Times: {
    top: 586,
    lineHeight: 24,
    width: 355,
    fontFamily: FontFamily.k2DRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: 34,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  dotsIcon: {
    marginTop: 62,
    marginLeft: -36,
    top: "50%",
    width: 72,
    height: 8,
  },
  textTypo3: {
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  minPerYear: {
    fontFamily: FontFamily.k2DRegular,
  },
  minPerYearContainer: {
    top: 641,
    left: 35,
    fontSize: FontSize.size_base,
  },
  favoriteLightIcon1: {
    top: 271,
  },
  favoriteLightIcon2: {
    top: 728,
  },
  knowAPlace: {
    top: 113,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  anyPlace: {
    top: 130,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  starFillIcon: {
    top: 553,
    left: 314,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 0,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
    height: 896,
    width: 414,
  },
  rectangleView: {
    top: 100,
    left: 27,
  },
  whoChild2: {
    top: 182,
    left: 25,
  },
  where: {
    bottom: 758,
    fontSize: FontSize.size_mid,
    left: 25,
    textAlign: "center",
    position: "absolute",
  },
  when: {
    bottom: 676,
    fontSize: FontSize.size_mid,
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
  },
  aBizarrePlace: {
    top: 114,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
    left: 206,
  },
  july2023: {
    top: 196,
    left: 292,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
  },
  whoChild3: {
    top: 57,
    left: 174,
  },
  stays: {
    bottom: 842,
    left: 173,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  dellLightIcon: {
    top: 24,
    left: 9,
  },
  whoChild4: {
    borderRadius: Border.br_11xl,
    width: 400,
    height: 611,
    left: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 264,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  whosJoiningYou: {
    top: 283,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
  },
  whoChild5: {
    top: 793,
    width: 401,
    left: 7,
  },
  whoChild6: {
    top: 475,
    width: 365,
    left: 25,
  },
  whoChild7: {
    top: 802,
    left: 246,
    backgroundColor: Color.colorOrange_100,
    width: 135,
    borderRadius: Border.br_5xs,
    height: 56,
    position: "absolute",
  },
  clearAll: {
    top: 815,
    left: 42,
    textDecoration: "underline",
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  search: {
    top: "91.74%",
    left: "67.39%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  male: {
    top: 411,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 31,
  },
  female: {
    top: 495,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 31,
  },
  mustBeAn: {
    bottom: 441,
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 31,
  },
  mustBeAn1: {
    bottom: 357,
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 31,
  },
  ellipseIcon: {
    top: 414,
  },
  whoChild8: {
    top: 501,
  },
  whoChild9: {
    top: 414,
  },
  whoChild10: {
    top: 501,
  },
  text1: {
    top: 406,
  },
  text2: {
    top: 493,
  },
  text3: {
    top: 405,
  },
  text4: {
    top: 492,
  },
  text5: {
    top: 413,
  },
  text6: {
    top: 500,
  },
  who: {
    overflow: "hidden",
    height: 896,
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default Who;
