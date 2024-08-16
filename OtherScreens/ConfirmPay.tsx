import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../Constants/GlobalStyles";

const ConfirmPay = () => {
  return (
    <View style={styles.confirmPay}>
      <Image
        style={styles.arrowAltLeftAltIcon}
        contentFit="cover"
        source={require("../assets/arrow-alt-left-alt.png")}
      />
      <Text style={[styles.confirmAndPay, styles.payClr]}>Confirm and pay</Text>
      <Image
        style={styles.confirmPayChild}
        contentFit="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <Text style={[styles.stTheresahsHostel, styles.feeTypo]}>
        St Theresah’s Hostel
      </Text>
      <Text style={[styles.duration, styles.editTypo]}>Duration</Text>
      <Text style={[styles.edit, styles.editText]}>Edit</Text>
      <Text style={[styles.edit1, styles.edit1Typo]}>Edit</Text>
      <Text style={[styles.occupants, styles.edit1Typo]}>Occupants</Text>
      <Text
        style={[styles.pay7500Now, styles.nowPosition]}
      >{`Pay ₵7500 now `}</Text>
      <Text style={[styles.totalghc, styles.text3Typo]}>Total(GHC)</Text>
      <Text style={[styles.payWith, styles.feeTypo]}>Pay with</Text>
      <Text style={[styles.cancellationPolicy, styles.feeTypo]}>
        Cancellation policy
      </Text>
      <Text style={[styles.groundRules, styles.feeTypo]}>Ground rules</Text>
      <Text
        style={[styles.profilePhoto, styles.feeTypo]}
      >{`Profile photo `}</Text>
      <Text
        style={[styles.payPartNow, styles.nowPosition]}
      >{`Pay part now, part later `}</Text>
      <Text style={[styles.academicYear, styles.text4Typo]}>
        1 academic year
      </Text>
      <Text style={[styles.occupant, styles.text4Typo]}>1 occupant</Text>
      <Text style={[styles.accommodationFee, styles.textTypo1]}>
        Accommodation fee
      </Text>
      <Text style={[styles.paymentMethod, styles.addTypo]}>Payment method</Text>
      <Text style={[styles.hostsWantTo, styles.addTypo]}>
        Hosts want to know who’s staying at their place.
      </Text>
      <Text style={[styles.freeCancellationBefore, styles.weAskEveryTypo]}>
        Free cancellation before 24hrs of stay for full refund. After 24hrs
        no refunds.
      </Text>
      <Text
        style={[styles.weAskEvery, styles.weAskEveryTypo]}
      >{`We ask every guest to remember a few simple things about what makes a great guest.  • Follow the hostels rules • Treat your Host’s home like your own `}</Text>
      <Text style={[styles.hostelServicingFee, styles.text1Typo]}>
        Hostel servicing fee
      </Text>
      <Text style={[styles.stayfinderServiceFee, styles.text2Typo]}>
        StayFinder service fee
      </Text>
      <Text style={[styles.text, styles.textTypo]}>₵5000</Text>
      <Text style={[styles.text1, styles.textTypo]}>₵1000</Text>
      <Text style={[styles.text2, styles.textTypo]}>₵1250</Text>
      <Text style={[styles.text3, styles.textTypo]}>₵7500</Text>
      <Text style={[styles.dueToday2500, styles.text4Typo]}>
        ₵5000 due today, ₵2500 on school years end.
      </Text>
      <Text style={[styles.text4, styles.text4Typo]}>4.64(1921)</Text>
      <Image
        style={styles.starFillIcon}
        contentFit="cover"
        source={require("../assets/star-fill.png")}
      />
      <Text
        style={[
          styles.freeCancellationBeforeContainer,
          styles.yourReservationPosition,
        ]}
      >
        <Text style={styles.payTypo}>{`Free cancellation before 24hrs. `}</Text>
        <Text style={styles.text4Typo}>
          Get a full refund if you change your mind.
        </Text>
      </Text>
      <Image
        style={styles.dateTodayLightIcon}
        contentFit="cover"
        source={require("../assets/date-today-light.png")}
      />
      <View style={[styles.confirmPayItem, styles.confirmLayout]} />
      <View style={[styles.confirmPayInner, styles.confirmLayout]} />
      <View style={[styles.rectangleView, styles.confirmChildLayout1]} />
      <View style={[styles.confirmPayChild1, styles.confirmChildLayout1]} />
      <View style={[styles.confirmPayChild2, styles.confirmChildLayout1]} />
      <View style={[styles.confirmPayChild3, styles.confirmChildLayout1]} />
      <View style={[styles.confirmPayChild4, styles.confirmChildLayout1]} />
      <View style={[styles.confirmPayChild5, styles.confirmChildLayout1]} />
      <Text style={[styles.yourReservation, styles.yourReservationPosition]}>
        Your reservation
      </Text>
      <Text style={[styles.chooseHowTo, styles.payTypo]}>
        Choose how to pay
      </Text>
      <Text style={[styles.priceDetails, styles.payTypo]}>Price details</Text>
      <Text style={[styles.requiredForYour, styles.payTypo]}>
        Required for your reservation
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-136.png")}
      />
      <Image
        style={[styles.confirmPayChild6, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-158.png")}
      />
      <Image
        style={styles.confirmPayChild7}
        contentFit="cover"
        source={require("../assets/ellipse-137.png")}
      />
      <View style={[styles.confirmPayChild8, styles.confirmChildLayout]} />
      <View style={[styles.confirmPayChild9, styles.confirmChildLayout]} />
      <Text style={[styles.add, styles.addTypo]}>Add</Text>
      <Image
        style={[styles.processorvisaIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorvisa.png")}
      />
      <Image
        style={[styles.processoramexIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processoramex.png")}
      />
      <Image
        style={[styles.processormastercardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/processormastercard.png")}
      />
      <Image
        style={[styles.processorpaypalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorpaypal.png")}
      />
      <Image
        style={[styles.processorgooglepayIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorgooglepay.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3964.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  payClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  feeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  editTypo: {
    top: 434,
    textAlign: "left",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  editText: {
    textDecoration: "underline",
    left: 349,
  },
  edit1Typo: {
    top: 506,
    textAlign: "left",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  nowPosition: {
    left: 25,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  text3Typo: {
    top: 1058,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  text4Typo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  textTypo1: {
    top: 907,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  addTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  weAskEveryTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text1Typo: {
    top: 954,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  text2Typo: {
    top: 1001,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  textTypo: {
    textAlign: "right",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  yourReservationPosition: {
    left: 17,
    color: Color.colorBlack,
    position: "absolute",
  },
  confirmLayout: {
    height: 16,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  confirmChildLayout1: {
    height: 10,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  payTypo: {
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  ellipseIconLayout: {
    height: 22,
    width: 22,
    left: 361,
    position: "absolute",
  },
  confirmChildLayout: {
    width: 59,
    borderWidth: 1,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 35,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "40.07%",
    top: "58.56%",
    width: "8.94%",
    height: "1.38%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    height: 25,
    top: 1218,
    position: "absolute",
  },
  arrowAltLeftAltIcon: {
    top: 12,
    left: 10,
    width: 35,
    height: 35,
    position: "absolute",
  },
  confirmAndPay: {
    top: 15,
    left: 74,
    fontWeight: "600",
    fontFamily: FontFamily.k2DSemiBold,
    textAlign: "center",
    fontSize: FontSize.size_3xl,
  },
  confirmPayChild: {
    top: 87,
    width: 138,
    height: 110,
    borderRadius: Border.br_5xs,
    left: 26,
    position: "absolute",
  },
  stTheresahsHostel: {
    top: 94,
    left: 189,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  duration: {
    left: 21,
  },
  edit: {
    top: 434,
    textAlign: "left",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  edit1: {
    textDecoration: "underline",
    left: 349,
  },
  occupants: {
    left: 21,
  },
  pay7500Now: {
    top: 671,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  totalghc: {
    left: 25,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  payWith: {
    top: 1149,
    left: 27,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  cancellationPolicy: {
    top: 1511,
    left: 27,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  groundRules: {
    top: 1661,
    left: 27,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  profilePhoto: {
    top: 1364,
    left: 27,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  payPartNow: {
    top: 732,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  academicYear: {
    top: 459,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  occupant: {
    top: 531,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  accommodationFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 26,
    color: Color.colorBlack,
    position: "absolute",
  },
  paymentMethod: {
    top: 1181,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 27,
  },
  hostsWantTo: {
    top: 1396,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 27,
  },
  freeCancellationBefore: {
    top: 1543,
    left: 26,
  },
  weAskEvery: {
    top: 1693,
    left: 27,
  },
  hostelServicingFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 26,
    color: Color.colorBlack,
    position: "absolute",
  },
  stayfinderServiceFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 26,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 907,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    left: 349,
    textAlign: "right",
  },
  text1: {
    left: 354,
    top: 954,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  text2: {
    left: 356,
    top: 1001,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  text3: {
    left: 348,
    top: 1058,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  dueToday2500: {
    top: 757,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  text4: {
    top: 174,
    left: 206,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  starFillIcon: {
    top: 173,
    left: 186,
    width: 20,
    height: 20,
    position: "absolute",
  },
  freeCancellationBeforeContainer: {
    top: 259,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  dateTodayLightIcon: {
    top: 265,
    width: 45,
    height: 45,
    left: 341,
    position: "absolute",
  },
  confirmPayItem: {
    top: 352,
  },
  confirmPayInner: {
    top: 578,
  },
  rectangleView: {
    top: 835,
  },
  confirmPayChild1: {
    top: 1115,
  },
  confirmPayChild2: {
    top: 1277,
  },
  confirmPayChild3: {
    top: 1477,
  },
  confirmPayChild4: {
    top: 1627,
  },
  confirmPayChild5: {
    top: 1832,
  },
  yourReservation: {
    top: 392,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_3xl,
  },
  chooseHowTo: {
    top: 618,
    left: 22,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_3xl,
  },
  priceDetails: {
    top: 869,
    left: 26,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_3xl,
  },
  requiredForYour: {
    top: 1311,
    left: 26,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_3xl,
  },
  ellipseIcon: {
    top: 672,
  },
  confirmPayChild6: {
    top: 733,
  },
  confirmPayChild7: {
    top: 679,
    left: 368,
    width: 8,
    height: 8,
    position: "absolute",
  },
  confirmPayChild8: {
    top: 1174,
    left: 340,
  },
  confirmPayChild9: {
    top: 1360,
    left: 341,
  },
  add: {
    top: 1366,
    left: 355,
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
  },
  processorvisaIcon: {
    right: "84.54%",
    left: "6.52%",
  },
  processoramexIcon: {
    right: "75.6%",
    left: "15.46%",
  },
  processormastercardIcon: {
    left: 101,
    width: 36,
  },
  processorpaypalIcon: {
    right: "57.97%",
    left: "33.09%",
  },
  processorgooglepayIcon: {
    right: "49.03%",
    left: "42.03%",
  },
  rectangleIcon: {
    left: 211,
    width: 37,
  },
  confirmPay: {
    height: 2080,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default ConfirmPay;
