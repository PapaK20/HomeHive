import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors, { Color } from '@/Constants/Colors';

const bookingsData = [
  {
    id: '1',
    title: 'Cozy Cabin in the Woods',
    location: 'Lake Tahoe, CA',
    dates: 'Aug 15 - Aug 20, 2023',
    image: 'https://example.com/cabin.jpg',
    status: 'Upcoming',
  },
  // Add more booking items here
];

const BookingItem: React.FC<{
  title: string;
  location: string;
  dates: string;
  image: string;
  status: string;
}> = ({ title, location, dates, image, status }) => (
  <TouchableOpacity style={styles.bookingItem}>
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

const Bookings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trips</Text>
      <FlatList
        data={bookingsData}
        renderItem={({ item }) => <BookingItem {...item} />}
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
