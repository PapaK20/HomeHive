import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../Constants/GlobalStyles";

const When = () => {
  return (
    <View style={[styles.when1, styles.when1Layout]}>
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={[styles.when1Child, styles.when1ChildLayout1]} />
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
      <View style={styles.when1Item} />
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
      <View style={styles.when1Inner} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.when1Child1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Image
        style={[styles.when1Child1, styles.when1Child1Layout]}
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
        style={[styles.rectangleLineargradient, styles.when1Layout]}
        locations={[0, 1]}
        colors={["rgba(217, 217, 217, 0.8)", "rgba(219, 219, 219, 0.7)"]}
      />
      <View style={[styles.rectangleView, styles.when1Child7Layout]} />
      <Text style={[styles.where, styles.whereTypo]}>Where</Text>
      <Text style={[styles.aBizarrePlace, styles.whereTypo]}>
        A bizarre place, Zodia
      </Text>
      <View style={[styles.when1Child2, styles.lineViewLayout]} />
      <Text style={[styles.stays, styles.staysLayout]}>Stays</Text>
      <Image
        style={[styles.dellLightIcon, styles.lightIconLayout]}
        contentFit="cover"
        source={require("../assets/dell-light.png")}
      />
      <View style={[styles.when1Child3, styles.when1ChildLayout]} />
      <Text style={[styles.whenAreYou, styles.whenAreYouTypo]}>
        When are you moving?
      </Text>
      <View style={[styles.when1Child4, styles.when1ChildLayout]} />
      <View style={[styles.when1Child5, styles.when1ChildLayout]} />
      <Text style={[styles.chooseDates, styles.imFlexiblePosition]}>
        Choose dates
      </Text>
      <Text style={[styles.imFlexible, styles.imFlexiblePosition]}>
        I’m flexible
      </Text>
      <Text style={[styles.july2024, styles.july2024Typo]}>July 2024</Text>
      <Text style={[styles.august2024, styles.july2024Typo]}>August 2024</Text>
      <Text style={[styles.s714Container, styles.containerTypo]}>
        <Text style={styles.s}>S</Text>
        <Text style={styles.text1}>{`    

  `}</Text>
        <Text style={styles.s}>{`7
`}</Text>
        <Text style={styles.text1}>{`  14


21


28  `}</Text>
      </Text>
      <Text style={[styles.m18152229Container, styles.containerTypo]}>
        <Text style={styles.s}>M</Text>
        <Text style={styles.text1}>{` 
 
 `}</Text>
        <Text style={styles.s}>1</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>8</Text>
        <Text style={styles.text1}>   15   22   29</Text>
      </Text>
      <Text style={[styles.t29162330Container, styles.containerTypo]}>
        <Text style={styles.s}>T</Text>
        <Text style={styles.text1}>{` 
 
 `}</Text>
        <Text style={styles.s}>2</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>9</Text>
        <Text style={styles.text1}>   16   23   30</Text>
      </Text>
      <Text style={[styles.w310172431, styles.containerTypo]}>
        <Text style={styles.s}>W</Text>
        <Text style={styles.text1}>{` 

  `}</Text>
        <Text style={styles.s}>3</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>10</Text>
        <Text style={styles.text1}>   17   24   31</Text>
      </Text>
      <Text style={[styles.t4111825, styles.containerTypo]}>
        <Text style={styles.s}>T</Text>
        <Text style={styles.text1}>{` 

  `}</Text>
        <Text style={styles.s}>4</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>11</Text>
        <Text style={styles.text1}>   18   25</Text>
      </Text>
      <Text style={[styles.f5121926, styles.containerTypo]}>
        <Text style={styles.s}>F</Text>
        <Text style={styles.text1}>{` 

  `}</Text>
        <Text style={styles.s}>5</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>12</Text>
        <Text style={styles.text1}>   19   26</Text>
      </Text>
      <Text style={[styles.s6132027, styles.containerTypo]}>
        <Text style={styles.s}>S</Text>
        <Text style={styles.text1}>{`  

 `}</Text>
        <Text style={styles.s}>6</Text>
        <Text style={styles.text1}>   </Text>
        <Text style={styles.s}>13</Text>
        <Text style={styles.text1}>   20   27</Text>
      </Text>
      <View style={[styles.when1Child6, styles.when1ChildLayout1]} />
      <View style={[styles.when1Child7, styles.when1Child7Layout]} />
      <Text style={[styles.clear, styles.nextPosition]}>Clear</Text>
      <Text style={[styles.next, styles.nextPosition]}>NEXT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  when1Layout: {
    height: 896,
    width: 414,
  },
  iconLayout1: {
    height: 43,
    width: 43,
    top: 830,
    position: "absolute",
  },
  when1ChildLayout1: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
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
  when1Child1Layout: {
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
  when1Child7Layout: {
    borderRadius: Border.br_5xs,
    height: 56,
    position: "absolute",
  },
  whereTypo: {
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  when1ChildLayout: {
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
  july2024Typo: {
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 36,
    width: 113,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  containerTypo: {
    height: 434,
    top: 335,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
    textAlign: "center",
    position: "absolute",
  },
  searchIcon: {
    left: 31,
  },
  when1Child: {
    top: 818,
    borderColor: Color.colorDarkgray_300,
    width: 415,
    left: 0,
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
  when1Item: {
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
    height: 36,
    width: 36,
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
  when1Inner: {
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
  when1Child1: {
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
  when1Child2: {
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
  when1Child3: {
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
  when1Child4: {
    top: 257,
    width: 339,
    backgroundColor: Color.colorGainsboro_200,
    height: 42,
    left: 31,
  },
  when1Child5: {
    top: 260,
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
    left: 34,
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
  july2024: {
    top: 379,
  },
  august2024: {
    top: 765,
  },
  s: {
    color: Color.colorGray_200,
  },
  text1: {
    color: Color.colorBlack,
  },
  s714Container: {
    left: 24,
    width: 36,
  },
  m18152229Container: {
    left: 79,
    width: 36,
  },
  t29162330Container: {
    left: 134,
    width: 37,
  },
  w310172431: {
    left: 190,
    width: 36,
  },
  t4111825: {
    left: 245,
    width: 36,
  },
  f5121926: {
    left: 300,
    width: 36,
  },
  s6132027: {
    left: 355,
    width: 36,
  },
  when1Child6: {
    top: 793,
    borderColor: Color.colorDarkgray_200,
    width: 401,
    left: 7,
  },
  when1Child7: {
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
  when1: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 896,
    width: 414,
  },
});

export default When;
