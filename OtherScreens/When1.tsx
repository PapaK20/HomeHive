import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const When1 = () => {
  return (
    <View style={styles.when2}>
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={styles.when2Child} />
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.bookmarks, styles.bookingsTypo]}>Bookmarks</Text>
      <Text style={[styles.trending, styles.staysLayout]}>Trending</Text>
      <Text style={[styles.hostel, styles.clearTypo1]}>Hostel</Text>
      <Text style={[styles.apartment, styles.whereTypo1]}>Apartment</Text>
      <Text style={[styles.campus, styles.whereTypo1]}>Campus</Text>
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
      <View style={styles.when2Item} />
      <Text
        style={[styles.kwameNkrumahUniversity, styles.whenAreYouTypo]}
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
        source={require("../assets/casa-particular1.png")}
      />
      <Image
        style={[styles.apartmentIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/apartment1.png")}
      />
      <Image
        style={styles.schoolIcon}
        contentFit="cover"
        source={require("../assets/school.png")}
      />
      <View style={styles.when2Inner} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.when2Child1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Image
        style={[styles.when2Child1, styles.when2Child1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-62.png")}
      />
      <Text style={[styles.stTheresahsHostel, styles.clearTypo]}>
        St Theresah’s Hostel, Ayeduase
      </Text>
      <Text style={[styles.viewed30000Times, styles.nextPosition]}>
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
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["rgba(217, 217, 217, 0.8)", "rgba(219, 219, 219, 0.7)"]}
      />
      <View style={[styles.rectangleView, styles.when2Child8Layout]} />
      <Text style={[styles.where, styles.whereTypo]}>Where</Text>
      <Text style={[styles.aBizarrePlace, styles.whereTypo]}>
        A bizarre place, Zodia
      </Text>
      <View style={[styles.when2Child2, styles.lineViewLayout]} />
      <Text style={[styles.stays, styles.staysLayout]}>Stays</Text>
      <Image
        style={[styles.dellLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light.png")}
      />
      <View style={[styles.when2Child3, styles.when2ChildLayout2]} />
      <Text style={[styles.whenAreYou, styles.whenAreYouTypo]}>
        When are you moving?
      </Text>
      <View style={[styles.when2Child4, styles.when2ChildLayout2]} />
      <View style={[styles.when2Child5, styles.when2ChildLayout2]} />
      <Text style={[styles.chooseDates, styles.imFlexiblePosition]}>
        Choose dates
      </Text>
      <Text style={[styles.imFlexible, styles.imFlexiblePosition]}>
        I’m flexible
      </Text>
      <View style={[styles.when2Child6, styles.when2ChildBorder1]} />
      <View style={[styles.when2Child7, styles.when2ChildBorder1]} />
      <View style={[styles.when2Child8, styles.when2Child8Layout]} />
      <Text style={[styles.clear, styles.nextPosition]}>Clear</Text>
      <Text style={[styles.next, styles.nextPosition]}>NEXT</Text>
      <Text style={styles.goAnytime}>Go anytime</Text>
      <View style={[styles.when2Child9, styles.when2ChildBorder]} />
      <View style={[styles.when2Child10, styles.when2ChildBorder]} />
      <View style={[styles.when2Child11, styles.when2ChildBorder]} />
      <View style={[styles.when2Child12, styles.when2ChildBorder]} />
      <Image
        style={[styles.dateTodayLightIcon, styles.dateIconLayout]}
        contentFit="cover"
        source={require("../assets/date-today-light.png")}
      />
      <Image
        style={[styles.dateTodayLightIcon1, styles.dateIconLayout]}
        contentFit="cover"
        source={require("../assets/date-today-light.png")}
      />
      <Image
        style={[styles.dateTodayLightIcon2, styles.dateIconLayout]}
        contentFit="cover"
        source={require("../assets/date-today-light.png")}
      />
      <Text style={[styles.july2023, styles.july2023Typo]}>
        <Text style={styles.july}>July </Text>
        <Text style={styles.text1}>2023</Text>
      </Text>
      <Text style={[styles.august2023, styles.july2023Typo]}>
        <Text style={styles.july}>August </Text>
        <Text style={styles.text1}>2023</Text>
      </Text>
      <Text style={[styles.september2023, styles.july2023Typo]}>
        <Text style={styles.july}>September </Text>
        <Text style={styles.text1}>2023</Text>
      </Text>
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
  clearTypo1: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  whereTypo1: {
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    textAlign: "center",
  },
  lightIconLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  whenAreYouTypo: {
    fontFamily: FontFamily.k2DExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    width: 42,
    height: 42,
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
  when2Child1Layout: {
    width: 351,
    position: "absolute",
  },
  clearTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
  },
  nextPosition: {
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
  when2Child8Layout: {
    borderRadius: Border.br_5xs,
    height: 56,
    position: "absolute",
  },
  whereTypo: {
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  when2ChildLayout2: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  imFlexiblePosition: {
    width: 113,
    top: 265,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  when2ChildBorder1: {
    borderColor: Color.colorDarkgray_200,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  when2ChildBorder: {
    height: 127,
    top: 477,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  dateIconLayout: {
    height: 45,
    width: 45,
    top: 500,
    position: "absolute",
  },
  july2023Typo: {
    fontSize: FontSize.size_mini,
    top: 549,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  searchIcon: {
    left: 31,
  },
  when2Child: {
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
    position: "absolute",
  },
  campus: {
    bottom: 651,
    left: 297,
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
  when2Item: {
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
    left: 15,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  kwameNkrumahUniversity: {
    top: 26,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: 15,
    fontWeight: "800",
  },
  searchIcon1: {
    top: 117,
    left: 41,
    width: 36,
    height: 36,
    position: "absolute",
  },
  fireIcon: {
    height: 42,
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
  when2Inner: {
    top: 244,
    left: 407,
    borderRadius: Border.br_xl,
    width: 7,
    height: 55,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  lineView: {
    top: 238,
    left: 24,
  },
  rectangleIcon: {
    top: 264,
    left: 30,
    borderRadius: Border.br_3xs,
    height: 274,
  },
  when2Child1: {
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
  textTypo: {
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
    left: 0,
    position: "absolute",
    height: 896,
    width: 414,
  },
  rectangleView: {
    top: 100,
    left: 27,
    borderColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
    width: 355,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  where: {
    bottom: 758,
    left: 25,
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    textAlign: "center",
  },
  aBizarrePlace: {
    left: 205,
    width: 198,
    top: 113,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DRegular,
    textAlign: "left",
  },
  when2Child2: {
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
  when2Child3: {
    top: 182,
    width: 400,
    height: 693,
    left: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
  },
  whenAreYou: {
    top: 201,
    left: 26,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
  },
  when2Child4: {
    top: 257,
    width: 339,
    backgroundColor: Color.colorGainsboro_200,
    height: 42,
    left: 31,
  },
  when2Child5: {
    top: 260,
    left: 195,
    width: 170,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
    height: 36,
  },
  chooseDates: {
    left: 62,
    textAlign: "left",
  },
  imFlexible: {
    left: 228,
    textAlign: "center",
  },
  when2Child6: {
    top: 793,
    width: 401,
    left: 7,
  },
  when2Child7: {
    top: 335,
    width: 365,
    left: 25,
  },
  when2Child8: {
    top: 802,
    left: 246,
    backgroundColor: Color.colorDarkslategray_600,
    width: 135,
  },
  clear: {
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
  next: {
    top: "91.74%",
    left: "70.05%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  goAnytime: {
    top: 379,
    left: 21,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    width: 113,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  when2Child9: {
    left: 16,
    width: 109,
    borderRadius: Border.br_smi,
    height: 127,
    top: 477,
  },
  when2Child10: {
    left: 140,
    width: 109,
    borderRadius: Border.br_smi,
    height: 127,
    top: 477,
  },
  when2Child11: {
    left: 264,
    width: 109,
    borderRadius: Border.br_smi,
    height: 127,
    top: 477,
  },
  when2Child12: {
    left: 388,
    borderTopLeftRadius: Border.br_smi,
    borderBottomLeftRadius: Border.br_smi,
    width: 19,
    height: 127,
    top: 477,
  },
  dateTodayLightIcon: {
    left: 48,
  },
  dateTodayLightIcon1: {
    left: 172,
  },
  dateTodayLightIcon2: {
    left: 296,
  },
  july: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorGray_200,
  },
  july2023: {
    left: 51,
  },
  august2023: {
    left: 170,
  },
  september2023: {
    left: 281,
  },
  when2: {
    overflow: "hidden",
    height: 896,
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default When1;
