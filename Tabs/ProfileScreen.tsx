import * as React from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border } from "../Constants/Styles";
import Colors, { Color } from "@/Constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("Kevin Hart");
  const [phoneNumber, setPhoneNumber] = React.useState("+1 234 567 8900");
  const [image, setImage] = React.useState("../assets/ellipse-144.png");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <TouchableOpacity style={styles.profileInfo} onPress={handleEditPress}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.profileImage}
            contentFit="cover"
            source={{ uri: image }}
          />
        </TouchableOpacity>
        <View style={styles.profileTextContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.viewProfile}>{phoneNumber}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
      </TouchableOpacity>

      {isEditing && (
        <View style={styles.editSection}>
          <Text style={styles.editTitle}>Edit Personal Profile</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleEditPress}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}  
        //@ts-ignore
        onPress={() => navigation.navigate('Personal')}>
          <Ionicons name="person-outline" size={24} color={Color.colorBlack} style={styles.menuIcon}/>
          <Text style={styles.menuItemText}>Personal information</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="card-outline" size={24} color={Color.colorBlack} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Payments and payouts</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={24} color={Color.colorBlack} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="lock-closed-outline" size={24} color={Color.colorBlack} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Privacy and sharing</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color={Color.colorBlack} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Get help</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="information-circle-outline" size={24} color={Color.colorBlack} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Give us feedback</Text>
          <Ionicons name="chevron-forward" size={24} color={Color.colorGray_200} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HostButton}
      //@ts-ignore
      onPress={() => navigation.navigate('First')}>
        <Text style={styles.logoutText}>Sign Up As Host</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>Version 1.0.0 ©Copyright reserved</Text>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: "mon-b",
    color: Color.colorBlack,
  },
  settingsButton: {
    padding: 8,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: FontSize.size_lg,
    fontFamily: "mon-sb",
    color: Color.colorBlack,
  },
  viewProfile: {
    fontSize: FontSize.size_sm,
    fontFamily: "mon",
    color: Color.colorGray_200,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontFamily: "mon",
    color: Color.colorBlack,
  },
  logoutButton: {
    alignItems: 'center',
    padding: 12,
    marginTop: 24,
  },
  HostButton: {
    alignItems: 'center',
    marginTop: 18,
  },
  logoutText: {
    fontFamily: "mon-sb",
    color: Colors.primary,
  },
  versionText: {
    fontSize: FontSize.size_sm,
    fontFamily: "mon-l",
    color: Color.colorGray_200,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  editSection: {
    padding: 16,
    backgroundColor: Color.colorGray_100,
    marginBottom: 24,
  },
  editTitle: {
    fontSize: FontSize.size_lg,
    fontFamily: "mon-sb",
    color: Color.colorBlack,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: FontSize.size_sm,
    fontFamily: "mon",
    color: Color.colorGray_200,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    padding: 12,
    fontFamily: "mon",
  },
  saveButton: {
    backgroundColor: Colors.primary,
    borderRadius: Border.br_8xs,
    padding: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: Color.colorWhite,
    fontFamily: "mon-sb",
  },

});

export default ProfileScreen;
