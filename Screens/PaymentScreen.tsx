import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const [checked, setChecked] = React.useState('paypal');
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = React.useState(false);

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    setIsPhoneNumberValid(text.length === 10);
  };

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Discount</Text>
          <Text style={styles.summaryText}>-$3.75</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={[styles.summaryText, styles.totalText]}>Total</Text>
          <Text style={[styles.summaryText, styles.totalText]}>$22.15</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addItemButton}>
        <Text style={styles.addItemText}>+ Add more items</Text>
      </TouchableOpacity>

      <View style={styles.paymentMethodsContainer}>
        <Text style={styles.paymentMethodsTitle}>Payment method</Text>
        <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
          <View style={[styles.paymentMethodItem, checked === 'paypal' && styles.selectedMethod]}>
            <View style={styles.paymentIconWrapper}>
              <Image
                style={styles.paymentIcon}
                source={require('../assets/images/paypal.png')}
              />
            </View>
            <Text style={styles.paymentMethodText}>PayPal</Text>
            <RadioButton value="paypal" color="#0070BA" />
          </View>
          <View style={[styles.paymentMethodItem, checked === 'bank' && styles.selectedMethod]}>
            <View style={styles.paymentIconWrapper}>
              <AntDesign name="bank" size={24} color="#4B99E9" />
            </View>
            <Text style={styles.paymentMethodText}>Bank</Text>
            <RadioButton value="bank" color="#0070BA" />
          </View>
          <View style={[styles.paymentMethodItem, checked === 'telecel' && styles.selectedMethod]}>
            <View style={styles.paymentIconWrapper}>
              <Image
                style={styles.paymentIcon}
                source={require('../assets/images/telecel.png')}
              />
            </View>
            <Text style={styles.paymentMethodText}>Telecel</Text>
            <RadioButton value="telecel" color="#4B99E9" />
          </View>
          <View style={[styles.paymentMethodItem, checked === 'MoMo' && styles.selectedMethod]}>
            <View style={styles.paymentIconWrapper}>
              <Image
                style={styles.paymentIcon}
                source={require('../assets/images/MTN.png')}
              />
            </View>
            <Text style={styles.paymentMethodText}>MoMo •••• 3021</Text>
            <RadioButton value="momo" color="#1A1F71" />
          </View>
        </RadioButton.Group>
        {checked !== '' && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={text => setFullName(text)}
            />
            <TextInput
              style={[styles.input, isPhoneNumberValid ? styles.validInput : styles.invalidInput]}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              keyboardType="numeric"
            />
          </View>
        )}
        <TouchableOpacity
          style={[styles.addPaymentButton, isPhoneNumberValid && styles.validPaymentButton]}
          disabled={!isPhoneNumberValid}
        >
          <Text style={styles.addPaymentText}>+ Add payment method</Text>
        </TouchableOpacity>
      </View>

      {isPhoneNumberValid && (
        <TouchableOpacity style={styles.placeOrderButton}
        //@ts-ignore
      onPress={() => navigation.navigate('Main')}>
          <Text style={styles.placeOrderText}>Pay $22.15</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  summaryContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
    color: '#4F4F4F',
  },
  totalText: {
    fontWeight: 'bold',
  },
  addItemButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  addItemText: {
    color: '#007AFF',
    fontSize: 16,
  },
  paymentMethodsContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  paymentMethodsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#F9F9F9',
  },
  selectedMethod: {
    borderColor: '#007AFF',
    backgroundColor: '#E0F2FE',
  },
  paymentIconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentIcon: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  addPaymentButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  addPaymentText: {
    color: '#007AFF',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  validInput: {
    borderColor: '#007AFF',
  },
  invalidInput: {
    borderColor: '#FF0000',
  },
  validPaymentButton: {
    backgroundColor: '#007AFF',
  },
  placeOrderButton: {
    backgroundColor: '#FF5A5F',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: 8,
  },
  placeOrderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
