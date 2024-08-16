import React, { useMemo } from "react";
import { FontFamily, Border, Color, FontSize } from "../Constants/GlobalStyles";

export type TextFieldType = {
  text?: string;
  label?: string;

  /** Style props */
  textFieldPosition?: string;
  textFieldWidth?: number | string;
  textFieldTop?: number | string;
  textFieldRight?: number | string;
  textFieldLeft?: number | string;
  textFieldHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TextField = ({
  text,
  label,
  textFieldPosition,
  textFieldWidth,
  textFieldTop,
  textFieldRight,
  textFieldLeft,
  textFieldHeight,
}: TextFieldType) => {
  const textFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", textFieldPosition),
      ...getStyleValue("width", textFieldWidth),
      ...getStyleValue("top", textFieldTop),
      ...getStyleValue("right", textFieldRight),
      ...getStyleValue("left", textFieldLeft),
      ...getStyleValue("height", textFieldHeight),
    };
  }, [
    textFieldPosition,
    textFieldWidth,
    textFieldTop,
    textFieldRight,
    textFieldLeft,
    textFieldHeight,
  ]);

  return (
    <View style={[styles.textField, textFieldStyle]}>
      <View style={styles.container} />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.text1, styles.text1Typo]}>{text}</Text>
      </View>
      <View style={[styles.hint, styles.textFlexBox]}>
        <Text style={[styles.label, styles.text1Typo]}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
  },
  container: {
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLavender,
    borderWidth: 1,
    height: 48,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_mid,
    color: Color.textPrimary,
  },
  text: {
    top: 35,
    left: 13,
  },
  label: {
    fontSize: FontSize.size_sm,
    color: Color.textSecondary,
  },
  hint: {
    top: 0,
    left: 14,
  },
  textField: {
    width: 374,
    height: 70,
  },
});

export default TextField;
