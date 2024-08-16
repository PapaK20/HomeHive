import * as React from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize } from "../Constants/Styles";
import Colors, { Color } from "@/Constants/Colors";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const campusData = [
  {
    id: '1',
    name: 'Kwame Nkrumah University Of Science & Technology',
    location: 'Kumasi - Main Campus',
    image: require("../assets/rectangle-57.png"),
    description: 'Halls, Hostels, Homestels.',
  },
  {
    id: '2',
    name: 'Kwame Nkrumah University Of Science & Technology',
    location: 'Obuasi - Obuasi Campus',
    image: require("../assets/rectangle-57.png"),
    description: 'Halls, Hostels, Homestels.',
  },
  {
    id: '3',
    name: 'University of Ghana',
    location: 'Cape Coast, Central',
    image: require("../assets/rectangle-58.png"),
    description: 'Campus Dorms, Hostels, Apartments all available.',
  },
  {
    id: '4',
    name: 'University of Cape Coast',
    location: 'Cape Coast, Central',
    image: require("../assets/rectangle-59.png"),
    description: 'Campus Dorms, Hostels, Apartments all available.',
  },
];

const CampusScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
     <View>
          <Text style={{ fontFamily: 'mon-b',
            padding: 5,
            textAlign: "center",
            fontSize: FontSize.size_17xl,
            marginTop: 35,
          }}>
           CAMPUS
          </Text>
        </View>
        <View style={styles.actionRow}>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
              <AntDesign name="search1" size={24} />
                <View>
                  <Text style={{ color: Colors.grey, fontFamily: 'mon'  }}>Select Campus</Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {campusData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} 
          //@ts-ignore
            onPress={() => navigation.navigate('Campus2')}>
            <Image
              style={styles.campusImage}
              contentFit="cover"
              source={item.image}
            />
            <Text style={styles.universityTypo}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.campusTypo}>{item.description}</Text>
            </TouchableOpacity>
        ))}
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
    padding: 15,
  },
  card: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  campusImage: {
    width: '100%',
    height: 102,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
  },
  location: {
    fontFamily: 'mon',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  universityTypo: {
    fontFamily: 'mon-b',
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    padding: 10,
  },
  campusTypo: {
    fontFamily: 'mon',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },

  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    marginLeft: 7,
    alignItems: 'center',
    width: 330,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    marginBottom: 20,
  },
});

export default CampusScreen;
