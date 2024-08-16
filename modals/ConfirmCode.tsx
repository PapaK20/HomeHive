import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Dimensions } from "react-native";
import { Border, FontSize } from "../Constants/Styles";
import { Color } from "@/Constants/Colors";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const ConfirmCode = () => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.enterTheCode}>
          Enter the code we've sent by SMS to (Phone Number here):
        </Text>

        <TextInput
          style={styles.input}
          value={code}
          onChangeText={setCode}
          placeholder="Enter code"
          keyboardType="number-pad"
          maxLength={6}
        />

        <TouchableOpacity onPress={() => console.log('Send again')}>
          <Text style={styles.haventReceivedAContainer}>
            <Text style={styles.haventReceivedA}>Haven't received a code? </Text>
            <Text style={styles.sendAgainText}>Send again</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} //@ts-ignore
        onPress={() => navigation.navigate('Campus')}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_3xl,
    fontFamily: 'mon-sb',
    color: Color.colorBlack,
    marginBottom: 20,
  },
  enterTheCode: {
    fontFamily: 'mon',
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_100,
    marginBottom: 20,
  },
  input: {
    height: 56,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    padding: 10,
    fontFamily: 'mon',
    fontSize: FontSize.size_lg,
    marginBottom: 20,
  },
  haventReceivedAContainer: {
    fontFamily: 'mon-l',
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    marginBottom: 20,
  },
  haventReceivedA: {
    color: Color.colorDimgray_100,
  },
  sendAgainText: {
    color: Color.colorBlack,
  },
  continueButton: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 20,
  },
  continueText: {
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
});

export default ConfirmCode;