import React from 'react';
import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity, FlatList } from 'react-native';
import { defaultStyles } from '@/Constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import listingsData from '@/assets/data/airbnb-listings.json';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const navigation = useNavigation();

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <TouchableOpacity 
     //@ts-ignore
     onPress={() => navigation.navigate('Preview', { item })}>      
    <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
    <Animated.Image 
  source={{ uri: item.picture_url && typeof item.picture_url === 'string' ? item.picture_url : undefined }} 
  style={styles.image}/>
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="#FF5A5F" />
              <Text style={styles.ratingText}>{item.review_scores_rating / 20}</Text>
            </View>
          </View>
          <Text style={styles.roomType}>{item.room_type}</Text>
          <Text style={styles.price}>Ghc {item.price} / night</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList 
        data={listingsData as any[]}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  heartButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
    padding: 8,
  },
  details: {
    padding: 16,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'mon-sb',
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: 'mon-sb',
  },
  roomType: {
    fontFamily: 'mon',
    color: '#666',
  },
  price: {
    fontFamily: 'mon-sb',
  },
});

export default Listings;
