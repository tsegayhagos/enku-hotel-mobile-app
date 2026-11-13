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
          <Text style={styles.greeting}>እንኳን ደህና መጡ! 👋</Text>
          <Text style={styles.hotelTitle}>Grand Enku Resort</Text>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Text style={{ fontSize: 18 }}>🔔</Text>
          <View style={styles.bellBadge} />
        </TouchableOpacity>
      </View>

      {/* Hero Featured Card */}
      <View style={styles.heroCard}>
        <View style={styles.promoTag}>
          <Text style={styles.promoText}>ልዩ ቅናሽ 20% OFF</Text>
        </View>
        <Text style={styles.heroHeading}>ፕሬዝዳንሻል እና ዴሉክስ ሱይቶች</Text>
        <Text style={styles.heroSub}>ያማረ የተራራ እይታ፣ የግል ጃኩዚ እና ነጻ የቁርስ አገልግሎት።</Text>
        <TouchableOpacity
          style={styles.heroButton}
          onPress={() => navigation.navigate('Rooms')}
        >
          <Text style={styles.heroButtonText}>አሁን ያስይዙ (Explore Suites) →</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchItem}>
          <Text style={styles.searchLabel}>የመግቢያና መውጫ ቀናት</Text>
          <Text style={styles.searchValue}>ህዳር 15 – ህዳር 18 (3 ምሽት)</Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('Rooms')}
        >
          <Text style={styles.searchButtonText}>ክፍል ፈልግ</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Service Shortcuts */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>ፈጣን አገልግሎቶች</Text>
      </View>
      <View style={styles.servicesGrid}>
        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.serviceEmoji}>🍽️</Text>
          <Text style={styles.serviceName}>ምግብ ማዘዣ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.serviceEmoji}>👔</Text>
          <Text style={styles.serviceName}>ላውንድሪ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.serviceEmoji}>🧹</Text>
          <Text style={styles.serviceName}>ጽዳት ጥሪ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceShortcut}
          onPress={() => navigation.navigate('MyStay')}
        >
          <Text style={styles.serviceEmoji}>🔑</Text>
          <Text style={styles.serviceName}>ዲጂታል ቁልፍ</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Suites List */}
      <View style={[styles.sectionHeader, { marginTop: 24 }]}>
        <Text style={styles.sectionTitle}>ተወዳጅ ክፍሎች (Suites)</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
          <Text style={styles.seeAllText}>ሁሉንም እይ →</Text>
        </TouchableOpacity>
      </View>

      {DEMO_ROOM_TYPES.slice(0, 2).map((room) => (
        <View key={room.id} style={styles.roomCard}>
          <View style={styles.roomIconBox}>
            <Text style={{ fontSize: 36 }}>{room.emoji}</Text>
          </View>
          <View style={styles.roomInfo}>
            <View style={styles.roomTitleRow}>
              <Text style={styles.roomName}>{room.name}</Text>
              <View style={styles.badgeOpen}>
                <Text style={styles.badgeOpenText}>ክፍት</Text>
              </View>
            </View>
            <Text style={styles.roomDesc} numberOfLines={1}>{room.description}</Text>
            <View style={styles.roomPriceRow}>
              <Text style={styles.roomPrice}>{room.base_price.toLocaleString()} <Text style={styles.currency}>ብር / ምሽት</Text></Text>
              <TouchableOpacity
                style={styles.bookSmallButton}
                onPress={() => navigation.navigate('Rooms')}
              >
                <Text style={styles.bookSmallButtonText}>ያዝ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 18, paddingBottom: 40 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  greeting: { fontSize: 13, color: COLORS.primaryLight, fontWeight: '600' },
  hotelTitle: { fontSize: 20, color: COLORS.text, fontWeight: '800' },
  bellButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.border },
  bellBadge: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.accent },
  heroCard: { backgroundColor: COLORS.primary, borderRadius: 24, padding: 20, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, elevation: 6 },
  promoTag: { alignSelf: 'flex-start', backgroundColor: COLORS.accent, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, marginBottom: 8 },
  promoText: { color: '#000', fontSize: 11, fontWeight: '800' },
  heroHeading: { fontSize: 18, color: '#fff', fontWeight: '800', marginBottom: 4 },
  heroSub: { fontSize: 12, color: '#e2e8f0', lineHeight: 17, marginBottom: 14 },
  heroButton: { alignSelf: 'flex-start', backgroundColor: COLORS.primaryLight, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  heroButtonText: { color: '#000', fontWeight: '700', fontSize: 12 },
  searchBar: { backgroundColor: COLORS.surface, borderRadius: 18, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: COLORS.border, marginBottom: 20 },
  searchItem: { flex: 1 },
  searchLabel: { fontSize: 10, color: COLORS.textMuted },
  searchValue: { fontSize: 13, color: COLORS.text, fontWeight: '700', marginTop: 2 },
  searchButton: { backgroundColor: COLORS.primaryLight, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12 },
  searchButtonText: { color: '#000', fontWeight: '700', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, color: COLORS.text, fontWeight: '700' },
  seeAllText: { fontSize: 12, color: COLORS.primaryLight, fontWeight: '600' },
  servicesGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  serviceShortcut: { width: '23%', backgroundColor: COLORS.surface, borderRadius: 16, paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border },
  serviceEmoji: { fontSize: 24, marginBottom: 4 },
  serviceName: { fontSize: 11, color: COLORS.text, fontWeight: '600' },
  roomCard: { backgroundColor: COLORS.surface, borderRadius: 20, padding: 14, flexDirection: 'row', gap: 14, marginBottom: 12, borderWidth: 1, borderColor: COLORS.border },
  roomIconBox: { width: 75, height: 75, borderRadius: 16, backgroundColor: COLORS.surfaceLight, justifyContent: 'center', alignItems: 'center' },
  roomInfo: { flex: 1, justifyContent: 'space-between' },
  roomTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  roomName: { fontSize: 14, color: COLORS.text, fontWeight: '700' },
  badgeOpen: { backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  badgeOpenText: { color: COLORS.success, fontSize: 10, fontWeight: '700' },
  roomDesc: { fontSize: 11, color: COLORS.textMuted, marginVertical: 4 },
  roomPriceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  roomPrice: { fontSize: 15, fontWeight: '800', color: COLORS.primaryLight },
  currency: { fontSize: 10, color: COLORS.textMuted, fontWeight: '400' },
  bookSmallButton: { backgroundColor: COLORS.primary, paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8 },
  bookSmallButtonText: { color: '#fff', fontSize: 11, fontWeight: '700' },
});
