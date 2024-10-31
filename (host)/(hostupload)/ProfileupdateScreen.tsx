import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { defaultStyles } from '@/Constants/Styles';

const ProfileUpdateScreen = () => {
  const [loading, setLoading] = useState(false);
  const [avatar_url, setAvatar_url] = useState('');
  const [newAvatar_url, setNewAvatar_url] = useState('');

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      // Fetch user profile data from the server
      setLoading(true);

      // Simulated data for testing
      const data = {
        firstname: 'John',
        lastname: 'Doe',
        username: 'johndoe',
        avatar_url: 'https://example.com/avatar.jpg',
        created_at: '2022-01-01',
      };

      setAvatar_url(data.avatar_url);
      setNewAvatar_url(data.avatar_url);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  const updateUserProfileWithImageUrl = async (imageUrl: string) => {
    try {
      // Update user profile with the new image URL
      console.log('User profile updated with image URL:', imageUrl);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      base64: true,
    });

    if (!result.canceled) {
      // Do something with the uploaded image URL, e.g., save it to the user's profile
      await updateUserProfileWithImageUrl(result.assets[0].uri);
      setAvatar_url(result.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add your progress bar here */}
        <View style={styles.progressBar}>
          <View style={[styles.box]} />
        </View>
      </View>
      <Text style={styles.title}>Add your photo</Text>
      <Image
        source={avatar_url ? { uri: avatar_url } : require('@/assets/images/avatar.png')} // replace with your image URL
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={onCaptureImage}>
        <Icon name="cloud-upload-outline" size={25} color="#000000" />
        <Text style={styles.uploadButtonText}>UPLOAD PHOTO</Text>
      </TouchableOpacity>
    

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 0 }}>
        <TouchableOpacity style={[defaultStyles.signUpButton, { width: 140 }]} onPress={() => navigation.goBack()}>
          <Text style={defaultStyles.btnText}> BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.signUpButton, { width: 140 }]}
          //@ts-ignore
          onPress={() => navigation.navigate('Final2')}
        >
          <Text style={defaultStyles.btnText}> NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 33,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: 'mon-b',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  uploadButton: {
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#888888',
    backgroundColor: '#ffff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    width: 210,
    marginBottom: 10,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'mon-sb',
  },
  useCurrentPhoto: {
    fontSize: 17,
    color: '#045F70',
    marginBottom: 15,
  },
  header: {
    // Add styles for your header/progress bar here
    marginBottom: 16,
    marginTop: 30,
  },
  progressBar: {
    backgroundColor: '#ccc',
    width: '100%',
    borderRadius: 5,
  },
  box: {
    width: 210,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ProfileUpdateScreen;
