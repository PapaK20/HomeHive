import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../Constants/GlobalStyles";

const Step3HostingCalendar = () => {
  return (
    <View style={styles.step3Hostingcalendar}>
      <View style={[styles.step3HostingcalendarChild, styles.step3Layout]} />
      <View style={[styles.step3HostingcalendarItem, styles.step3Border]} />
      <View style={[styles.step3HostingcalendarInner, styles.step3Border]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={styles.updateYourCalendar}>Update your calendar</Text>
      <Text style={styles.selectDatesTo}>Select dates to block or unblock</Text>
      <View
        style={[styles.step3HostingcalendarChild1, styles.step3ChildLayout4]}
      />
      <View
        style={[styles.step3HostingcalendarChild2, styles.step3ChildLayout4]}
      />
      <Text style={styles.july2024}>July 2024</Text>
      <Text style={[styles.s714Container, styles.f5121926Typo]}>
        <Text style={styles.s}>{`      



S`}</Text>
        <Text style={styles.text}>{`  
 `}</Text>
        <Text style={styles.s}>{`7
`}</Text>
        <Text style={styles.text}>{`  14


21


28  `}</Text>
      </Text>
      <Text style={[styles.m18152229, styles.t4111825Typo]}>
        <Text style={styles.m}>{`



M`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.m}>1</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.m}>8</Text>
        <Text style={styles.text}>   15   22   29</Text>
      </Text>
      <Text style={[styles.t29162330, styles.t4111825Typo]}>
        <Text style={styles.s}>{`



T`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text7}>2</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.s}>9</Text>
        <Text style={styles.text}>   16   23   30</Text>
      </Text>
      <Text style={[styles.w310172431, styles.f5121926Typo]}>
        <Text style={styles.text7}>{`



W`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text7}>3</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.text7}>10</Text>
        <Text style={styles.text}>   17   24   31</Text>
      </Text>
      <Text style={[styles.t4111825, styles.t4111825Typo]}>
        <Text style={styles.s}>{`



T`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text7}>4</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.s}>11</Text>
        <Text style={styles.text}>   18   25</Text>
      </Text>
      <Text style={[styles.f5121926, styles.f5121926Typo]}>
        <Text style={styles.s}>{`



F`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text7}>5</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.s}>12</Text>
        <Text style={styles.text}>   19   26</Text>
      </Text>
      <Text style={[styles.s6132027, styles.f5121926Typo]}>
        <Text style={styles.s}>{`



S`}</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text7}>6</Text>
        <Text style={styles.text}>   </Text>
        <Text style={styles.s}>13</Text>
        <Text style={styles.text}>   20   27</Text>
      </Text>
      <Image
        style={[styles.expandRightLightIcon, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-right-light.png")}
      />
      <Image
        style={styles.expandLeftLightIcon}
        contentFit="cover"
        source={require("../assets/expand-left-light2.png")}
      />
      <View style={styles.lineView} />
      <View
        style={[styles.step3HostingcalendarChild3, styles.step3ChildLayout3]}
      />
      <View
        style={[styles.step3HostingcalendarChild4, styles.step3ChildLayout3]}
      />
      <View
        style={[styles.step3HostingcalendarChild5, styles.step3ChildLayout2]}
      />
      <View
        style={[styles.step3HostingcalendarChild6, styles.step3ChildLayout2]}
      />
      <View
        style={[styles.step3HostingcalendarChild7, styles.step3ChildLayout2]}
      />
      <View
        style={[styles.step3HostingcalendarChild8, styles.step3ChildLayout]}
      />
      <View
        style={[styles.step3HostingcalendarChild9, styles.step3ChildLayout]}
      />
      <View
        style={[styles.step3HostingcalendarChild10, styles.step3ChildLayout]}
      />
      <View
        style={[styles.step3HostingcalendarChild11, styles.step3ChildLayout]}
      />
      <View
        style={[styles.step3HostingcalendarChild12, styles.rectangleViewLayout]}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.expandLeftLightIcon1, styles.expandIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-left-light1.png")}
      />
      <Text style={[styles.next, styles.backTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  step3Layout: {
    height: 171,
    top: 427,
  },
  step3Border: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleViewLayout: {
    height: 56,
    position: "absolute",
  },
  step3ChildLayout4: {
    height: 32,
    width: 71,
    borderRadius: Border.br_10xs,
    top: 242,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  f5121926Typo: {
    height: 376,
    width: 31,
    textAlign: "center",
    top: 260,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  t4111825Typo: {
    width: 32,
    height: 376,
    textAlign: "center",
    top: 260,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  expandIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  step3ChildLayout3: {
    height: 298,
    width: 1,
    top: 371,
    borderRightWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  step3ChildLayout2: {
    height: 228,
    width: 1,
    top: 371,
    borderRightWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  step3ChildLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  backTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    position: "absolute",
  },
  step3HostingcalendarChild: {
    width: 44,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 171,
    borderColor: Color.colorGray_200,
    left: 51,
    top: 427,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  step3HostingcalendarItem: {
    width: 173,
    height: 70,
    top: 598,
    left: 51,
    borderLeftWidth: 1,
  },
  step3HostingcalendarInner: {
    left: 224,
    width: 152,
    height: 171,
    top: 427,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkgray_300,
    width: 281,
    borderWidth: 1,
    left: 95,
    top: 371,
    height: 56,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
  },
  updateYourCalendar: {
    top: 92,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 37,
    position: "absolute",
  },
  selectDatesTo: {
    top: 140,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 37,
    position: "absolute",
  },
  step3HostingcalendarChild1: {
    left: 49,
  },
  step3HostingcalendarChild2: {
    left: 294,
  },
  july2024: {
    top: 248,
    left: 158,
    width: 98,
    height: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.k2DSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  s: {
    color: Color.colorGray_200,
  },
  text: {
    color: Color.colorBlack,
  },
  s714Container: {
    left: 49,
  },
  m: {
    color: Color.colorDimgray_300,
  },
  m18152229: {
    left: 96,
  },
  text7: {
    color: Color.colorDimgray_400,
  },
  t29162330: {
    left: 144,
  },
  w310172431: {
    left: 193,
  },
  t4111825: {
    left: 240,
  },
  f5121926: {
    left: 288,
  },
  s6132027: {
    left: 336,
  },
  expandRightLightIcon: {
    top: 246,
    left: 318,
  },
  expandLeftLightIcon: {
    height: "2.68%",
    width: "5.8%",
    top: "27.46%",
    right: "76.57%",
    bottom: "69.87%",
    left: "17.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineView: {
    height: 242,
    width: 1,
    left: 95,
    borderRightWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    top: 427,
    position: "absolute",
  },
  step3HostingcalendarChild3: {
    left: 135,
  },
  step3HostingcalendarChild4: {
    left: 181,
  },
  step3HostingcalendarChild5: {
    left: 226,
  },
  step3HostingcalendarChild6: {
    left: 280,
  },
  step3HostingcalendarChild7: {
    left: 330,
  },
  step3HostingcalendarChild8: {
    top: 476,
    width: 326,
    height: 1,
    borderColor: Color.colorGray_200,
    left: 51,
  },
  step3HostingcalendarChild9: {
    top: 543,
    width: 326,
    height: 1,
    borderColor: Color.colorGray_200,
    left: 51,
  },
  step3HostingcalendarChild10: {
    width: 174,
    top: 598,
    left: 51,
    borderColor: Color.colorGray_200,
    height: 1,
  },
  step3HostingcalendarChild11: {
    top: 790,
    left: 0,
    borderColor: Color.colorLightgray_100,
    width: 415,
  },
  step3HostingcalendarChild12: {
    top: 825,
    left: 261,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_400,
    width: 130,
  },
  back: {
    top: 843,
    color: Color.colorDarkslategray_400,
    left: 51,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  expandLeftLightIcon1: {
    top: 841,
    left: 16,
  },
  next: {
    height: "2.9%",
    width: "19.08%",
    top: "93.75%",
    left: "69.08%",
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  step3Hostingcalendar: {
    width: 414,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Step3HostingCalendar;
