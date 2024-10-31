import { Border, defaultStyles } from '@/Constants/Styles';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Color } from '@/Constants/Colors';

const UploadimageScreen = () => {
  const [showUpload, setShowUpload] = useState('');
  const [showUpload2, setShowUpload2] = useState('');
  const [showUpload3, setShowUpload3] = useState('');
  const [showUpload4, setShowUpload4] = useState('');
  const [showUpload5, setShowUpload5] = useState('');

  const uploadPhotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const img = result.assets[0];
      setShowUpload(img.uri);
    }
  };

  const uploadPhotos2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const img = result.assets[0];
      setShowUpload2(img.uri);
    }
  };

  const uploadPhotos3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const img = result.assets[0];
      setShowUpload3(img.uri);
    }
  };

  const uploadPhotos4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const img = result.assets[0];
      setShowUpload4(img.uri);
    }
  };

  const uploadPhotos5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const img = result.assets[0];
      setShowUpload5(img.uri);
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressBar}>
          <View style={[styles.box]} />
        </View>
      </View>

      <Text style={styles.title}>Add photos of your Hive</Text>
      <Text style={styles.description}>
        Photos help students imagine staying in your place. You can start with one and add more after you publish.
      </Text>

      <TouchableOpacity onPress={uploadPhotos}>
        <Image
          source={showUpload ? { uri: showUpload } : require('@/assets/images/default Hostel.jpg')}
          style={styles.uploadContainer}
        />
        <View style={{ alignItems: 'center' }}>
          {!showUpload && (
            <View style={styles.uploadButton}>
              <Icon name="cloud-upload-outline" size={25} color="#fff" />
              <Text style={styles.uploadButtonText}>UPLOAD PHOTOS</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {showUpload && (
        <TouchableOpacity onPress={uploadPhotos2}>
          <Image
            source={showUpload2 ? { uri: showUpload2 } : require('@/assets/images/hostel coridor.png')}
            style={styles.uploadContainer}
          />
          <View style={{ alignItems: 'center' }}>
            {!showUpload2 && (
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>+ ADD IMAGE</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}

      {showUpload2 && (
        <TouchableOpacity onPress={uploadPhotos3}>
          <Image
            source={showUpload3 ? { uri: showUpload3 } : require('@/assets/images/hostelbath.jpg')}
            style={styles.uploadContainer}
          />
          <View style={{ alignItems: 'center' }}>
            {!showUpload3 && (
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>+ ADD IMAGE</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}

      {showUpload3 && (
        <TouchableOpacity onPress={uploadPhotos4}>
          <Image
            source={showUpload4 ? { uri: showUpload4 } : require('@/assets/images/hostel studyroom.jpg')}
            style={styles.uploadContainer}
          />
          <View style={{ alignItems: 'center' }}>
            {!showUpload4 && (
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>+ ADD IMAGE</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}

      {showUpload4 && (
        <TouchableOpacity onPress={uploadPhotos5}>
          <Image
            source={showUpload5 ? { uri: showUpload5 } : require('@/assets/images/gettyimages.png')}
            style={styles.uploadContainer}
          />
          <View style={{ alignItems: 'center' }}>
            {!showUpload5 && (
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>+ ADD IMAGE</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}

      {showUpload && (
        <TouchableOpacity style={{ marginBottom: 30, alignItems: 'center' }}>
          <Icon2 name="cancel" size={40} color="#045F70" />
          <Text style={{ fontSize: 30, color: '#045F70' }}> Clear all</Text>
        </TouchableOpacity>
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
        <TouchableOpacity style={[defaultStyles.signUpButton, {width: 140 }]} onPress={() => navigation.goBack()} >
          <Text style={defaultStyles.btnText}> BACK</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={[defaultStyles.signUpButton, {width: 140}]}
          //@ts-ignore 
          onPress={() => navigation.navigate('Description')}
        >
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
  header: {
    marginBottom: 16,
    marginTop: 30,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 17,
    color: '#666',
    marginBottom: 24,
  },
  imagebox: {
    aspectRatio: 1,
    width: '95%',
    borderRadius: 15,
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    backgroundColor: 'white',
    objectFit: 'cover',
  },
  uploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#ccc',
    borderRadius: 10,
    height: 364,
    marginBottom: 24,
  },
  uploadButton: {
    backgroundColor: '#045F70',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    width: 150,
    bottom: 250,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  progressBar: {
    backgroundColor: '#ccc',
    width: '100%',
    borderRadius: 5,
  },
  box: {
    width: 70,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default UploadimageScreen;
