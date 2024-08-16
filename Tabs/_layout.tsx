import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Colors  from '@/Constants/Colors';
import HomeScreen from './HomeScreen';
import Bookings from './Bookings';
import ProfileScreen from './ProfileScreen';
import Bookmarks from './Bookmarks';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


const MainTabs = () => (
  <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    tabBarLabelStyle: {
      fontFamily: 'mon-sb',
    },
    tabBarStyle: {
      position: 'absolute',
      bottom: 15,
      left: 20,
      right: 20,
      backgroundColor: '#ffffff',
      borderRadius: 28,
      height: 60,
      ...styles.shadow
    }
  }}>
    
    <Tab.Screen
      name="HOME"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    
    <Tab.Screen
      name="BOOKINGS" 
      component={Bookings}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="BOOKMARKS" 
      component={Bookmarks}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bookmarks-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="PROFILE"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  
);

const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

export default MainTabs;