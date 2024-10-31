import { defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhoneupdateScreen = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const maxLength = 50;
  const [done, setDone] = useState(false);

  const WorkingNumber = () => {
    console.log('phone number Upload successful');
    router.navigate('./finish');
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressBar}>
          <View style={[styles.box,]} />
        </View>
      </View>
      <View style={{ paddingRight: 30 }}>
        <Text style={styles.title}>Add your mobile number</Text>
        <Text style={styles.description}>
          We’ll send you booking requests, reminders, and other notifications. This number should be
          able to receive texts or calls
        </Text>
        {!done ? (
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={maxLength}
            keyboardType='numeric'
          />
        ) : (
          <Text style={{ fontSize: 50, marginBottom: 8 }}>{phoneNumber}</Text>
        )}
        <Text style={styles.characterCount}>Students must be able to use this number to get in touch with you</Text>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140 }]} onPress={() => navigation.goBack()} >
          <Text style={defaultStyles.btnText}> BACK</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={[defaultStyles.signUpButton, {width: 140}]}
          //@ts-ignore 
          onPress={() => navigation.navigate('Update')}
        >
          <Text style={defaultStyles.btnText}> NEXT</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 33,
    fontFamily: 'mon-b',
    marginBottom: 24,
  },
  description: {
    fontSize: 17,
    color: '#666',
    marginBottom: 24,
    fontFamily: 'mon-sb',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    fontFamily: 'mon',
  },
  characterCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    fontFamily: 'mon-l',
  },
  header: {
    marginBottom: 16,
    marginTop: 30,
  },
  progressBar: {
    backgroundColor: '#ccc',
    width: '100%',
    borderRadius: 5,
  },
  box: {
    width: 280,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default PhoneupdateScreen;
