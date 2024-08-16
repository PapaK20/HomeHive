import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/Screens/WelcomeScreen.tsx";
import SignUpScreen from "@/modals/SignUpScreen";
import ConfirmCode from "@/modals/ConfirmCode";
import LogIn from "@/modals/LogIn";
import MainTabs from "@/Tabs/_layout";
import HomeScreen from "@/Tabs/HomeScreen";
import ProfileScreen from "@/Tabs/HomeScreen";
import Bookmarks from "@/Tabs/HomeScreen";
import Bookings from "@/Tabs/HomeScreen";
import CampusScreen from "@/Screens/CampusScreen";
import CampusDetails from "@/Screens/CampusDetails";
import NotificationsScreen from "@/Screens/NotiScreen";
import PreviewScreen from "@/Screens/PreviewScreen";



const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Confirm" component={ConfirmCode} options={{headerTitle: 'Confirm Your Code', headerTitleStyle: { fontFamily: 'mon-b' }}}/>
    <Stack.Screen name="LogIn" component={LogIn} options={{headerTitle: 'Log In', headerTitleStyle: { fontFamily: 'mon-b' }}}/>
    <Stack.Screen name="Campus" component={CampusScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Preview" component={PreviewScreen} options={{headerShown: true, headerTitle: '', headerTransparent: true}}/>
    <Stack.Screen name="Campus2" component={CampusDetails} options={{headerShown: true, headerTitle: '', headerTransparent: true}}/>
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Notification" component={NotificationsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Bookings" component={Bookings} options={{headerShown: false}}/>
    <Stack.Screen name="Bookmarks" component={Bookmarks} options={{headerShown: false}}/>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    
    {/* Add more Stack.Screen components as needed */}
  </Stack.Navigator>
  );
};

export default AppNavigator;
