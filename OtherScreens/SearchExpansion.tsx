import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../Constants/GlobalStyles";

const SearchExpansion = () => {
  return (
    <View style={styles.searchExpansion1}>
      <View style={styles.searchExpansion1Child} />
      <Text style={[styles.stays, styles.staysTypo]}>Stays</Text>
      <Image
        style={styles.arrowAltLeftAltIcon}
        contentFit="cover"
        source={require("../assets/arrow-alt-left-alt1.png")}
      />
      <View style={styles.searchExpansion1Item} />
      <View
        style={[styles.searchExpansion1Inner, styles.rectangleViewLayout]}
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Text style={[styles.aBizarrePlace, styles.searchTypo]}>
        A bizarre place
      </Text>
      <Text style={[styles.recentSearches, styles.staysTypo]}>
        Recent searches
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={styles.timeDuotoneLineIcon}
        contentFit="cover"
        source={require("../assets/time-duotone-line.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  staysTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  searchTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  searchExpansion1Child: {
    top: 63,
    left: 175,
    borderColor: Color.colorBlack,
    borderTopWidth: 3,
    width: 66,
    height: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  stays: {
    bottom: 836,
    left: 174,
    width: 65,
    height: 25,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  arrowAltLeftAltIcon: {
    top: 28,
    left: 16,
    width: 42,
    height: 42,
    position: "absolute",
  },
  searchExpansion1Item: {
    top: 89,
    left: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 807,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: 414,
  },
  searchExpansion1Inner: {
    top: 121,
    left: 29,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 355,
    height: 56,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  searchIcon: {
    top: 131,
    left: 37,
    width: 36,
    height: 36,
    position: "absolute",
  },
  search: {
    top: 133,
    left: 88,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    width: 105,
  },
  aBizarrePlace: {
    top: 245,
    left: 100,
    width: 157,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  recentSearches: {
    bottom: 676,
    left: 35,
    fontSize: FontSize.size_mini,
  },
  rectangleView: {
    top: 239,
    left: 27,
    backgroundColor: Color.colorGainsboro_200,
    width: 72,
    height: 64,
  },
  timeDuotoneLineIcon: {
    top: 253,
    left: 46,
    width: 37,
    height: 37,
    position: "absolute",
  },
  searchExpansion1: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 896,
    overflow: "hidden",
    width: 414,
  },
});

export default SearchExpansion;
