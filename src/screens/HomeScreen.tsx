import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { DEMO_ROOM_TYPES } from '../services/api';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Top Welcome Bar */}
      <View style={styles.headerRow}>
        <View>
          <View style={styles.vipBadgeRow}>
            <Text style={styles.greeting}>እንኳን ደህና መጡ 👋</Text>
            <View style={styles.vipTag}>
              <Text style={styles.vipTagText}>👑 VIP GOLD</Text>
            </View>
          </View>
          <Text style={styles.hotelTitle}>Grand Enku Resort & Spa</Text>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Text style={{ fontSize: 18 }}>🔔</Text>
          <View style={styles.bellBadge} />
        </TouchableOpacity>
      </View>

      {/* Hero Featured Luxury Card */}
      <View style={styles.heroCard}>
        <View style={styles.promoTag}>
          <Text style={styles.promoText}>✨ ልዩ ቅናሽ 20% OFF</Text>
        </View>
        <Text style={styles.heroHeading}>ፕሬዝዳንሻል እና ዴሉክስ ሱይቶች</Text>
        <Text style={styles.heroSub}>
          ያማረ የተራራ እይታ፣ የግል ጃኩዚ፣ ስፓ እና ነጻ የቁርስ አገልግሎት ያካተተ የተሟላ የቅንጦት ማረፊያ።
        </Text>
        <TouchableOpacity
          style={styles.heroButton}
          onPress={() => navigation.navigate('Rooms')}
          activeOpacity={0.85}
        >
          <Text style={styles.heroButtonText}>ክፍሎችን ያስሱ (Explore Suites) →</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchItem}>
          <Text style={styles.searchLabel}>የመግቢያና መውጫ ቀናት (Dates)</Text>
          <Text style={styles.searchValue}>ህዳር 15 – ህዳር 18 • 3 ምሽቶች</Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('Rooms')}
          activeOpacity={0.85}
        >
          <Text style={styles.searchButtonText}>ክፍል ፈልግ</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Service Shortcuts */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>ፈጣን አገልግሎቶች (Services)</Text>
      </View>
      <View style={styles.servicesGrid}>
        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
          activeOpacity={0.8}
        >
          <View style={styles.serviceIconContainer}>
            <Text style={styles.serviceEmoji}>🍽️</Text>
          </View>
          <Text style={styles.serviceName}>ምግብ ማዘዣ</Text>
          <Text style={styles.serviceSub}>Dining</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
          activeOpacity={0.8}
        >
          <View style={styles.serviceIconContainer}>
            <Text style={styles.serviceEmoji}>👔</Text>
          </View>
          <Text style={styles.serviceName}>ላውንድሪ</Text>
          <Text style={styles.serviceSub}>Valet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
          activeOpacity={0.8}
        >
          <View style={styles.serviceIconContainer}>
            <Text style={styles.serviceEmoji}>🧹</Text>
          </View>
          <Text style={styles.serviceName}>ጽዳት ጥሪ</Text>
          <Text style={styles.serviceSub}>Housekeeping</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('MyStay')}
          activeOpacity={0.8}
        >
          <View style={[styles.serviceIconContainer, styles.keyHighlight]}>
            <Text style={styles.serviceEmoji}>🔑</Text>
          </View>
          <Text style={styles.serviceName}>ቁልፍ</Text>
          <Text style={styles.serviceSub}>Digital Key</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Suites List */}
      <View style={[styles.sectionHeader, { marginTop: 26 }]}>
        <View>
          <Text style={styles.sectionTitle}>ተወዳጅ ክፍሎች (Featured Suites)</Text>
          <Text style={styles.sectionSub}>ምርጥ ደረጃ ያላቸው የቅንጦት ክፍሎች</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
          <Text style={styles.seeAllText}>ሁሉንም እይ →</Text>
        </TouchableOpacity>
      </View>

      {DEMO_ROOM_TYPES.slice(0, 3).map((room) => (
        <View key={room.id} style={styles.roomCard}>
          <View style={styles.roomIconBox}>
            <Text style={{ fontSize: 40 }}>{room.emoji}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ 4.95</Text>
            </View>
          </View>
          <View style={styles.roomInfo}>
            <View style={styles.roomTitleRow}>
              <Text style={styles.roomName}>{room.name}</Text>
              <View style={styles.badgeOpen}>
                <Text style={styles.badgeOpenText}>● ክፍት</Text>
              </View>
            </View>
            <Text style={styles.roomDesc} numberOfLines={2}>{room.description}</Text>

            {/* Amenity tags */}
            <View style={styles.amenitiesRow}>
              <Text style={styles.amenityTag}>WiFi</Text>
              <Text style={styles.amenityTag}>ጃኩዚ</Text>
              <Text style={styles.amenityTag}>ቁርስ በነፃ</Text>
            </View>

            <View style={styles.roomPriceRow}>
              <View>
                <Text style={styles.roomPrice}>{room.base_price.toLocaleString()} <Text style={styles.currency}>ETB / ምሽት</Text></Text>
              </View>
              <TouchableOpacity
                style={styles.bookSmallButton}
                onPress={() => navigation.navigate('Rooms')}
                activeOpacity={0.85}
              >
                <Text style={styles.bookSmallButtonText}>አሁን ያስይዙ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  content: { 
    padding: 18, 
    paddingBottom: 48 
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  vipBadgeRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    marginBottom: 4 
  },
  greeting: { 
    fontSize: 13, 
    color: COLORS.primaryLight, 
    fontWeight: '700',
    letterSpacing: 0.3 
  },
  vipTag: { 
    backgroundColor: 'rgba(212, 175, 55, 0.15)', 
    borderColor: COLORS.gold, 
    borderWidth: 1, 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 8 
  },
  vipTagText: { 
    color: COLORS.gold, 
    fontSize: 10, 
    fontWeight: '800' 
  },
  hotelTitle: { 
    fontSize: 22, 
    color: COLORS.text, 
    fontWeight: '900', 
    letterSpacing: -0.5 
  },
  bellButton: { 
    width: 44, 
    height: 44, 
    borderRadius: 22, 
    backgroundColor: COLORS.surface, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  bellBadge: { 
    position: 'absolute', 
    top: 9, 
    right: 9, 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: COLORS.gold 
  },

  // Hero Card
  heroCard: { 
    backgroundColor: COLORS.primary, 
    borderRadius: 24, 
    padding: 22, 
    marginBottom: 18, 
    borderWidth: 1,
    borderColor: COLORS.borderGold,
    shadowColor: COLORS.primaryLight, 
    shadowOpacity: 0.15, 
    shadowRadius: 16, 
    elevation: 8 
  },
  promoTag: { 
    alignSelf: 'flex-start', 
    backgroundColor: COLORS.gold, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  promoText: { 
    color: '#070B11', 
    fontSize: 11, 
    fontWeight: '800',
    letterSpacing: 0.5 
  },
  heroHeading: { 
    fontSize: 19, 
    color: '#FFFFFF', 
    fontWeight: '800', 
    marginBottom: 6,
    letterSpacing: -0.3
  },
  heroSub: { 
    fontSize: 12.5, 
    color: '#CBD5E1', 
    lineHeight: 18, 
    marginBottom: 16 
  },
  heroButton: { 
    alignSelf: 'flex-start', 
    backgroundColor: COLORS.primaryLight, 
    paddingHorizontal: 18, 
    paddingVertical: 10, 
    borderRadius: 14,
    shadowColor: COLORS.primaryLight,
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  heroButtonText: { 
    color: '#070B11', 
    fontWeight: '800', 
    fontSize: 12.5 
  },

  // Search Bar
  searchBar: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 20, 
    padding: 14, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8
  },
  searchItem: { flex: 1 },
  searchLabel: { 
    fontSize: 11, 
    color: COLORS.textMuted,
    fontWeight: '500' 
  },
  searchValue: { 
    fontSize: 13.5, 
    color: COLORS.text, 
    fontWeight: '800', 
    marginTop: 3 
  },
  searchButton: { 
    backgroundColor: COLORS.gold, 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    borderRadius: 12 
  },
  searchButtonText: { 
    color: '#070B11', 
    fontWeight: '800', 
    fontSize: 12 
  },

  // Section Headers
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 14 
  },
  sectionTitle: { 
    fontSize: 17, 
    color: COLORS.text, 
    fontWeight: '800',
    letterSpacing: -0.2 
  },
  sectionSub: { 
    fontSize: 11, 
    color: COLORS.textMuted,
    marginTop: 2 
  },
  seeAllText: { 
    fontSize: 12.5, 
    color: COLORS.primaryLight, 
    fontWeight: '700' 
  },

  // Services Grid
  servicesGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  serviceShortcut: { 
    width: '23%', 
    backgroundColor: COLORS.surface, 
    borderRadius: 18, 
    paddingVertical: 14, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  serviceIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6
  },
  keyHighlight: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    borderColor: COLORS.gold,
    borderWidth: 1
  },
  serviceEmoji: { fontSize: 22 },
  serviceName: { 
    fontSize: 11.5, 
    color: COLORS.text, 
    fontWeight: '700' 
  },
  serviceSub: {
    fontSize: 9,
    color: COLORS.textMuted,
    marginTop: 2
  },

  // Room Cards
  roomCard: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 22, 
    padding: 16, 
    flexDirection: 'row', 
    gap: 14, 
    marginBottom: 14, 
    borderWidth: 1, 
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4
  },
  roomIconBox: { 
    width: 85, 
    height: 105, 
    borderRadius: 18, 
    backgroundColor: COLORS.surfaceLight, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 6,
    backgroundColor: 'rgba(7, 11, 17, 0.85)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6
  },
  ratingText: {
    fontSize: 9.5,
    color: COLORS.gold,
    fontWeight: '800'
  },
  roomInfo: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  roomTitleRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  roomName: { 
    fontSize: 15, 
    color: COLORS.text, 
    fontWeight: '800',
    letterSpacing: -0.2
  },
  badgeOpen: { 
    backgroundColor: COLORS.successBg, 
    paddingHorizontal: 8, 
    paddingVertical: 3, 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)'
  },
  badgeOpenText: { 
    color: COLORS.success, 
    fontSize: 10, 
    fontWeight: '800' 
  },
  roomDesc: { 
    fontSize: 11.5, 
    color: COLORS.textMuted, 
    marginVertical: 4,
    lineHeight: 16
  },
  amenitiesRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 4
  },
  amenityTag: {
    backgroundColor: COLORS.surfaceLight,
    color: COLORS.textMuted,
    fontSize: 9.5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5
  },
  roomPriceRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 4
  },
  roomPrice: { 
    fontSize: 16, 
    fontWeight: '900', 
    color: COLORS.gold 
  },
  currency: { 
    fontSize: 10, 
    color: COLORS.textMuted, 
    fontWeight: '500' 
  },
  bookSmallButton: { 
    backgroundColor: COLORS.primaryLight, 
    paddingHorizontal: 14, 
    paddingVertical: 7, 
    borderRadius: 10,
    shadowColor: COLORS.primaryLight,
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  bookSmallButtonText: { 
    color: '#070B11', 
    fontSize: 11.5, 
    fontWeight: '800' 
  },
});
