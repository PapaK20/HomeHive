import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import NavigationBar from "./NavigationBar";
import TextField from "./TextField";
import { Border, Color, FontSize, FontFamily } from "../Constants/GlobalStyles";

const Payment = () => {
  return (
    <View style={styles.payment}>
      <Image
        style={[styles.cardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/card.png")}
      />
      <NavigationBar
        navigationBarPosition="absolute"
        navigationBarTop={0}
        navigationBarLeft={0}
        backgroundBackgroundColor="#fff"
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.useThisCard, styles.useThisCardFlexBox]}>
          use this card
        </Text>
      </View>
      <Image
        style={[styles.takeAPhotoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/take-a-photo-icon.png")}
      />
      <TextField
        text="Alexandra Smith"
        label="Name on card"
        textFieldPosition="absolute"
        textFieldWidth="unset"
        textFieldTop={465}
        textFieldRight={20}
        textFieldLeft={20}
        textFieldHeight={70}
      />
      <TextField
        text="4747  4747  4747  4747"
        label="Card number"
        textFieldPosition="absolute"
        textFieldWidth="unset"
        textFieldTop={558}
        textFieldRight={20}
        textFieldLeft={20}
        textFieldHeight={70}
      />
      <TextField
        text="07/21"
        label="Expiry date"
        textFieldPosition="absolute"
        textFieldWidth={176}
        textFieldTop={651}
        textFieldRight="unset"
        textFieldLeft={20}
        textFieldHeight={69}
      />
      <View style={styles.cvc}>
        <TextField
          text="474"
          label="CVC"
          textFieldPosition="absolute"
          textFieldWidth={176}
          textFieldTop={0}
          textFieldRight="unset"
          textFieldLeft={0}
          textFieldHeight={69}
        />
        <Image
          style={styles.hintIcon}
          contentFit="cover"
          source={require("../assets/hint.png")}
        />
      </View>
      <Image
        style={styles.mcSymbol1Icon}
        contentFit="cover"
        source={require("../assets/mc-symbol-1.png")}
      />
      <Text style={[styles.creditDebit, styles.useThisCardFlexBox]}>
        Credit / Debit card
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 56,
    position: "absolute",
  },
  useThisCardFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  cardIcon: {
    marginTop: -289,
    width: 374,
    height: 240,
    left: 20,
  },
  groupChild: {
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorOrange_100,
  },
  useThisCard: {
    bottom: 19,
    left: 128,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorWhite,
  },
  rectangleParent: {
    right: 20,
    bottom: 65,
    left: 20,
  },
  takeAPhotoIcon: {
    marginTop: -25,
    marginLeft: -17,
    left: "50%",
    width: 34,
    height: 29,
  },
  hintIcon: {
    top: 34,
    left: 123,
    width: 36,
    height: 26,
    position: "absolute",
  },
  cvc: {
    top: 651,
    left: 218,
    width: 176,
    height: 69,
    position: "absolute",
  },
  mcSymbol1Icon: {
    top: 593,
    right: 37,
    width: 32,
    height: 20,
    position: "absolute",
  },
  creditDebit: {
    top: 96,
    left: 21,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
    color: Color.textPrimary,
  },
  payment: {
    backgroundColor: Color.colorWhite,
    width: 414,
    height: 896,
    overflow: "hidden",
  },
});

export default Payment;
