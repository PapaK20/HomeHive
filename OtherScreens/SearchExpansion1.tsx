import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../Constants/GlobalStyles";

const SearchExpansion1 = () => {
  return (
    <View style={styles.searchExpansion2}>
      <View style={styles.searchExpansion2Child} />
      <Text style={styles.stays}>Stays</Text>
      <Image
        style={styles.arrowAltLeftAltIcon}
        contentFit="cover"
        source={require("../assets/arrow-alt-left-alt1.png")}
      />
      <View style={styles.searchExpansion2Item} />
      <View style={styles.searchExpansion2Inner} />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={styles.aBizarr}>A bizarr</Text>
      <View style={[styles.rectangleView, styles.searchChildLayout]} />
      <View style={[styles.searchExpansion2Child1, styles.searchChildLayout]} />
      <View style={[styles.searchExpansion2Child2, styles.searchChildLayout]} />
      <Image
        style={[styles.pinDuotoneLineIcon, styles.pinIconLayout]}
        contentFit="cover"
        source={require("../assets/pin-duotone-line.png")}
      />
      <Image
        style={[styles.pinDuotoneLineIcon1, styles.pinIconLayout]}
        contentFit="cover"
        source={require("../assets/pin-duotone-line.png")}
      />
      <Image
        style={[styles.pinDuotoneLineIcon2, styles.pinIconLayout]}
        contentFit="cover"
        source={require("../assets/pin-duotone-line.png")}
      />
      <Text style={[styles.aBizarrePlace, styles.bizarreTypo]}>
        A bizarre place
      </Text>
      <Text style={[styles.aBizarrePalace, styles.bizarreTypo]}>
        A bizarre palace
      </Text>
      <Text style={[styles.aBizarreWorld, styles.bizarreTypo]}>
        A bizarre world
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchChildLayout: {
    height: 64,
    width: 72,
    backgroundColor: Color.colorGainsboro_200,
    left: 35,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  pinIconLayout: {
    height: 44,
    width: 44,
    left: 49,
    position: "absolute",
  },
  bizarreTypo: {
    textAlign: "left",
    left: 120,
    width: 157,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  searchExpansion2Child: {
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
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    width: 65,
    height: 25,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  arrowAltLeftAltIcon: {
    top: 28,
    left: 16,
    width: 42,
    height: 42,
    position: "absolute",
  },
  searchExpansion2Item: {
    top: 89,
    left: 0,
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
  searchExpansion2Inner: {
    top: 121,
    left: 29,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 355,
    height: 56,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  searchIcon: {
    top: 131,
    left: 37,
    width: 36,
    height: 36,
    position: "absolute",
  },
  aBizarr: {
    top: 133,
    left: 73,
    width: 157,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    top: 230,
  },
  searchExpansion2Child1: {
    top: 313,
  },
  searchExpansion2Child2: {
    top: 396,
  },
  pinDuotoneLineIcon: {
    top: 240,
  },
  pinDuotoneLineIcon1: {
    top: 323,
  },
  pinDuotoneLineIcon2: {
    top: 406,
  },
  aBizarrePlace: {
    top: 245,
  },
  aBizarrePalace: {
    top: 328,
  },
  aBizarreWorld: {
    top: 411,
  },
  searchExpansion2: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 896,
    overflow: "hidden",
    width: 414,
  },
});

export default SearchExpansion1;
