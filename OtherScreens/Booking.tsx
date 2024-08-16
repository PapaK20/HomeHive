import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../Constants/GlobalStyles";

const Booking = () => {
  return (
    <View style={styles.booking1}>
      <Text style={styles.bookings}>Bookings</Text>
      <Text style={[styles.reservations, styles.reservationsTypo]}>
        Reservations
      </Text>
      <Text style={[styles.exploreThingsTo, styles.reservationsTypo]}>
        Explore things to do near here
      </Text>
      <View style={styles.booking1Child} />
      <Image
        style={styles.booking1Item}
        contentFit="cover"
        source={require("../assets/rectangle-4003.png")}
      />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search2.png")}
      />
      <View style={[styles.booking1Inner, styles.lineViewBorder]} />
      <Text style={[styles.explore, styles.ghanaTypo]}>Explore</Text>
      <Text style={[styles.bookmarks, styles.bookmarksTypo]}>Bookmarks</Text>
      <Text style={[styles.bookings1, styles.bookmarksTypo]}>Bookings</Text>
      <Text style={styles.profiile}>Profiile</Text>
      <Image
        style={styles.userCicrleLightIcon}
        contentFit="cover"
        source={require("../assets/user-cicrle-light.png")}
      />
      <Image
        style={styles.homeLightIcon}
        contentFit="cover"
        source={require("../assets/home-light2.png")}
      />
      <Image
        style={[styles.favoriteLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/favorite-light1.png")}
      />
      <Text style={[styles.stTheresahsHostel, styles.hostedByStPosition]}>
        St Theresah’s Hostel
      </Text>
      <Text style={[styles.hostedBySt, styles.in3WeeksTypo1]}>
        Hosted by St Theresah owner
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.booking1Child1} />
      <Text style={[styles.academicYear, styles.academicYearTypo]}>
        1 Academic Year
      </Text>
      <Text
        style={[
          styles.ashantiRegionKumasiAyeduasContainer,
          styles.academicYearTypo,
        ]}
      >
        <Text style={styles.in3WeeksTypo}>
          Ashanti Region Kumasi, Ayeduase 
        </Text>
        <Text style={[styles.ghana, styles.ghanaTypo]}>Ghana</Text>
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.in3Weeks, styles.in3WeeksTypo]}>In 3 weeks</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4005.png")}
      />
      <Image
        style={[styles.booking1Child2, styles.booking1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4007.png")}
      />
      <Image
        style={[styles.booking1Child3, styles.booking1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4008.png")}
      />
      <Image
        style={[styles.booking1Child4, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4006.png")}
      />
      <Text style={[styles.justForYou, styles.justForYouTypo]}>
        Just for you
      </Text>
      <Text style={[styles.adventures, styles.justForYouTypo]}>Adventures</Text>
      <Text style={styles.experiences}>18 experiences</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reservationsTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    height: 43,
    width: 43,
    top: 837,
    position: "absolute",
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  ghanaTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  bookmarksTypo: {
    bottom: 1,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  hostedByStPosition: {
    left: 44,
    color: Color.colorBlack,
  },
  in3WeeksTypo1: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  academicYearTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  in3WeeksTypo: {
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorBlack,
  },
  rectangleIconLayout: {
    height: 84,
    width: 92,
    top: 678,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  booking1ChildLayout: {
    height: 39,
    top: 786,
    width: 92,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    position: "absolute",
  },
  justForYouTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    left: 120,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bookings: {
    top: 56,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    color: Color.textPrimary,
    textAlign: "center",
    left: 26,
    position: "absolute",
  },
  reservations: {
    top: 149,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    left: 26,
  },
  exploreThingsTo: {
    top: 643,
    fontSize: FontSize.size_xl,
    left: 22,
    textAlign: "left",
  },
  booking1Child: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 372,
    width: 354,
    borderRadius: Border.br_3xs,
    left: 28,
    top: 212,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  booking1Item: {
    height: 150,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    width: 354,
    left: 28,
    top: 212,
    position: "absolute",
  },
  searchIcon: {
    left: 31,
  },
  booking1Inner: {
    top: 825,
    left: 0,
    width: 415,
  },
  explore: {
    top: 877,
    left: 29,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  bookmarks: {
    left: 114,
    color: Color.colorDarkgray_300,
  },
  bookings1: {
    left: 227,
    color: Color.colorCadetblue_100,
  },
  profiile: {
    bottom: 0,
    left: 330,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  userCicrleLightIcon: {
    top: 836,
    left: 329,
    width: 47,
    height: 47,
    position: "absolute",
  },
  homeLightIcon: {
    top: 833,
    left: 232,
    width: 46,
    height: 46,
    position: "absolute",
  },
  favoriteLightIcon: {
    left: 128,
  },
  stTheresahsHostel: {
    top: 384,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    left: 44,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  hostedBySt: {
    top: 416,
    lineHeight: 24,
    letterSpacing: 0,
    left: 44,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "left",
  },
  lineView: {
    top: 463,
    left: 56,
    width: 302,
  },
  booking1Child1: {
    left: 144,
    borderColor: Color.colorGray_200,
    borderRightWidth: 1,
    width: 1,
    height: 83,
    top: 481,
    borderStyle: "solid",
    position: "absolute",
  },
  academicYear: {
    top: 486,
    left: 44,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  ghana: {
    color: Color.colorDarkgray_300,
  },
  ashantiRegionKumasiAyeduasContainer: {
    left: 152,
    lineHeight: 27,
    top: 481,
    letterSpacing: 0,
  },
  rectangleView: {
    top: 218,
    left: 42,
    width: 116,
    height: 28,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  in3Weeks: {
    top: 223,
    left: 67,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
    textAlign: "center",
  },
  rectangleIcon: {
    left: 22,
  },
  booking1Child2: {
    left: 22,
  },
  booking1Child3: {
    left: 287,
  },
  booking1Child4: {
    left: 284,
  },
  justForYou: {
    top: 686,
  },
  adventures: {
    top: 790,
  },
  experiences: {
    top: 714,
    left: 120,
    color: Color.colorGray_200,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  booking1: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Booking;
