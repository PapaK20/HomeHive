import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize } from "../Constants/Styles";
import Colors, { Color } from "@/Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { defaultStyles } from "../Constants/Styles";
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logIn}>
        <View style={styles.inputContainer}>
          <Text style={styles.countryregion}>Country/Region</Text>
          <Text style={styles.ghana233}>Ghana(+233)</Text>
          <View style={styles.lineViewMiddle} />
          <TextInput style={styles.phoneNumber} 
          placeholder="Phone Number" 
          keyboardType="phone-pad"
          placeholderTextColor={Color.colorGray_200} />
          <Image
            style={styles.lockLightIcon}
            contentFit="cover"
            source={require("../assets/lock-light.png")}
          />
        </View>
        <TouchableOpacity style={styles.loginbtn} //@ts-ignore
        onPress={() => navigation.navigate('Main')}>
          <Text style={styles.logintxt}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.lineView} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.lineView} />
        </View>
        <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="mail-outline" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-google" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-facebook" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    elevation: 4,
  },
  logIn: {
    width: '100%',
    padding: 20,
    backgroundColor: Color.colorWhite,
  },
  orClr: {
    color: Color.colorGray_200,
    textAlign: "center",
  },
  lineViewLayout: {
    width: 148,
    borderColor: Color.colorLightgray_300,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  logChildShadowBox: {
    height: 44,
    width: '100%',
    borderColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueTypo: {
    width: '100%',
    textAlign: "center",
    color: Color.colorDarkslategray_300,
    lineHeight: 21,
    fontFamily: 'mon-sb',
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    marginVertical: 10,
  },
  inputContainer: {
    borderColor: Color.colorGray_300,
    width: '100%',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginBottom: 20,
    padding: 10,
    backgroundColor: Color.colorWhite,
  },
  countryregion: {
    fontFamily: 'mon',
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    marginBottom: 5,
  },
  phoneNumber: {
    fontFamily: 'mon',
    color: Color.colorGray_200,
    fontSize: FontSize.size_lg,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'auto'
  },
  ghana233: {
    fontSize: FontSize.size_xl,
    fontFamily: 'mon',
    color: Color.colorGray_200,
    marginBottom: 10,
  },
  lineViewMiddle: {
    borderBottomColor: Color.colorDarkgray_300,
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
  lockLightIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 30,
    right: 20,
  },
  loginbtn: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: Border.br_5xs,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  logintxt: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: 'mon-b',
    textTransform: "uppercase",
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  or: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    fontFamily: 'mon-b',
    marginHorizontal: 10,
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: Color.colorLightgray_300,
  },
  tryAnotherWay: {
    height: "4.24%",
    width: "63.04%",
    color: Color.colorDarkolivegreen,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    fontFamily: 'mon-b',
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
});

export default LogIn;
