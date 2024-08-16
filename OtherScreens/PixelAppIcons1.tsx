import * as React from "react";

const PixelAppIcons1 = () => {
  return (
    <Image
      style={styles.icongoogle}
      contentFit="cover"
      source={require("../assets/icongoogle.png")}
    />
  );
};

const styles = StyleSheet.create({
  icongoogle: {
    width: 366,
    height: 366,
    overflow: "hidden",
  },
});

export default PixelAppIcons1;
