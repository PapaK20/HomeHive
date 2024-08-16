import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../Constants/GlobalStyles";

const ContPage = () => {
  return (
    <View style={styles.contPage}>
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <View style={[styles.contPageChild, styles.contBorder]} />
      <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      <Text style={[styles.bookmarks, styles.bookingsTypo]}>Bookmarks</Text>
      <Text style={styles.trending}>Trending</Text>
      <Text style={styles.hostel}>Hostel</Text>
      <Text style={[styles.apartment, styles.campusTypo]}>Apartment</Text>
      <Text style={[styles.campus, styles.campusTypo]}>Campus</Text>
      <Text style={[styles.bookings, styles.bookingsTypo]}>Bookings</Text>
      <Text style={[styles.profiile, styles.exploreTypo]}>Profiile</Text>
      <Image
        style={styles.userCicrleLightIcon}
        contentFit="cover"
        source={require("../assets/user-cicrle-light.png")}
      />
      <Image
        style={styles.homeLightIcon}
        contentFit="cover"
        source={require("../assets/home-light.png")}
      />
      <Image
        style={[styles.favoriteLightIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/favorite-light1.png")}
      />
      <View style={[styles.contPageItem, styles.contBorder]} />
      <Text
        style={[styles.kwameNkrumahUniversity, styles.stTheresahsHostelFlexBox]}
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
        source={require("../assets/apartment2.png")}
      />
      <Image
        style={styles.schoolIcon}
        contentFit="cover"
        source={require("../assets/school.png")}
      />
      <View style={styles.contPageInner} />
      <View style={[styles.lineView, styles.contBorder]} />
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
      <Text style={[styles.stTheresahsHostel, styles.stTheresahsHostelFlexBox]}>
        St Theresah’s Hostel, Ayeduase
      </Text>
      <Text style={[styles.viewed30000Times, styles.viewed30000TimesTypo]}>
        Viewed 30,000 times last week 1 academic year
      </Text>
      <Image
        style={[styles.dotsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/dots.png")}
      />
      <Text style={[styles.minPerYearContainer, styles.viewed30000TimesTypo]}>
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
  contBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  exploreTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    position: "absolute",
  },
  bookingsTypo: {
    bottom: 8,
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  campusTypo: {
    width: 75,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  stTheresahsHostelFlexBox: {
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
  rectangleIconLayout: {
    width: 351,
    position: "absolute",
  },
  viewed30000TimesTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  searchIcon: {
    left: 31,
  },
  contPageChild: {
    top: 818,
    left: 0,
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 1,
    width: 415,
    height: 1,
  },
  explore: {
    top: 870,
    left: 29,
    color: Color.colorCadetblue_100,
  },
  bookmarks: {
    left: 114,
    color: Color.colorDarkgray_300,
  },
  trending: {
    left: 22,
    height: 25,
    width: 65,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    bottom: 652,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  hostel: {
    left: 116,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    height: 25,
    width: 65,
    bottom: 652,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  apartment: {
    left: 206,
    bottom: 652,
    width: 75,
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
    width: 46,
    height: 46,
    position: "absolute",
  },
  favoriteLightIcon: {
    left: 128,
  },
  contPageItem: {
    top: 107,
    shadowColor: "rgba(229, 220, 220, 0.69)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_21xl,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 383,
    height: 56,
    left: 15,
    backgroundColor: Color.colorWhite,
  },
  kwameNkrumahUniversity: {
    top: 26,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    left: 15,
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
    borderColor: Color.colorBlack,
    borderTopWidth: 3,
    width: 66,
    height: 3,
  },
  rectangleIcon: {
    top: 264,
    left: 30,
    borderRadius: Border.br_3xs,
    height: 274,
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
    fontSize: FontSize.size_lg,
    left: 34,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  viewed30000Times: {
    top: 586,
    letterSpacing: 0,
    lineHeight: 24,
    width: 355,
    fontFamily: FontFamily.k2DRegular,
    left: 34,
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
    color: Color.colorBlack,
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
    left: 80,
  },
  starFillIcon: {
    top: 553,
    left: 314,
    width: 20,
    height: 20,
    position: "absolute",
  },
  contPage: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ContPage;
