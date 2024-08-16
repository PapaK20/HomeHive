import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Dimensions, FlatList } from 'react-native';
import { Image } from "expo-image";
import { FontSize, Border } from "../Constants/Styles";
import Colors, { Color } from "@/Constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const images = [
  'https://kosass.knust.edu.gh/assets/images/hostelhttps://kosass.knust.edu.gh/api/images/p3-hostel/image-1654527075563.jpegs/p3-hostel.jpg',
  'https://example.com/p3-hostel-2.jpg',
  'https://example.com/p3-hostel-3.jpg',
];

const roomOptions = [
  { name: 'Single room', icon: 'person-outline', description: 'Private room for one person', price: 5000 },
  { name: '2 in a room', icon: 'people-outline', description: 'Shared room with one other person', price: 3500 },
  { name: '3 in a room', icon: 'people-outline', description: 'Shared room with two other people', price: 3000 },
];

const PreviewScreen = ({ route }: { route: { params: { item: any } } }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const [isRoomDetailsVisible, setIsRoomDetailsVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const shareListing = async () => {
    try {
      await Share.share({ title: item.name, url: item.listing_url });
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
          [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
        ),
      },
      {
        scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
      },
    ],
  }));

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
  }));

  const renderHeader = () => (
    <Animated.View style={[headerAnimatedStyle, styles.header]}>
      <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.bar}>
        <TouchableOpacity style={styles.roundButton} onPress={shareListing}>
          <Ionicons name="share-outline" size={22} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Ionicons name="heart-outline" size={22} color={'#000'} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  const renderImageCarousel = () => (
    <>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Animated.Image
            source={{ uri: item }}
            style={[styles.image, imageAnimatedStyle]}
            resizeMode="cover"
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        onScroll={({ nativeEvent }) => {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if (slide !== currentImageIndex) {
            setCurrentImageIndex(slide);
          }
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentImageIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </>
  );

  const renderRoomOptions = () => (
    <>
      <Text style={styles.sectionTitle}>Room Options</Text>
      <TouchableOpacity 
        style={styles.roomInfo}
        onPress={() => setIsRoomDetailsVisible(!isRoomDetailsVisible)}
      >
        <Text style={styles.roomDetails}>{selectedRoom.name}</Text>
        <Ionicons 
          name={isRoomDetailsVisible ? "chevron-up" : "chevron-down"} 
          size={24} 
          color={Color.colorBlack} 
        />
      </TouchableOpacity>
      {isRoomDetailsVisible && (
        <View style={styles.roomOptionsContainer}>
          {roomOptions.map((option) => (
            <TouchableOpacity 
              key={option.name}
              style={[
                styles.roomOption,
                selectedRoom.name === option.name && styles.selectedRoomOption
              ]}
              onPress={() => setSelectedRoom(option)}
            >
              <Ionicons name={option.icon as any} size={24} color={Color.colorBlack} />
              <View style={styles.roomOptionTextContainer}>
                <Text style={styles.roomOptionName}>{option.name}</Text>
                <Text style={styles.roomOptionDescription}>{option.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );

  const renderHostInfo = () => (
    <>
      <Text style={styles.sectionTitle}>Hosted by</Text>
      <View style={styles.hostView}>
        <Image source={{ uri: item.host_picture_url }} style={styles.hostImage} />
        <View>
          <Text style={styles.hostName}>{item.host_name}</Text>
          <Text style={styles.hostInfo}>Superhost · {item.host_total_listings_count} listings</Text>
        </View>
      </View>
    </>
  );

  const renderAmenities = () => (
    <>
      <Text style={styles.sectionTitle}>Amenities</Text>
      <FlatList
        data={item.amenities}
        renderItem={({ item }) => (
          <View style={styles.amenityItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color={Color.colorBlack} />
            <Text style={styles.amenityText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </>
  );

  const renderFooter = () => (
    <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity style={styles.footerText}>
          <Text style={styles.footerPrice}>GH₵ {selectedRoom.price}</Text>
          <Text>per year</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {renderImageCarousel()}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.smart_location}</Text>
          <Text style={styles.rooms}>
            {item.room_type} · {item.accommodates} guests · {item.bedrooms} bedrooms · {item.beds} beds · {item.bathrooms} baths
          </Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Ionicons name="star" size={16} />
            <Text style={styles.ratings}>
              {item.review_scores_rating / 20} · {item.number_of_reviews} reviews
            </Text>
          </View>
          <View style={styles.divider} />
          {renderRoomOptions()}
          <View style={styles.divider} />
          {renderHostInfo()}
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.divider} />
          {renderAmenities()}
        </View>
      </Animated.ScrollView>
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.grey,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'mon-sb',
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'mon-sb',
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: 'mon',
  },
  ratings: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  hostImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.grey,
  },
  hostName: {
    fontFamily: 'mon-sb',
    fontSize: 16,
  },
  hostInfo: {
    fontFamily: 'mon',
    fontSize: 14,
    color: Colors.grey,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'mon',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: 'mon-sb',
  },
  sectionTitle: {
    fontFamily: 'mon-b',
    fontSize: FontSize.size_lg,
    marginBottom: 10,
  },
  roomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
  },
  roomDetails: {
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
  },
  roomOptionsContainer: {
    marginTop: 10,
  },
  roomOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
    marginBottom: 10,
  },
  selectedRoomOption: {
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorOrange_100,
  },
  roomOptionTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  roomOptionName: {
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_base,
  },
  roomOptionDescription: {
    fontFamily: 'mon',
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontFamily: 'mon-sb',
    fontSize: FontSize.size_lg,
    marginLeft: 10,
  },
  reserveButton: {
    backgroundColor: Color.colorOrange_100,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: Border.br_5xs,
  },
  reserveButtonText: {
    fontFamily: 'mon-b',
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textTransform: 'uppercase',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: Color.colorOrange_100,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  amenityText: {
    marginLeft: 10,
    fontFamily: 'mon',
    fontSize: FontSize.size_base,
  },
});

export default PreviewScreen;
