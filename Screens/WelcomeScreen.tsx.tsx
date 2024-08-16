import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontSize, Border } from "../Constants/Styles";
import { Color } from "@/Constants/Colors";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        contentFit="cover"
        source={require("../assets/istockphoto1369563490640x640-1.png")}
      />
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Text style={styles.title}>Welcome To HomeHive!</Text>
        <Text style={styles.subtitle}>
          PEEKAY's Project
        </Text>
        <TouchableOpacity style={styles.signUpButton} 
        //@ts-ignore
        onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account? 
          <TouchableOpacity
          //@ts-ignore 
          onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.loginLink}>LOG IN</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#eaeaea",
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: -40,
  },
  title: {
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: 'mon-b',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    color: Color.textSecondary,
    fontFamily: 'mon-sb',
    textAlign: "center",
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: Border.br_5xs,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: 'mon-b',
    textTransform: "uppercase",
  },
  loginText: {
    fontSize: FontSize.size_base,
    color: "#78767a",
    fontFamily: 'mon-sb',
  },
  loginLink: {
    color: Color.colorDarkolivegreen,
    fontFamily: 'mon',
  },
});

export default WelcomeScreen;