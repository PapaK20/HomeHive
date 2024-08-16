import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../Constants/GlobalStyles";

const Failure = () => {
  return (
    <View style={styles.failure}>
      <Image
        style={styles.failureChild}
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
      <Text style={[styles.payWith, styles.payWithClr]}>Pay with</Text>
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
      <Text style={[styles.academicYear, styles.occupantTypo]}>
        1 academic year
      </Text>
      <Text style={[styles.occupant, styles.occupantTypo]}>1 occupant</Text>
      <Text style={[styles.accommodationFee, styles.textTypo1]}>
        Accommodation fee
      </Text>
      <Text style={[styles.paymentMethod, styles.heyThereWeTypo]}>
        Payment method
      </Text>
      <Text style={[styles.hostsWantTo, styles.heyThereWeTypo]}>
        Hosts want to know who’s staying at their place.
      </Text>
      <Text style={[styles.freeCancellationBefore, styles.weAskEveryTypo]}>
        Free cancellation before 24hrs of stay for full refund. After 24hrs
        no refunds.
      </Text>
      <Text style={[styles.heyThereWe, styles.heyThereWeTypo]}>
        Hey there. We tried to charge your account but something went wrong.
        Please update your payment method to continue
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
      <Text style={[styles.dueToday2500, styles.occupantTypo]}>
        ₵5000 due today, ₵2500 on school years end.
      </Text>
      <Text style={styles.text4}>4.64(1921)</Text>
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
        <Text style={styles.occupantTypo}>
          Get a full refund if you change your mind.
        </Text>
      </Text>
      <Image
        style={styles.dateTodayLightIcon}
        contentFit="cover"
        source={require("../assets/date-today-light.png")}
      />
      <View style={[styles.failureItem, styles.failureLayout]} />
      <View style={[styles.failureInner, styles.failureLayout]} />
      <View style={[styles.rectangleView, styles.failureChildLayout]} />
      <View style={[styles.failureChild1, styles.failureChildLayout]} />
      <View style={[styles.failureChild2, styles.failureChildLayout]} />
      <View style={[styles.failureChild3, styles.failureChildLayout]} />
      <View style={[styles.failureChild4, styles.failureChildLayout]} />
      <View style={[styles.failureChild5, styles.failureChildLayout]} />
      <Text style={[styles.yourReservation, styles.yourTypo]}>
        Your reservation
      </Text>
      <Text style={[styles.chooseHowTo, styles.yourTypo]}>
        Choose how to pay
      </Text>
      <Text style={[styles.priceDetails, styles.yourTypo]}>Price details</Text>
      <Text style={[styles.requiredForYour, styles.yourTypo]}>
        Required for your reservation
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-136.png")}
      />
      <Image
        style={[styles.failureChild6, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-158.png")}
      />
      <Image
        style={styles.failureChild7}
        contentFit="cover"
        source={require("../assets/ellipse-137.png")}
      />
      <View style={[styles.failureChild8, styles.failureChildBorder]} />
      <View style={[styles.failureChild9, styles.failureChildBorder]} />
      <Text style={[styles.add, styles.addTypo]}>Add</Text>
      <Text style={[styles.change, styles.addTypo]}>Change</Text>
      <Image
        style={[styles.processorvisaIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorvisa1.png")}
      />
      <Image
        style={[styles.processoramexIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processoramex1.png")}
      />
      <Image
        style={[styles.processormastercardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/processormastercard1.png")}
      />
      <Image
        style={[styles.processorpaypalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorpaypal1.png")}
      />
      <Image
        style={[styles.processorgooglepayIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/processorgooglepay1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3964.png")}
      />
      <View style={styles.failureChild10} />
      <Text style={[styles.confirmationFailed, styles.yourTypo]}>
        Confirmation failed :(
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  feeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  editTypo: {
    top: 434,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  editText: {
    textDecoration: "underline",
    left: 349,
  },
  edit1Typo: {
    top: 506,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  nowPosition: {
    left: 25,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  text3Typo: {
    top: 1058,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  payWithClr: {
    color: Color.colorRed_100,
    left: 27,
  },
  occupantTypo: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  textTypo1: {
    top: 907,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  heyThereWeTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "left",
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
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  yourReservationPosition: {
    left: 17,
    color: Color.colorBlack,
  },
  failureLayout: {
    height: 16,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  failureChildLayout: {
    height: 10,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  yourTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 22,
    width: 22,
    left: 361,
    position: "absolute",
  },
  failureChildBorder: {
    height: 35,
    borderWidth: 1,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  addTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "42%",
    top: "56.62%",
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
  failureChild: {
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
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  duration: {
    left: 21,
  },
  edit: {
    top: 434,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
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
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  payWith: {
    top: 1149,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  cancellationPolicy: {
    top: 1593,
    left: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  groundRules: {
    top: 1743,
    left: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  profilePhoto: {
    top: 1446,
    left: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
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
    position: "absolute",
    color: Color.colorBlack,
  },
  occupant: {
    top: 531,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorBlack,
  },
  accommodationFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorBlack,
    left: 26,
  },
  paymentMethod: {
    top: 1181,
    color: Color.colorRed_100,
    left: 27,
  },
  hostsWantTo: {
    top: 1478,
    left: 27,
    color: Color.colorBlack,
  },
  freeCancellationBefore: {
    top: 1625,
    left: 26,
  },
  heyThereWe: {
    top: 1262,
    left: 30,
    color: Color.colorBlack,
  },
  weAskEvery: {
    top: 1775,
    left: 27,
  },
  hostelServicingFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorBlack,
    left: 26,
  },
  stayfinderServiceFee: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorBlack,
    left: 26,
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
    position: "absolute",
    color: Color.colorBlack,
  },
  text4: {
    top: 174,
    left: 206,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
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
  payTypo: {
    fontFamily: FontFamily.k2DBold,
    fontWeight: "700",
  },
  freeCancellationBeforeContainer: {
    top: 259,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dateTodayLightIcon: {
    top: 265,
    width: 45,
    height: 45,
    left: 341,
    position: "absolute",
  },
  failureItem: {
    top: 352,
  },
  failureInner: {
    top: 578,
  },
  rectangleView: {
    top: 835,
  },
  failureChild1: {
    top: 1115,
  },
  failureChild2: {
    top: 1359,
  },
  failureChild3: {
    top: 1559,
  },
  failureChild4: {
    top: 1709,
  },
  failureChild5: {
    top: 1914,
  },
  yourReservation: {
    top: 392,
    left: 17,
    color: Color.colorBlack,
  },
  chooseHowTo: {
    top: 618,
    left: 22,
    color: Color.colorBlack,
  },
  priceDetails: {
    top: 869,
    color: Color.colorBlack,
    left: 26,
  },
  requiredForYour: {
    top: 1393,
    color: Color.colorBlack,
    left: 26,
  },
  ellipseIcon: {
    top: 672,
  },
  failureChild6: {
    top: 733,
  },
  failureChild7: {
    top: 679,
    left: 368,
    width: 8,
    height: 8,
    position: "absolute",
  },
  failureChild8: {
    top: 1174,
    left: 320,
    width: 79,
  },
  failureChild9: {
    top: 1442,
    width: 59,
    left: 341,
  },
  add: {
    top: 1445,
    left: 355,
  },
  change: {
    left: 333,
    top: 1181,
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
  failureChild10: {
    top: 0,
    backgroundColor: "#f72b2b",
    height: 60,
    left: 0,
    position: "absolute",
    width: 414,
  },
  confirmationFailed: {
    top: 15,
    left: 100,
    color: Color.colorWhite,
  },
  failure: {
    height: 2151,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default Failure;
