import React, { useMemo } from "react";
import { Color } from "../Constants/GlobalStyles";

export type NavigationBarType = {
  /** Style props */
  navigationBarPosition?: string;
  navigationBarTop?: number | string;
  navigationBarLeft?: number | string;
  backgroundBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavigationBar = ({
  navigationBarPosition,
  navigationBarTop,
  navigationBarLeft,
  backgroundBackgroundColor,
}: NavigationBarType) => {
  const navigationBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navigationBarPosition),
      ...getStyleValue("top", navigationBarTop),
      ...getStyleValue("left", navigationBarLeft),
    };
  }, [navigationBarPosition, navigationBarTop, navigationBarLeft]);

  const backgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", backgroundBackgroundColor),
    };
  }, [backgroundBackgroundColor]);

  return (
    <View style={[styles.navigationBar, navigationBarStyle]}>
      <View style={[styles.background, backgroundStyle]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  vectorIcon: {
    height: "12.5%",
    width: "1.45%",
    top: "64.58%",
    right: "93.48%",
    bottom: "22.92%",
    left: "5.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  navigationBar: {
    width: 414,
    height: 96,
  },
});

export default NavigationBar;
