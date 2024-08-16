import * as React from "react";

const BasicHome = () => {
  return (
    <Image
      style={styles.basicHome}
      contentFit="cover"
      source={require("../assets/24--basic--home1.png")}
    />
  );
};

const styles = StyleSheet.create({
  basicHome: {
    width: 40,
    height: 40,
  },
});

export default BasicHome;
