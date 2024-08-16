import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRef, useState } from 'react';
import Colors, { Color } from '@/Constants/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import React from 'react';

const categories = [
  {
    name: 'Trending',
    icon: 'trending-up',
  },
  {
    name: 'Homestels',
    icon: 'home',
  },
  {
    name: 'Hostels',
    icon: 'apartment',
  },
  {
    name: 'Campus',
    icon: 'school',
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 5, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={{ fontFamily: 'mon-b',
            padding: 8,
            marginTop: 15,
            textAlign: 'center'
          }}>
            HOMEHIVE
          </Text>
        </View>
        <View style={styles.actionRow}>
       
            <TouchableOpacity>
              <View style={styles.searchBtn}>
              <AntDesign name="search1" size={24} />
                <View>
                  <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                  <Text style={{ color: Colors.grey, fontFamily: 'mon' }}>Anywhere · Any week · Anytime</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color={Colors.grey}/>
            </TouchableOpacity>
      
        </View>

        <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 40,
            paddingHorizontal: 25,
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => selectCategory(index)}
              key={index}
              ref={(el) => itemsRef.current[index] = el}
              style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
              >
              <MaterialIcons
                name={item.icon as any}
                size={23}
                color={activeIndex === index ? '#000' : Colors.grey}
              />
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText} >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </GestureHandlerRootView>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 5,
    height: 173,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 15,
    },
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 14,
  },

  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 12,
    padding: 10,
    marginLeft: -10,
    alignItems: 'center',
    width: 320,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 5,
    },
  },
  categoryText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

export default ExploreHeader;