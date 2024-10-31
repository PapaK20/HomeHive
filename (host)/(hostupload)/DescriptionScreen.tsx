import { defaultStyles } from '@/Constants/Styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DescriptionScreen = () => {
  const [hiveDescription, setDescription] = useState('');
  const maxLength = 600;
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.progressBar}>
        <View style={[styles.box,]}/>
        </View>
      </View>
        <View style={{paddingRight: 30}}>
      <Text style={styles.title}>Hive Description </Text>
      <Text style={styles.description}>
      Write a quick summary of your hive. You can highlight what’s special about your place, the environment, and how you’ll interact with others.</Text>
      <TextInput
        style={styles.input}
        placeholder="Give a brief description of the rooms including amenities..."
        value={hiveDescription}
        onChangeText={setDescription}
        maxLength={maxLength}
        multiline={true}
      />
      <Text style={styles.characterCount}>
        {maxLength - hiveDescription.length} characters remaining
      </Text>


      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140 }]} onPress={() => navigation.goBack()} >
          <Text style={defaultStyles.btnText}> BACK</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={[defaultStyles.signUpButton, {width: 140}]}
          //@ts-ignore 
          onPress={() => navigation.navigate('Identity')}
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
    fontFamily: 'mon-sb'
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    fontFamily: 'mon'
  },
  characterCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    fontFamily: 'mon-l'
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
    width: 140,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default DescriptionScreen;
