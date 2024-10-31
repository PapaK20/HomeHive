import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors, { Color } from '@/Constants/Colors';
import airbnbListings from '@/assets/data/airbnb-listings.json';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Listing: { id: string };
};

type BookingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Listing'>;

const BookingItem: React.FC<{
  id: string;
  title: string;
  location: string;
  dates: string;
  image: string;
  status: string;
}> = ({ id, title, location, dates, image, status }) => {
  const navigation = useNavigation<BookingsScreenNavigationProp>();

  return (
    <TouchableOpacity 
      style={styles.bookingItem}
      //@ts-ignore
      onPress={() => navigation.navigate('Payment', { id })}>
      <Image source={{ uri: image }} style={styles.bookingImage} />
      <View style={styles.bookingInfo}>
        <Text style={styles.bookingTitle}>{title}</Text>
        <Text style={styles.bookingLocation}>{location}</Text>
        <Text style={styles.bookingDates}>{dates}</Text>
        <Text style={styles.bookingStatus}>{status}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={Colors.grey} />
    </TouchableOpacity>
  );
};

const Bookings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trips</Text>
      <FlatList
        data={airbnbListings as any[]}
        renderItem={({ item }) => (
          <BookingItem
            id={item.id}
            title={item.name}
            location={`${item.city}, ${item.country}`}
            image={item.xl_picture_url} dates={''} status={''}          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookingItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  bookingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 18,
    fontFamily: 'mon-b',
    marginBottom: 4,
  },
  bookingLocation: {
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 2,
  },
  bookingDates: {
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 2,
  },
  bookingStatus: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: 'mon-b',
  },
});

export default Bookings;
