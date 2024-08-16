import * as React from "react";

const UserCicrleLight = () => {
  return (
    <Image
      style={styles.userCicrleLightIcon}
      contentFit="cover"
      source={require("../assets/user-cicrle-light2.png")}
    />
  );
};

const styles = StyleSheet.create({
  userCicrleLightIcon: {
    width: 47,
    height: 47,
  },
});

export default UserCicrleLight;
