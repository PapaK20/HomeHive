import * as React from "react";

const LockLight = () => {
  return (
    <Image
      style={styles.lockLightIcon}
      contentFit="cover"
      source={require("../assets/lock-light1.png")}
    />
  );
};

const styles = StyleSheet.create({
  lockLightIcon: {
    width: 24,
    height: 24,
  },
});

export default LockLight;
