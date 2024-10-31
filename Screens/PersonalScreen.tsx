import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  SafeAreaView
} from 'react-native';

const PersonalScreen = () => {
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [gender, setGender] = useState('Female');
  const [joinDate, setJoinDate] = useState(new Date('2022-01-01'));
  const [isHost, setIsHost] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Account Information</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{gender}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Joined Date</Text>
          <Text style={styles.value}>{joinDate.toLocaleDateString()}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Account Type</Text>
          <Text style={styles.value}>{isHost ? 'User' : 'Host'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default PersonalScreen;
