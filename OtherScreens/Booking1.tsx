import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../Constants/GlobalStyles";

const Booking1 = () => {
  return (
    <View style={styles.booking2}>
      <Image
        style={styles.booking2Child}
        contentFit="cover"
        source={require("../assets/rectangle-4009.png")}
      />
      <Image
        style={[styles.dotsIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/dots.png")}
      />
      <View style={styles.booking2Item} />
      <Image
        style={styles.closeRingDuotoneIcon}
        contentFit="cover"
        source={require("../assets/close-ring-duotone.png")}
      />
      <Text style={[styles.from, styles.toTypo]}>From</Text>
      <Text style={[styles.to, styles.toTypo]}>To</Text>
      <Text style={[styles.wedJan172024Container, styles.containerPosition]}>
        <Text style={styles.wedJan17}>
          <Text style={styles.wedJan171Typo}>Wed, Jan 17</Text>
          <Text style={styles.guestTypo1}> </Text>
        </Text>
        <Text style={styles.guestTypo1}>
          <Text style={styles.text1}>2024</Text>
        </Text>
      </Text>
      <Text style={[styles.gettingThere, styles.wedJan171Typo]}>
        Getting there
      </Text>
      <Text style={[styles.thingsToKnow, styles.wedJan171Typo]}>
        Things to know
      </Text>
      <Text style={[styles.messageTheHosts, styles.wedJan171Typo]}>
        Message the hosts
      </Text>
      <Text style={[styles.yourPlace, styles.wedJan171Typo]}>Your place</Text>
      <Text style={[styles.whosComing, styles.wedJan171Typo]}>
        Who’s coming?
      </Text>
      <Text style={[styles.confirmationCode, styles.wedJan171Typo]}>
        Confirmation code
      </Text>
      <Text style={[styles.cancellationPolicy, styles.wedJan171Typo]}>
        Cancellation policy
      </Text>
      <Text style={[styles.guest, styles.guestTypo]}>1 guest</Text>
      <Text style={[styles.text2, styles.guestTypo]}>
        111111111111111111111111111
      </Text>
      <Text style={[styles.yourBookingIsContainer, styles.guestTypo]}>
        <Text
          style={[styles.yourBookingIs, styles.guestTypo1]}
        >{`Your booking is protected `}</Text>
        <Text style={styles.stayshield}>
          <Text style={styles.stay}>stay</Text>
          <Text style={styles.shield}>shield</Text>
        </Text>
      </Text>
      <Text style={[styles.freeCancellationBefore, styles.guestTypo]}>
        Free cancellation before 24 hours of stay. After that, the reservation
        is non-refundable.
      </Text>
      <Text
        style={[styles.somewhereInAyeduase, styles.blockTypo]}
      >{`Somewhere in ayeduase `}</Text>
      <Text style={[styles.instructionsAndHostel, styles.blockTypo]}>
        Instructions and hostel rules
      </Text>
      <Text
        style={[styles.stTheresahsHostel, styles.blockTypo]}
      >{`St Theresah’s Hostel       `}</Text>
      <Text style={[styles.blockBGf7, styles.blockTypo]}>Block B, GF7</Text>
      <Text style={[styles.sunSept12024Container, styles.containerPosition]}>
        <Text style={styles.wedJan17}>
          <Text style={styles.wedJan171Typo}>Sun, Sept 1</Text>
          <Text style={styles.guestTypo1}> </Text>
        </Text>
        <Text style={styles.guestTypo1}>
          <Text style={styles.text1}>2024</Text>
        </Text>
      </Text>
      <View style={[styles.booking2Inner, styles.booking2ChildLayout3]} />
      <View style={[styles.lineView, styles.booking2ChildLayout3]} />
      <View style={[styles.booking2Child1, styles.booking2ChildLayout3]} />
      <View style={[styles.booking2Child2, styles.booking2ChildLayout3]} />
      <View style={[styles.booking2Child3, styles.booking2ChildLayout3]} />
      <View style={[styles.booking2Child4, styles.booking2ChildPosition]} />
      <View style={[styles.booking2Child5, styles.booking2ChildPosition]} />
      <View style={[styles.booking2Child6, styles.booking2ChildPosition]} />
      <View style={[styles.booking2Child7, styles.booking2ChildPosition]} />
      <Image
        style={styles.pinIcon}
        contentFit="cover"
        source={require("../assets/pin.png")}
      />
      <Image
        style={[styles.bookOpenIcon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/book-open.png")}
      />
      <Image
        style={styles.chatAlt2LightIcon}
        contentFit="cover"
        source={require("../assets/chat-alt-2-light.png")}
      />
      <Image
        style={[styles.guestHouseIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/guest-house.png")}
      />
      <View style={[styles.rectangleView, styles.booking2ChildLayout2]} />
      <View style={[styles.booking2Child8, styles.booking2ChildLayout2]} />
      <View style={[styles.booking2Child9, styles.booking2ChildLayout2]} />
      <View style={[styles.booking2Child10, styles.booking2ChildLayout2]} />
      <View style={[styles.booking2Child11, styles.booking2ChildLayout2]} />
      <Text
        style={[styles.reservationDetails, styles.checkingInTypo]}
      >{`Reservation details `}</Text>
      <Text style={[styles.gettingThere1, styles.checkingInTypo]}>
        Getting there
      </Text>
      <Text
        style={[styles.checkingIn, styles.checkingInTypo]}
      >{`Checking in    `}</Text>
      <Text style={[styles.paymentInfo, styles.checkingInTypo]}>
        Payment Info
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1441.png")}
      />
      <View style={[styles.booking2Child12, styles.booking2ChildLayout1]} />
      <View style={[styles.booking2Child13, styles.booking2ChildLayout1]} />
      <View style={[styles.booking2Child14, styles.booking2ChildLayout1]} />
      <View style={[styles.booking2Child15, styles.booking2ChildLayout1]} />
      <View style={[styles.booking2Child16, styles.booking2ChildLayout1]} />
      <Image
        style={styles.groupFillIcon}
        contentFit="cover"
        source={require("../assets/group-fill.png")}
      />
      <Image
        style={[styles.cancelIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cancel.png")}
      />
      <Image
        style={styles.iconPencilEdit1}
        contentFit="cover"
        source={require("../assets/icon--pencil-edit-1.png")}
      />
      <Text style={[styles.manageOccupants, styles.getTypo]}>
        Manage occupants
      </Text>
      <Text style={[styles.changeReservation, styles.getTypo]}>
        Change reservation
      </Text>
      <Text style={[styles.cancelReservation, styles.getTypo]}>
        Cancel Reservation
      </Text>
      <Text style={[styles.getAReceipt, styles.getTypo]}>Get a receipt</Text>
      <Text style={[styles.getAReceipt1, styles.getTypo]}>Get a receipt</Text>
      <Text style={[styles.getDirections, styles.getTypo]}>Get directions</Text>
      <Text style={[styles.copyAddress, styles.getTypo]}>Copy address</Text>
      <Text style={[styles.getAPdf, styles.getTypo]}>
        Get a PDF for whatever purpose idk
      </Text>
      <Image
        style={[styles.expandRightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon3, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right.png")}
      />
      <Image
        style={[styles.blankAltFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/blank-alt-fill.png")}
      />
      <Image
        style={[styles.fileDockSearchFillIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/file-dock-search-fill.png")}
      />
      <Image
        style={[styles.fileDockSearchFillIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/file-dock-search-fill.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-4163.png")}
      />
      <Image
        style={[styles.pinFillIcon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/pin-fill.png")}
      />
      <View style={[styles.files, styles.iconLayout]} />
      <Image
        style={styles.union1Icon}
        contentFit="cover"
        source={require("../assets/union1.png")}
      />
      <Text style={[styles.meetTheBlock, styles.blockTypo]}>
        Meet the block porter for status confirmation and approval
      </Text>
      <Text style={[styles.meetTheBlock1, styles.blockTypo]}>
        Meet the block porter for your room key
      </Text>
      <View style={[styles.booking2Child17, styles.booking2ChildLayout]} />
      <View style={[styles.booking2Child18, styles.booking2ChildLayout]} />
      <Text style={styles.ashantiRegionKumasi}>
        Ashanti Region, Kumasi, Ayeduase Ghana
      </Text>
      <Text style={[styles.address, styles.addressTypo]}>Address</Text>
      <Text
        style={[styles.gettingInside, styles.addressTypo]}
      >{`Getting inside `}</Text>
      <Text style={[styles.checkingIn1, styles.addressTypo]}>Checking in</Text>
      <Text style={[styles.totalCost, styles.addressTypo]}>Total Cost</Text>
      <Text style={styles.text5}>₵7500</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition3: {
    left: "50%",
    position: "absolute",
  },
  toTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  containerPosition: {
    top: 510,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wedJan171Typo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
  },
  guestTypo: {
    fontSize: FontSize.size_mini,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  guestTypo1: {
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
  },
  blockTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  booking2ChildLayout3: {
    height: 1,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  booking2ChildPosition: {
    left: 15,
    height: 1,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition2: {
    left: 32,
    position: "absolute",
  },
  booking2ChildLayout2: {
    height: 16,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    position: "absolute",
    width: 414,
  },
  checkingInTypo: {
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    left: 19,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  booking2ChildLayout1: {
    width: 376,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 15,
    borderColor: Color.colorDarkgray_300,
    height: 46,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  getTypo: {
    left: 81,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconPosition: {
    top: 1709,
    height: 24,
    width: 24,
    position: "absolute",
  },
  booking2ChildLayout: {
    width: 378,
    borderColor: Color.colorLightgray_200,
    left: 21,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addressTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  booking2Child: {
    top: 0,
    height: 462,
    left: 0,
    position: "absolute",
    width: 414,
  },
  dotsIcon: {
    marginTop: -26.5,
    marginLeft: -36,
    top: "50%",
    width: 72,
    height: 8,
  },
  booking2Item: {
    left: 207,
    borderColor: Color.colorGray_200,
    borderRightWidth: 1,
    width: 1,
    height: 83,
    borderStyle: "solid",
    top: 481,
    position: "absolute",
  },
  closeRingDuotoneIcon: {
    top: 22,
    left: 13,
    width: 46,
    height: 46,
    position: "absolute",
  },
  from: {
    fontFamily: FontFamily.k2DRegular,
    left: 36,
    top: 481,
    textAlign: "left",
  },
  to: {
    left: 239,
    fontFamily: FontFamily.k2DRegular,
    top: 481,
    textAlign: "left",
  },
  wedJan17: {
    fontSize: FontSize.size_lg,
  },
  text1: {
    fontSize: FontSize.size_sm,
  },
  wedJan172024Container: {
    left: 36,
  },
  gettingThere: {
    top: 616,
    left: 92,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  thingsToKnow: {
    top: 694,
    left: 92,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  messageTheHosts: {
    top: 774,
    left: 92,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  yourPlace: {
    top: 854,
    left: 92,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  whosComing: {
    top: 1054,
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  confirmationCode: {
    top: 1159,
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  cancellationPolicy: {
    top: 1341,
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  guest: {
    top: 1082,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  text2: {
    top: 1187,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  yourBookingIs: {
    color: Color.colorBlack,
  },
  stay: {
    color: Color.colorCadetblue_100,
  },
  shield: {
    color: Color.colorBlack,
  },
  stayshield: {
    fontWeight: "800",
    fontFamily: FontFamily.k2DExtraBold,
  },
  yourBookingIsContainer: {
    top: 1264,
  },
  freeCancellationBefore: {
    top: 1369,
    fontFamily: FontFamily.k2DLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  somewhereInAyeduase: {
    top: 637,
    left: 92,
  },
  instructionsAndHostel: {
    top: 715,
    left: 92,
  },
  stTheresahsHostel: {
    top: 795,
    left: 92,
  },
  blockBGf7: {
    top: 880,
    left: 93,
  },
  sunSept12024Container: {
    left: 239,
  },
  booking2Inner: {
    top: 597,
    left: 19,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
  },
  lineView: {
    top: 677,
    left: 19,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
  },
  booking2Child1: {
    top: 757,
    left: 19,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
  },
  booking2Child2: {
    top: 837,
    left: 19,
    width: 377,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_300,
  },
  booking2Child3: {
    top: 1135,
    left: 20,
  },
  booking2Child4: {
    top: 1240,
  },
  booking2Child5: {
    top: 1317,
  },
  booking2Child6: {
    top: 2221,
  },
  booking2Child7: {
    top: 2283,
  },
  pinIcon: {
    top: 605,
    left: 29,
    width: 57,
    height: 57,
    position: "absolute",
  },
  bookOpenIcon: {
    top: 688,
    width: 50,
    height: 50,
  },
  chatAlt2LightIcon: {
    top: 764,
    left: 30,
    width: 54,
    height: 54,
    position: "absolute",
  },
  guestHouseIcon: {
    marginLeft: -182,
    top: 838,
    width: 70,
    height: 70,
  },
  rectangleView: {
    top: 937,
  },
  booking2Child8: {
    top: 1783,
  },
  booking2Child9: {
    top: 2358,
  },
  booking2Child10: {
    top: 2654,
  },
  booking2Child11: {
    top: 2910,
  },
  reservationDetails: {
    top: 989,
  },
  gettingThere1: {
    top: 1835,
  },
  checkingIn: {
    top: 2410,
  },
  paymentInfo: {
    top: 2706,
  },
  ellipseIcon: {
    top: 1055,
    left: 330,
    width: 49,
    height: 49,
    position: "absolute",
  },
  booking2Child12: {
    top: 1458,
  },
  booking2Child13: {
    top: 1518,
  },
  booking2Child14: {
    top: 1578,
  },
  booking2Child15: {
    top: 1698,
  },
  booking2Child16: {
    top: 1638,
  },
  groupFillIcon: {
    top: 1467,
    width: 27,
    height: 27,
    left: 33,
    position: "absolute",
  },
  cancelIcon: {
    top: 1589,
    width: 24,
    left: 33,
  },
  iconPencilEdit1: {
    top: 1517,
    width: 48,
    height: 48,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  manageOccupants: {
    top: 1471,
  },
  changeReservation: {
    top: 1531,
  },
  cancelReservation: {
    top: 1591,
  },
  getAReceipt: {
    top: 1711,
  },
  getAReceipt1: {
    top: 2851,
  },
  getDirections: {
    top: 2299,
  },
  copyAddress: {
    top: 2242,
  },
  getAPdf: {
    top: 1651,
  },
  expandRightIcon: {
    top: 1469,
    left: 360,
  },
  expandRightIcon1: {
    top: 1529,
    left: 360,
  },
  expandRightIcon2: {
    left: 360,
    top: 1589,
    width: 24,
  },
  expandRightIcon3: {
    left: 360,
  },
  expandRightIcon4: {
    top: 2297,
    left: 360,
  },
  expandRightIcon5: {
    top: 2240,
    left: 360,
  },
  expandRightIcon6: {
    top: 1649,
    left: 360,
  },
  blankAltFillIcon: {
    top: 1648,
    left: 33,
  },
  fileDockSearchFillIcon: {
    left: 33,
  },
  fileDockSearchFillIcon1: {
    top: 2849,
    left: 33,
  },
  rectangleIcon: {
    top: 1900,
    left: 41,
    width: 324,
    height: 212,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pinFillIcon: {
    top: 2293,
    width: 32,
    height: 32,
  },
  files: {
    top: 2121,
    left: 264,
    overflow: "hidden",
  },
  union1Icon: {
    height: "0.66%",
    width: "4.03%",
    top: "73.73%",
    right: "86.3%",
    bottom: "25.62%",
    left: "9.66%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  meetTheBlock: {
    top: 2498,
    left: 21,
  },
  meetTheBlock1: {
    top: 2597,
    left: 21,
  },
  booking2Child17: {
    top: 2556,
  },
  booking2Child18: {
    top: 2833,
  },
  ashantiRegionKumasi: {
    top: 2152,
    lineHeight: 21,
    width: 355,
    letterSpacing: 0,
    left: 42,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  address: {
    top: 2126,
    left: 42,
    fontSize: FontSize.size_base,
  },
  gettingInside: {
    top: 2473,
    left: 21,
  },
  checkingIn1: {
    top: 2572,
    left: 21,
  },
  totalCost: {
    top: 2769,
    left: 21,
  },
  text5: {
    top: 2794,
    left: 23,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  booking2: {
    height: 3041,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.colorWhite,
  },
});

export default Booking1;
