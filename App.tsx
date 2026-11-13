import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import RoomsCatalogScreen from './src/screens/RoomsCatalogScreen';
import RoomServiceScreen from './src/screens/RoomServiceScreen';
import MyStayScreen from './src/screens/MyStayScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { COLORS } from './src/constants/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.surface,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(212, 175, 55, 0.2)',
          },
          headerTitleStyle: {
            color: COLORS.text,
            fontWeight: '900',
            fontSize: 16.5,
            letterSpacing: -0.3,
          },
          tabBarStyle: {
            backgroundColor: COLORS.surface,
            borderTopColor: 'rgba(255, 255, 255, 0.08)',
            borderTopWidth: 1,
            height: 64,
            paddingBottom: 10,
            paddingTop: 8,
            shadowColor: '#000',
            shadowOpacity: 0.35,
            shadowRadius: 10,
            elevation: 8,
          },
          tabBarActiveTintColor: COLORS.gold,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontSize: 10.5,
            fontWeight: '700',
            marginTop: 2,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Grand Enku Resort & Spa',
            tabBarLabel: 'መነሻ',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, transform: [{ scale: focused ? 1.15 : 1 }] }}>🏨</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Rooms"
          component={RoomsCatalogScreen}
          options={{
            headerTitle: 'የክፍሎች ዝርዝር (Suites & Rooms)',
            tabBarLabel: 'ክፍሎች',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, transform: [{ scale: focused ? 1.15 : 1 }] }}>🛏️</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={RoomServiceScreen}
          options={{
            headerTitle: 'የክፍል ሰርቪስ (Room Service)',
            tabBarLabel: 'ሰርቪስ',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, transform: [{ scale: focused ? 1.15 : 1 }] }}>🛎️</Text>
            ),
          }}
        />
        <Tab.Screen
          name="MyStay"
          component={MyStayScreen}
          options={{
            headerTitle: 'የእኔ ቆይታ (My Stay)',
            tabBarLabel: 'ቆይታዬ',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, transform: [{ scale: focused ? 1.15 : 1 }] }}>🔑</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'መገለጫ (My Profile)',
            tabBarLabel: 'መገለጫ',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 20, transform: [{ scale: focused ? 1.15 : 1 }] }}>👤</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
