import * as React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border } from "../Constants/Styles";
import { Color } from "@/Constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const bookmarksData = [
  {
    id: '1',
    title: 'Dream Getaways',
    image: 'https://source.unsplash.com/random/800x600?luxury',
  },
  {
    id: '2',
    title: 'Beach Paradises',
    image: 'https://source.unsplash.com/random/800x600?beach',
  },
  {
    id: '3',
    title: 'Mountain Retreats',
    image: 'https://source.unsplash.com/random/800x600?mountain',
  },
  // Add more items as needed
];

const BookmarkItem = ({ title, image }: { title: string; count: number; image: string }) => (
  <TouchableOpacity style={styles.bookmarkItem}>
    <Image source={{ uri: image }} style={styles.bookmarkImage} />
    <View style={styles.bookmarkOverlay}>
      <Text style={styles.bookmarkTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Collections</Text>
      <FlatList
        data={bookmarksData}
        renderItem={({ item }) => <BookmarkItem count={0} {...item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
    marginTop: 25,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: "mon-b",
    color: Color.colorBlack,
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  bookmarkItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: Border.br_8xs,
    overflow: 'hidden',
  },
  bookmarkImage: {
    width: '100%',
    height: '100%',
  },
  bookmarkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: 12,
  },
  bookmarkTitle: {
    fontFamily: "mon-sb",
    color: Color.colorWhite,
    marginBottom: 4,
  },
  bookmarkCount: {
    fontSize: FontSize.size_sm,
    fontFamily: "mon",
    color: Color.colorWhite,
  },
});

export default Bookmarks;
