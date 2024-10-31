import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { defaultStyles } from '@/Constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/Constants/Colors';
import { Link, router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

// type UserData = {
//   id: string
//   username: string
//   firstname: string
//   lastname: string
//   avatar_url: string
//   created_at: string
// }


const HostProfile = () => {
  const [host, setHost] = useState(false)
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [avatar_url, setAvatar_url] = useState('')
  const [newUsername, setNewUsername] = useState('');
  const [newFirstname, setNewFirstname] = useState('');
  const [newLastname, setNewLastname] = useState('');
  const [newAvatar_url, setNewAvatar_url] = useState('');
  const [user, setUser] = useState([]);
  const [updated_at, setUpdated_at] = useState('');


  // Load user data on mount

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
        <Ionicons name="notifications-outline" size={26} />
      </View>
      
      <View style={styles.card}>
        <View>
        <TouchableOpacity>
          <Image source={ avatar_url ? { uri: avatar_url } : require('@/assets/images/avatar.png')} style={styles.avatar} />
        </TouchableOpacity>
        </View>
        
        <View style={{ flexDirection: 'row', gap: 6 }}>
          
        {!editing && (
              <View  style={styles.editRow}>
                <Text style={{ fontFamily: 'mon-b', fontSize: 22 }}>
                  {firstname} {lastname}
                </Text>
                <TouchableOpacity onPress={() => setEditing(true)}>
                  <Ionicons name="create-outline" size={24} />
                </TouchableOpacity>
              </View>
            )}
            {editing && (
              <View style={styles.editRow}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor="grey"
                  value={newFirstname || ''}
                  onChangeText={setNewFirstname}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor="grey"
                  value={newLastname || ''}
                  onChangeText={setNewLastname}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TouchableOpacity>
                  <Ionicons name="checkmark-outline" size={24} />
                </TouchableOpacity>
              </View>
            )}
            </View>
            <Text>{username }</Text>
            <Text>Since {updated_at ? new Date(updated_at).toLocaleDateString() : 'Unknown'}</Text>
          </View>

        <Link href={'../../../../../(tabs)/index'} asChild> 
         <TouchableOpacity  onPress={()=> router.navigate('../../../../../(tabs)')} style={{marginTop: 50}}>
          <Text style={styles.hostButton}>
            Check Things Out As A User?
          </Text>
        </TouchableOpacity> 
        </Link>

      <TouchableOpacity style={[defaultStyles.btn, styles.logoutbtn]}>
            <Text style={defaultStyles.btnText}>LOG OUT</Text>
      </TouchableOpacity>

      

          </SafeAreaView>
    
  );

}

  export default HostProfile

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  container: {
    flex: 1,
    padding: 26,
  },
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    color: '#dc2626',
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  logoutbtn: {
    alignItems: 'center',
  },
  hostButton: {
    textAlign: 'center',
    color : '#4EC7FD',
    fontSize : 16,
    fontFamily : 'mon',
    bottom : 50
  },
});



