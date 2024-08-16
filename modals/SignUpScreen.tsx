import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Switch } from "react-native";
import { Image } from "expo-image";
import { FontSize } from "../Constants/Styles";
import { useNavigation } from "@react-navigation/native";
import { Color } from "@/Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [receiveMarketing, setReceiveMarketing] = useState(true);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back" 
          size={24}
        />
      </TouchableOpacity>
      
      <Text style={styles.title}>Sign up</Text>
      
      <View style={styles.inputContainer}>
      <TextInput style={styles.phoneNumber} 
          placeholder="First Name" 
          keyboardType='twitter'
          placeholderTextColor={Color.colorGray_200} />
          <View style={styles.lineViewMiddle} />
          <TextInput style={styles.phoneNumber} 
          placeholder="Last Name" 
          keyboardType="twitter"
          placeholderTextColor={Color.colorGray_200} />
          <View style={styles.lineViewMiddle} />
        </View>
      
      <InputField
        label="Date of birth"
        placeholder="Date of birth"
        value={formData.dateOfBirth}
        onChangeText={(text: string) => handleInputChange("dateOfBirth", text)} placeholder1={undefined} placeholder2={undefined} value1={undefined} value2={undefined} onChangeText1={undefined} onChangeText2={undefined} secureTextEntry={undefined} showPasswordToggle={undefined} onTogglePassword={undefined} prefix={undefined}      />
      <Text style={styles.helperText}>
        You need to be at least 18 years of age. Other people who use StayFinder won't be able to see your date of birth.
      </Text>
      
      <InputField
        label="Email"
        placeholder="Peekay@st.knust.edu.gh"
        value={formData.email}
        onChangeText={(text: string) => handleInputChange("email", text)} placeholder1={undefined} placeholder2={undefined} value1={undefined} value2={undefined} onChangeText1={undefined} onChangeText2={undefined} secureTextEntry={undefined} showPasswordToggle={undefined} onTogglePassword={undefined} prefix={undefined}      />
      
      <InputField
        label="Phone Number"
        placeholder="Number"
        value={formData.phoneNumber}
        onChangeText={(text: string) => handleInputChange("phoneNumber", text)}
        prefix="+233" placeholder1={undefined} placeholder2={undefined} value1={undefined} value2={undefined} onChangeText1={undefined} onChangeText2={undefined} secureTextEntry={undefined} showPasswordToggle={undefined} onTogglePassword={undefined}      />
      <Text style={styles.helperText}>
        You are required to enter your current phone number.
      </Text>
      
      <InputField
        label="Password"
        placeholder="******"
        value={formData.password}
        onChangeText={(text: string) => handleInputChange("password", text)}
        secureTextEntry={!showPassword}
        showPasswordToggle
        onTogglePassword={() => setShowPassword(!showPassword)} placeholder1={undefined} placeholder2={undefined} value1={undefined} value2={undefined} onChangeText1={undefined} onChangeText2={undefined} prefix={undefined}      />

<InputField
        label="Confirm Password"
        placeholder="******"
        value={formData.password}
        onChangeText={(text: string) => handleInputChange("password", text)}
        secureTextEntry={!showPassword}
        showPasswordToggle/>
      
      <Text style={styles.termsText}>
        By selecting Agree and continue, I agree to StayFinder's <Text style={styles.link}>Terms of Service</Text>, <Text style={styles.link}>Payments Terms of Service</Text> and <Text style={styles.link}>Anti-Discrimination Policy</Text> and acknowledge the <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
      
      <TouchableOpacity style={styles.agreeButton} 
      //@ts-ignore
      onPress={() => navigation.navigate('Confirm')}>
        <Text style={styles.agreeButtonText}>AGREE AND CONTINUE</Text>
      </TouchableOpacity>
      
      <Text style={styles.infoText}>
        StayFinder will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.
      </Text>
      
      <View style={styles.optOutContainer}>
        <Text style={styles.optOutText}>
          I don't want to receive marketing messages from StayFinder.
        </Text>
        <Switch
          value={receiveMarketing}
          onValueChange={setReceiveMarketing}
          trackColor={{ false: "#767577", true: Color.colorOrange_100 }}
          thumbColor={receiveMarketing ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>
    </ScrollView>
  );
};

const InputField = ({ label, placeholder, placeholder1, placeholder2, value, value1, value2, onChangeText, onChangeText1, onChangeText2, secureTextEntry, showPasswordToggle, onTogglePassword, prefix }: {
  label: string;
  placeholder?: string;
  placeholder1?: string;
  placeholder2?: string;
  value: string;
  value1?: string;
  value2?: string;
  onChangeText: (text: string) => void;
  onChangeText1?: (text: string) => void;
  onChangeText2?: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  prefix?: string;
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputField}>
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      {placeholder1 && placeholder2 ? (
        <>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder={placeholder1}
            value={value1}
            onChangeText={onChangeText1}
          />
          <View style={styles.inputSeparator} />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder={placeholder2}
            value={value2}
            onChangeText={onChangeText2}
          />
        </>
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      )}
      {showPasswordToggle && (
        <TouchableOpacity onPress={onTogglePassword} style={styles.showPasswordButton}>
          <Text style={styles.showPasswordText}>Show</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  backButton: {
    marginTop: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: 'mon-b',
    color: Color.colorOrange_100,
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
    
  },
  inputLabel: {
    fontFamily: 'mon-sb',
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    marginBottom: 8,
  },
  inputField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
    padding: 12,
  },
  halfInput: {
    flex: 0.5,
  },
  inputSeparator: {
    width: 1,
    backgroundColor: Color.colorGray_300,
  },
  prefix: {
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    padding: 12,
  },
  helperText: {
    fontFamily: 'mon',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    marginBottom: 20,
  },
  link: {
    color: Color.colorBlack,
    textDecorationLine: 'underline',
  },
  showPasswordButton: {
    padding: 12,
  },
  showPasswordText: {
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  agreeButton: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 20,
  },
  agreeButtonText: {
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  termsText: {
    fontFamily: 'mon',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    marginBottom: 20,
  },
  infoText: {
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    marginBottom: 20,
  },
  optOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optOutText: {
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    flex: 1,
    marginRight: 10,
  },
  fullNameContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  fullInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_300,
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
    marginTop: 6,
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
});

export default SignUpScreen;