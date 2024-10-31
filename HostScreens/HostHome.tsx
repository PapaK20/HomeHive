import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/Constants/Colors';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  FirstScreen: undefined;
  Main: undefined;
  SecondScreen : undefined;
  UploadScreen: undefined;
};

// Define the type for the props expected by FirstScreen
type UploadscreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'UploadScreen'>;
};
const HostHome = ({ navigation }: UploadscreenProps) => {
  
    return (
      <><>

        <StatusBar style="dark" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>HOST</Text>
            <TouchableOpacity
              style={styles.addbtn}
             //@ts-ignore 
              onPress={() => navigation.navigate('HUpload')}>
              <Ionicons name="add-sharp" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </></>
    );
  }


  

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 100,
    elevation: 0,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 17,
  },
  headerText: {
    fontFamily: 'mon-b',
    marginTop: 17,
    textAlignVertical: 'bottom',
    fontSize: 20,
  },
  addbtn:{
    marginTop: 17,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 60
  }
});

export default HostHome;
