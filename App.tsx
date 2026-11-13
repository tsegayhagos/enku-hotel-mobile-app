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
            borderBottomColor: COLORS.border,
          },
          headerTitleStyle: {
            color: COLORS.text,
            fontWeight: '800',
            fontSize: 16,
          },
          tabBarStyle: {
            backgroundColor: COLORS.surface,
            borderTopColor: COLORS.border,
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
            paddingTop: 6,
          },
          tabBarActiveTintColor: COLORS.primaryLight,
          tabBarInactiveTintColor: COLORS.textMuted,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '700',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Grand Enku Resort',
            tabBarLabel: 'መነሻ',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏨</Text>,
          }}
        />
        <Tab.Screen
          name="Rooms"
          component={RoomsCatalogScreen}
          options={{
            headerTitle: 'የክፍሎች ዝርዝር (Rooms)',
            tabBarLabel: 'ክፍሎች',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🛏️</Text>,
          }}
        />
        <Tab.Screen
          name="Services"
          component={RoomServiceScreen}
          options={{
            headerTitle: 'የክፍል ሰርቪሶች (Services)',
            tabBarLabel: 'ሰርቪስ',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🛎️</Text>,
          }}
        />
        <Tab.Screen
          name="MyStay"
          component={MyStayScreen}
          options={{
            headerTitle: 'የእኔ ቆይታ (My Stay)',
            tabBarLabel: 'ቆይታዬ',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🔑</Text>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'መገለጫ (My Profile)',
            tabBarLabel: 'መገለጫ',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
