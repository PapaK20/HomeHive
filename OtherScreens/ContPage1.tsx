import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const ContPage1 = () => {
  return (
    <LinearGradient
      style={[styles.contPage, styles.contPageLayout]}
      locations={[0, 1]}
      colors={["#fff", "#999"]}
    >
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={[styles.contPageChild, styles.contChildLayout2]} />
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.bookmarks, styles.bookingsTypo]}>Bookmarks</Text>
      <Text style={[styles.trending, styles.staysLayout]}>Trending</Text>
      <Text style={[styles.hostel, styles.hostelTypo]}>Hostel</Text>
      <Text style={[styles.apartment, styles.campusTypo1]}>Apartment</Text>
      <Text style={[styles.campus, styles.campusTypo1]}>Campus</Text>
      <Text style={[styles.bookings, styles.bookingsTypo]}>Bookings</Text>
      <Text style={[styles.profiile, styles.exploreTypo]}>Profiile</Text>
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
      <View style={[styles.contPageItem, styles.contLayout]} />
      <Text
        style={[styles.kwameNkrumahUniversity, styles.searchTypo]}
      >{`Kwame Nkrumah University Of  Science & Technology`}</Text>
      <Image
        style={[styles.searchIcon1, styles.searchIconLayout]}
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
      <View style={styles.contPageInner} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Image
        style={[styles.contPageChild1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-62.png")}
      />
      <Text style={[styles.stTheresahsHostel, styles.clearAllTypo]}>
        St Theresah’s Hostel, Ayeduase
      </Text>
      <Text style={[styles.viewed30000Times, styles.searchPosition]}>
        Viewed 30,000 times last week 1 academic year
      </Text>
      <Image
        style={[styles.dotsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/dots.png")}
      />
      <Text style={styles.minPerYearContainer}>
        <Text style={styles.textTypo}>{`₵7000 `}</Text>
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
        style={[styles.rectangleLineargradient, styles.contPageChildPosition]}
        locations={[0, 1]}
        colors={["rgba(217, 217, 217, 0.8)", "rgba(219, 219, 219, 0.7)"]}
      />
      <Image
        style={[styles.dellLightIcon, styles.dellLightIconPosition]}
        contentFit="cover"
        source={require("../assets/dell-light.png")}
      />
      <View style={[styles.contPageChild2, styles.lineViewLayout]} />
      <Text style={[styles.stays, styles.staysLayout]}>Stays</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={[styles.knowAPlace1, styles.searchTypo]}>Know a place?</Text>
      <View style={[styles.contPageChild3, styles.contChildLayout1]} />
      <View style={[styles.contPageChild4, styles.contChildBorder]} />
      <Image
        style={[styles.searchIcon2, styles.searchIconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <View style={[styles.contPageChild5, styles.contChildBorder]} />
      <Image
        style={[styles.contPageChild6, styles.contChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3977.png")}
      />
      <Image
        style={[styles.contPageChild7, styles.contChildPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-3978.png")}
      />
      <Text style={[styles.onCampus, styles.campusTypo]}>On Campus</Text>
      <Text style={[styles.offCampus, styles.campusTypo]}>Off Campus</Text>
      <Text style={[styles.duration, styles.textTypo]}>Duration</Text>
      <Text style={[styles.addGuests, styles.textTypo]}>Add guests</Text>
      <Text style={[styles.when, styles.whoTypo]}>When</Text>
      <Text style={[styles.who, styles.whoTypo]}>Who</Text>
      <View style={[styles.contPageChild8, styles.contChildPosition]} />
      <View style={[styles.contPageChild9, styles.contChildPosition]} />
      <View style={[styles.contPageChild10, styles.contChildPosition1]} />
      <Text style={[styles.search, styles.searchPosition]}>SEARCH</Text>
      <Text style={[styles.search1, styles.exploreTypo]}>Search</Text>
      <Text style={[styles.clearAll, styles.searchPosition]}>Clear all</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contPageLayout: {
    backgroundColor: "transparent",
    height: 896,
    width: 414,
  },
  iconLayout1: {
    height: 43,
    width: 43,
    top: 830,
    position: "absolute",
  },
  contChildLayout2: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
  },
  exploreTypo: {
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
  hostelTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  campusTypo1: {
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lightIconLayout: {
    height: 46,
    width: 46,
  },
  contLayout: {
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
  },
  searchTypo: {
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
  },
  searchIconLayout: {
    height: 36,
    width: 36,
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
  rectangleIconLayout: {
    width: 351,
    position: "absolute",
  },
  clearAllTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
  },
  searchPosition: {
    letterSpacing: 0,
    position: "absolute",
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
  contPageChildPosition: {
    left: 0,
    position: "absolute",
  },
  dellLightIconPosition: {
    top: 26,
    position: "absolute",
  },
  rectangleViewBorder: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
  },
  contChildLayout1: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  contChildBorder: {
    borderColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    width: 355,
    height: 56,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  contChildLayout: {
    height: 120,
    width: 120,
    top: 283,
  },
  contChildPosition1: {
    left: 241,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  campusTypo: {
    bottom: 461,
    width: 75,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  whoTypo: {
    left: 40,
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  contChildPosition: {
    left: 2,
    top: 796,
    position: "absolute",
  },
  searchIcon: {
    left: 31,
  },
  contPageChild: {
    borderColor: Color.colorDarkgray_300,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    top: 818,
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
  },
  campus: {
    bottom: 651,
    left: 297,
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
    position: "absolute",
  },
  favoriteLightIcon: {
    left: 128,
  },
  contPageItem: {
    top: 107,
    shadowColor: "rgba(229, 220, 220, 0.69)",
    borderRadius: Border.br_21xl,
    borderColor: Color.colorDarkgray_100,
    width: 383,
    height: 56,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderWidth: 1,
    position: "absolute",
    left: 15,
    borderStyle: "solid",
  },
  kwameNkrumahUniversity: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    top: 26,
    position: "absolute",
    left: 15,
    color: Color.colorBlack,
  },
  searchIcon1: {
    left: 41,
    top: 117,
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
  contPageInner: {
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
    top: 264,
    left: 30,
    height: 274,
    borderRadius: Border.br_3xs,
  },
  contPageChild1: {
    top: 721,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 97,
    left: 31,
  },
  stTheresahsHostel: {
    top: 552,
    left: 34,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    position: "absolute",
  },
  viewed30000Times: {
    top: 586,
    lineHeight: 24,
    width: 355,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    left: 34,
    textAlign: "left",
    color: Color.colorGray_200,
  },
  dotsIcon: {
    marginTop: 62,
    marginLeft: -36,
    top: "50%",
    width: 72,
    height: 8,
  },
  minPerYear: {
    fontFamily: FontFamily.k2DRegular,
  },
  minPerYearContainer: {
    top: 641,
    left: 35,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
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
    height: 896,
    width: 414,
  },
  dellLightIcon: {
    left: 13,
    height: 46,
    width: 46,
  },
  contPageChild2: {
    top: 65,
    left: 178,
  },
  stays: {
    bottom: 834,
    left: 177,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  rectangleView: {
    left: 17,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 386,
    height: 319,
    borderRadius: Border.br_3xs,
    top: 117,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  knowAPlace1: {
    fontSize: FontSize.size_13xl,
    top: 117,
    color: Color.colorBlack,
    textAlign: "center",
    left: 31,
    position: "absolute",
  },
  contPageChild3: {
    top: 185,
    borderColor: Color.colorGray_300,
    width: 355,
    height: 56,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    left: 31,
  },
  contPageChild4: {
    top: 487,
    left: 34,
  },
  searchIcon2: {
    top: 195,
    left: 35,
  },
  contPageChild5: {
    top: 585,
    left: 35,
  },
  contPageChild6: {
    left: 66,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  contPageChild7: {
    height: 120,
    width: 120,
    top: 283,
  },
  onCampus: {
    left: 88,
  },
  offCampus: {
    left: 263,
  },
  duration: {
    top: 506,
    left: 321,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  addGuests: {
    top: 602,
    left: 312,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  when: {
    bottom: 365,
  },
  who: {
    bottom: 270,
  },
  contPageChild8: {
    height: 100,
    backgroundColor: Color.colorWhite,
    left: 2,
    top: 796,
    width: 414,
  },
  contPageChild9: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    height: 1,
    width: 415,
    borderTopWidth: 1,
  },
  contPageChild10: {
    backgroundColor: Color.colorOrange_100,
    width: 153,
    height: 56,
    top: 818,
  },
  search: {
    height: "2.96%",
    width: "63%",
    top: "92.86%",
    left: "45.89%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    textAlign: "center",
  },
  search1: {
    top: 197,
    left: 68,
    fontSize: FontSize.size_3xl,
    width: 105,
    color: Color.colorGray_200,
    textAlign: "center",
    position: "absolute",
  },
  clearAll: {
    top: 831,
    left: 38,
    textDecoration: "underline",
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  contPage: {
    overflow: "hidden",
  },
});

export default ContPage1;
