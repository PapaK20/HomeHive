import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { FontSize, Border } from "../Constants/Styles";
import { Color } from "@/Constants/Colors";
import { useNavigation } from '@react-navigation/native';

const CampusDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={styles.campusImage}
          contentFit="cover"
          source={require("../assets/rectangle-46.png")}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.universityName}>
            Kwame Nkruhmah University of Science & Technology
          </Text>
          <Text style={styles.universityDescription}>
            Kwame Nkrumah University of Science and Technology, commonly known as
            UST, Tech or Kwame Tech, is a public university located in Kumasi,
            Ashanti region, Ghana. The university has a wide range of private
            hostels, campus dorms and apartment accommodations for students to
            consider
          </Text>
          <Text style={styles.avgHostelRating}>
            Avg Hostel Rating:
          </Text>
          <TouchableOpacity style={styles.continueButton} 
          //@ts-ignore
          onPress={() => navigation.navigate('Main')}>
            <Text style={styles.continueText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  campusImage: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    padding: 20,
    marginTop: -20,
  },
  universityName: {
    fontSize: FontSize.size_17xl,
    fontFamily: 'mon-b',
    color: "rgba(0, 0, 0, 0.83)",
    marginBottom: 20,
  },
  universityDescription: {
    fontSize: FontSize.size_mid,
    fontFamily: 'mon',
    color: Color.colorDimgray_100,
    marginBottom: 20,
  },
  avgHostelRating: {
    fontSize: FontSize.size_lg,
    fontFamily: 'mon-b',
    color: Color.colorBlack,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: Border.br_5xs,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: 'mon-b',
    textTransform: "uppercase",
  },
});

export default CampusDetails;
