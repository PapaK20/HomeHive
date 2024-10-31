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
import PersonalScreen from "@/Screens/PersonalScreen";
import PaymentScreen from "@/Screens/PaymentScreen";
import FirstPage from "@/(host)/FirstPage";
import SecondPage from "@/(host)/SecondPage";
import ThirdPage from "@/(host)/ThirdPage";
import FinalPage from "@/(host)/FinalPage";
import UploadimageScreen from "@/(host)/(hostupload)/UploadimageScreen";
import DescriptionScreen from "@/(host)/(hostupload)/DescriptionScreen";
import PlaceIdentityScreen from "@/(host)/(hostupload)/PlaceIdentityScreen";
import PhoneupdateScreen from "@/(host)/(hostupload)/PhoneupdateScreen";
import ProfileUpdateScreen from "@/(host)/(hostupload)/ProfileupdateScreen";
import FinalScreen from "@/(host)/(hostupload)/FinalScreen";
import MainTabNavigator from "@/HostScreens/MainTabNavigator";
import HostUpload from "@/HostScreens/HostUpload";
import HostHome from "@/HostScreens/HostHome";
import HostProfile from "@/HostScreens/HostProfile";



const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Confirm" component={ConfirmCode} options={{headerTitle: 'Confirm Your Code', headerTitleStyle: { fontFamily: 'mon-b' }}}/>
    <Stack.Screen name="LogIn" component={LogIn} options={{headerTitle: 'Log In', headerTitleStyle: { fontFamily: 'mon-b' }}}/>
    <Stack.Screen name="Campus" component={CampusScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Campus2" component={CampusDetails} options={{headerShown: true, headerTitle: '', headerTransparent: true}}/>
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Notification" component={NotificationsScreen} options={{headerShown: true, headerTitle: ''}}/>
    <Stack.Screen name="Bookings" component={Bookings} options={{headerShown: false}}/>
    <Stack.Screen name="Bookmarks" component={Bookmarks} options={{headerShown: false}}/>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Personal" component={PersonalScreen} options={{headerShown: false, headerTitle: '', headerTransparent: true, headerBackVisible: true}}/>    
    <Stack.Screen name="Preview"  //@ts-ignore 
    component={PreviewScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerTitle: 'Confirm and Pay', headerTitleStyle: { fontFamily: 'mon-b' }}}/>

    <Stack.Screen name="First" component={FirstPage} options={{ headerShown: false }} />
    <Stack.Screen name="Second" component={SecondPage} options={{ headerShown: false }} />
    <Stack.Screen name="Third"  component={ThirdPage} options={{ headerShown: false }} />
    <Stack.Screen name="Final"  component={FinalPage} options={{ headerShown: false }} />

    <Stack.Screen name="Upload"  component={UploadimageScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}} />
    <Stack.Screen name="Identity" component={PlaceIdentityScreen} options={{headerShown: false}} />
    <Stack.Screen name="Phone" component={PhoneupdateScreen} options={{headerShown: false}} />
    <Stack.Screen name="Update" component={ProfileUpdateScreen} options={{headerShown: false}} />
    <Stack.Screen name="Final2" component={FinalScreen} options={{headerShown: false}} />

    <Stack.Screen name="HostMain" component={MainTabNavigator} options={{headerShown: false}} />
    <Stack.Screen name="HHome" component={HostHome} options={{headerShown: false}} />
    <Stack.Screen name="HProfile" component={HostProfile} options={{headerShown: false}} />
    <Stack.Screen name="HUpload" component={HostUpload} options={{ headerTitle: 'Upload Hive', headerTitleStyle: { fontFamily: 'mon-b' }}} />
  </Stack.Navigator>
  );
};

export default AppNavigator;
