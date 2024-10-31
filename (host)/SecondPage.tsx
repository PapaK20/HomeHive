import { defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable, Alert, Platform } from 'react-native';
import { Checkbox, Button, RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {
  const [loading, setLoading] = useState(false);
  const [placeType, setPlaceType] = useState('');
  const [university, setUniversity] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [privateRoom, setPrivateRoom] = useState(false);
  const [sharedRoom, setSharedRoom] = useState(false);
  const [numPrivateRooms, setNumPrivateRooms] = useState<number | null>(null);
  const [numSharedRooms, setNumSharedRooms] = useState<number | null>(null);
  const [bathroomOption, setBathroomOption] = useState('no');
  
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header1}>
            <Text style={styles.maintitle}>About your Hive</Text>
        </View>
      <View style={styles.header}>
        <View style={styles.progressBar}>
        <View style={[styles.box,]}/>
        </View>
      </View>
      <Text style={styles.title}>Tell us about your{'\n'} HomeHive!</Text>

        <Text style={styles.label}>Comodity Type</Text>
        <View style={styles.border}>
      <RNPickerSelect
        onValueChange={(value) => setPlaceType(value)}
        items={[
          { label: 'Hostel', value: 'Hostel' },
          { label: 'Homestel', value: 'Homestel' },
          { label: 'Apartment', value: 'Apartment' },
          { label: 'Campus Hall', value: 'Campus Hall' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: '', value: null }}
      />
      </View>


      <Text style={styles.subLabel}>University/College</Text>
      <View style={styles.border}>
      <RNPickerSelect
        onValueChange={(value) => setUniversity(value)}
        items={[
          { label: 'Kwame Nkrumah University Of Science & Technology', value: 'Kwame Nkrumah University Of Science & Technology' },
          { label: 'University of Ghana', value: 'University of Ghana' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: '', value: null }}
      />
      </View>

      <Text style={styles.subLabel}>Location details</Text>
      <TextInput
        style={styles.input}
        placeholder="Address 1"
        value={address1}
        onChangeText={setAddress1}
      />
      <TextInput
        style={styles.input}
        placeholder="Address 2 (Optional)"
        value={address2}
        onChangeText={setAddress2}
      />

      <Text style={styles.subLabel}>What can students have?</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={privateRoom ? 'checked' : 'unchecked'}
          onPress={() => setPrivateRoom(!privateRoom)}
        />
        <Text style={styles.roomtype}>Private room</Text>
      </View>
      <Text style={styles.checkboxmessg}>Students have a room to themselves.</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={sharedRoom ? 'checked' : 'unchecked'}
          onPress={() => setSharedRoom(!sharedRoom)}
        />
        <Text style={styles.roomtype}>Shared room</Text>
      </View>
      <Text style={styles.checkboxmessg}>Students sleep in a room or common area{'\n'}
      that could be shared with other roommates</Text>

      {privateRoom && <Text style={styles.subLabel}>How many private rooms?</Text>}
      {privateRoom &&<TextInput
        style={styles.input}
        placeholder="Enter number"
        value={numPrivateRooms !== null ? numPrivateRooms.toString() : ''}
        onChangeText={(text) => setNumPrivateRooms(parseFloat(text))}
        keyboardType="numeric"
      />}

      {sharedRoom && <Text style={styles.subLabel}>How many shared rooms?</Text>}
      {sharedRoom &&<TextInput
        style={styles.input}
        placeholder="Enter number"
        value={numSharedRooms !== null ? numSharedRooms.toString() : ''}
        onChangeText={(text) => setNumSharedRooms(parseFloat(text))}
        keyboardType="numeric"
      />}

      <Text style={styles.subLabel}>Are there bathrooms in each room?</Text>
      <RadioButton.Group
        onValueChange={newValue => setBathroomOption(newValue)}
        value={bathroomOption}
      >
        <View style={styles.radioContainer}>
          <RadioButton
          color={Platform.OS === 'ios' ? '#007AFF' : undefined}
           value="yes" />
          <Text style={styles.question}>Yes</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          uncheckedColor={Platform.OS === 'ios' ? 'yellow' : undefined}
           value="no" />
          <Text style={styles.question}>No, they're shared</Text>
        </View>
      </RadioButton.Group>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140, }]} onPress={() => navigation.goBack()} >
            <Text style={defaultStyles.btnText}> BACK</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140, }]} 
          //@ts-ignore
          onPress={() => navigation.navigate('Third')}>
            <Text style={defaultStyles.btnText}> NEXT</Text>
          </TouchableOpacity>
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  maintitle: {
    color: '#2D0C57',
    fontSize: 33,
    marginBottom: 8,
    fontFamily: 'mon-b',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'mon-sb',
  },
  label: {
    fontSize: 18,
    marginTop: 40,
    marginBottom: 8,
    fontFamily: 'mon-l',
  },
  subLabel: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
    fontFamily: 'mon-l',
  },
  input: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontFamily: 'mon',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  border: {
    borderWidth: 1,
    borderColor: '#8B8B8B', 
    borderRadius: 4,
  },
  question: {
    fontFamily: 'mon-l',
    marginBottom: 3,
  },
  roomtype: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 8,
    fontFamily: 'mon-sb',
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  checkboxmessg: {
    fontSize: 14,
    color: '#888888',
    marginLeft: 35,
    marginBottom: 16,
    top: -10,
    fontFamily: 'mon-l',
  },
  header1: {
    marginBottom: 16,
    marginTop: 16,
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
    width: 120,
    borderWidth: 1,
    borderColor: 'black',
  }
});

const pickerSelectStyles = {
   inputIOS: {
     height: 40,
     marginBottom: 12,
     color: 'black',
   },
  inputAndroid: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 3,
    color: 'black',
  },
};

export default SecondPage;
