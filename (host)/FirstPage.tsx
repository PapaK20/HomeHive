import { Border, defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color } from '@/Constants/Colors';

const FirstPage = () => {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Set up your HomeHive!</Text>
      
      <View style={styles.stepContainer}>
        <View style={styles.stepContent}>
          <Text style={styles.stepTitle}>1  Tell us about your Hive</Text>
          <Text style={styles.stepDescription}>Share some basic info, such as where it is and how many rooms are available.</Text>
        </View>
        <Image source={{uri: 'https://vguhsejvmsiaczfththm.supabase.co/storage/v1/object/public/campus_pics/setup%20host/tellusaboutyourhive.png'}} style={styles.stepImage} />
      </View>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        </View>
      
      <View style={styles.stepContainer}>
        <View style={styles.stepContent}>
          <Text style={styles.stepTitle}>2  Make it stand out</Text>
          <Text style={styles.stepDescription}>Add 5 or more photos including interiors and exteriors, and titles and descriptions.</Text>
        </View>
        <Image source={{uri: 'https://vguhsejvmsiaczfththm.supabase.co/storage/v1/object/public/campus_pics/setup%20host/makeitstandout.png'}} style={styles.stepImage} />
      </View>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        </View>
      
      <View style={styles.stepContainer}>
        <View style={styles.stepContent}>
          <Text style={styles.stepTitle}>3  Finish up and issue</Text>
          <Text style={styles.stepDescription}>Choose the specification of students you’d be accepting, set a starting price, and publish your listing.</Text>
        </View>
        <Image source={{uri: 'https://vguhsejvmsiaczfththm.supabase.co/storage/v1/object/public/campus_pics/setup%20host/finishupandissue.png'}} style={styles.stepImage} />
      </View>
      
      <TouchableOpacity style={[styles.signUpButton, {width: 320}]} 
      //@ts-ignore
      onPress={() => navigation.navigate('Second')}>
        <Text style={styles.signUpText}> GET STARTED</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    width: 373,
    fontSize: 36,
    marginTop: 76,
    marginBottom: 80,
    color: '#2D0C57',
    fontFamily: 'mon-b',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  stepContent: {
    flex: 1,
    marginLeft: 12,
    padding: 13,
  },
  stepTitle: {
    fontSize: 20,
    fontFamily: 'mon-sb',
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    marginLeft: 19,
    fontFamily: 'mon',
  },
  stepImage: {
    width: 113,
    height: 103,
    marginLeft: 16,
    borderRadius: 8,
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
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default FirstPage;
