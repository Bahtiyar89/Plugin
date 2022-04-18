import React from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EvetntScreen from '../screens/EvetntScreen';
import HelpScreen from '../screens/HelpScreen';
import BusSceduleScreen from '../screens/BusSceduleScreen';
import InfoSceduleScreen from '../screens/InfoSceduleScreen';
import BlogScreen from '../screens/BlogScreen';
import ArticleViewScreen from '../screens/ArticleViewScreen';
import ShopScreen from '../screens/ShopScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import MapScreen from '../screens/MapScreen';
import ArtistViewScreen from '../screens/ArtistViewScreen';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';
import TabMenuItem from '../components/TabMenuItem';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="ProfileEdit" component={ProfileEditScreen} />

      <HomeStack.Screen
        name="PasswordChange"
        component={PasswordChangeScreen}
      />
    </HomeStack.Navigator>
  );
}

const EventStack = createNativeStackNavigator();
function EventStackScreen() {
  return (
    <EventStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <EventStack.Screen name="event" component={EvetntScreen} />
      <EventStack.Screen name="schedule" component={ScheduleScreen} />
      <EventStack.Screen name="map" component={MapScreen} />
      <EventStack.Screen name="artist" component={ArtistViewScreen} />
    </EventStack.Navigator>
  );
}

const HelpStack = createNativeStackNavigator();
function HelpStackScreen() {
  return (
    <HelpStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <HelpStack.Screen name="help" component={HelpScreen} />
      <HelpStack.Screen name="buschedule" component={BusSceduleScreen} />
      <HelpStack.Screen name="infochedule" component={InfoSceduleScreen} />
    </HelpStack.Navigator>
  );
}

const BlogStack = createNativeStackNavigator();
function BlogStackScreen() {
  return (
    <BlogStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <BlogStack.Screen name="blog" component={BlogScreen} />
      <BlogStack.Screen name="acticle" component={ArticleViewScreen} />
    </BlogStack.Navigator>
  );
}

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'relative',
          backgroundColor: '#000',
          margin: 5,
          borderRadius: 51,

          width: '80%',
          marginLeft: '10%',
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: '#7BC0AF',
          borderColor: '#7BC0AF',
          zIndex: 1,
          /*
          marginTop: -3,
          bottom: 15,
          left: 40,
          right: 40,
          borderRadius: 51,
          height: 56,
          backgroundColor: '#000',
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: '#7BC0AF',
          borderColor: '#7BC0AF',
          zIndex: 1,*/
        },
      })}>
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabMenuItem
              source={require('../assets/home.png')}
              focused={focused}
              text={'Home'}
              width={14}
              height={14}
            />
          ),
        }}
      />
      <Tab.Screen
        name="event"
        component={EventStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabMenuItem
              source={require('../assets/rocket.png')}
              focused={focused}
              text={'Event'}
              width={14}
              height={14}
            />
          ),
        }}
      />
      <Tab.Screen
        name="help"
        component={HelpStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabMenuItem
              source={require('../assets/help.png')}
              focused={focused}
              text={'Help'}
              width={14}
              height={14}
            />
          ),
        }}
      />
      <Tab.Screen
        name="blog"
        component={BlogStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabMenuItem
              source={require('../assets/blog.png')}
              focused={focused}
              text={'Blog'}
              width={18}
              height={18}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabMenuItem
              source={require('../assets/betslip.png')}
              focused={focused}
              text={'Shop'}
              width={14}
              height={14}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
