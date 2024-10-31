import { Color } from '@/Constants/Colors';
import { Border, defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const FinalPage = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>1st Step complete!</Text>
        </View>
        <Text style={styles.stepDescription}>
          Tell us about your Hive so you can start publishing your place
        </Text>
        <View style={styles.changeContainer}>
          <TouchableOpacity 
          //@ts-ignore
          onPress={() => {navigation.navigate('Second');
          }}>
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
          <Icon name="check-circle" size={40} color="#00695c" />
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.stepContainer}>
        <Text style={styles.stepSubHeader}>STEP 2</Text>
        <Text style={styles.stepTitle}>Make it stand out</Text>
        <Text style={styles.stepDescription}>
          Photos, short description, title
        </Text>
        <TouchableOpacity
        //@ts-ignore
          onPress={() => {navigation.navigate('Upload');}}
          style={styles.continuebtn}>
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.stepContainer}>
        <Text style={styles.stepSubHeader}>STEP 3</Text>
        <Text style={[styles.stepTitle, styles.finishedTitle]}>Finish up</Text>
        <Text style={[styles.stepDescription, styles.finishedDescription]}>
          Set price, booking settings, etc
        </Text>
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
  stepContainer: {
    paddingVertical: 16,
    marginRight: 50,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  stepTitle: {
    fontSize: 33,
    fontFamily: 'mon-b',
    color: '#00695c',
  },
  stepSubHeader: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    marginTop: 40,
    fontFamily: 'mon-sb',
  },
  stepDescription: {
    fontSize: 17,
    fontFamily: 'mon-sb',
    color: '#666',
    marginBottom: 8,
  },
  changeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  changeText: {
    color: '#00695c',
    fontFamily: 'mon',
    fontSize: 17,
  },
  continuebtn: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: Border.br_5xs,
    width: 330,
    padding: 15,
    alignItems: 'center',
    margin: 20,
    marginLeft: 10,
  },
  continueText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: 'mon-b',
    textTransform: "uppercase",
  },
  finishedTitle: {
    color: '#ccc',
    textDecorationLine: 'underline',
  },
  finishedDescription: {
    color: '#ccc',
    fontStyle: 'italic',
  },
  divider: {
    marginVertical: 8,
  },
});

export default FinalPage;
