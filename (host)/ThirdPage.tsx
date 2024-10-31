import { defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native';
import { Checkbox, Provider as PaperProvider, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ThirdPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState({
    essentials: true,
    airConditioning: true,
    heat: false,
    closetDrawers: false,
    tv: false,
    fridge: false,
    roomDesks: false,
  });

  type AmenityKey = 'essentials' | 'airConditioning' | 'heat' | 'closetDrawers' | 'tv' | 'fridge' | 'roomDesks';

  const navigation = useNavigation();

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.progressBar}>
            <View style={[styles.box,]}/>
          </View>
        </View>
        
        <Text style={styles.title}>What amenities do you offer?</Text>
        <Text style={[styles.description, { fontFamily: 'mon' }]}>
          This is important for process. Please check the boxes that apply and don’t accidentally choose something you don't have.
        </Text>
        <View>
          <Text style={[styles.essentialdiscription, { fontFamily: 'mon' }]}>
            Towels, bed sheets,  pillows, etc
          </Text>
        </View>

        {Object.keys(selectedAmenities).map((amenity, index) => (
          <View key={amenity}>
            <View style={styles.checkboxContainer}>
              <Text style={[styles.checkboxLabel, { fontFamily: 'mon' }]}>
                {amenity.charAt(0).toUpperCase() + amenity.slice(1).replace(/([A-Z])/g, ' $1')}
              </Text>
              <Checkbox
                status={selectedAmenities[amenity as AmenityKey] ? 'checked' : 'unchecked'}
                // onPress={() => toggleAmenity(amenity as AmenityKey)}
                color="#00695c"
              />
            </View>
            {index < Object.keys(selectedAmenities).length - 1 && <Divider />}
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140 }]} onPress={() => navigation.goBack()} >
            <Text style={defaultStyles.btnText}> BACK</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140}]} 
          //@ts-ignore
          onPress={() => navigation.navigate('Final')}
          >
            <Text style={defaultStyles.btnText}> NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginTop: 16,
    fontFamily: 'mon-b',
    marginBottom: 8,
  },
  description: {
    fontSize: 17,
    color: '#666',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  checkboxLabel: {
    fontSize: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  essentialdiscription: {
    fontSize: 18,
    color: '#666',
    top: 70,
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

export default ThirdPage;
