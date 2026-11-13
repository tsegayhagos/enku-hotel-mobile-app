import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../constants/theme';
import { DEMO_SERVICES, ServiceItem } from '../services/api';

export default function RoomServiceScreen() {
  const [activeTab, setActiveTab] = useState<'dining' | 'laundry' | 'housekeeping' | 'maintenance'>('dining');
  const [recentOrder, setRecentOrder] = useState<string | null>(null);

  const filteredServices = DEMO_SERVICES.filter((s) => s.category === activeTab);

  const handleOrder = (item: ServiceItem) => {
    if (item.category === 'housekeeping' || item.category === 'maintenance') {
      Alert.alert(
        '✓ ጥያቄዎ ደርሶናል',
        `የ "${item.title}" ጥያቄዎ ለሆቴሉ ሰራተኞች ተላልፏል። አሁን ወደ ክፍል 204 ሰራተኛ ይላካል!`
      );
    } else {
      setRecentOrder(item.title);
      Alert.alert(
        '✓ ትዕዛዝዎ ተመዝግቧል!',
        `"${item.title}" (${item.price} ብር) ታዟል! ወጪው በክፍል 204 ፎሊዮ (Room Bill) ላይ ተመዝግቧል። ሰራተኞቻችን በ15-20 ደቂቃ ያደርሱልዎታል።`
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Room Badge Header */}
      <View style={styles.roomHeader}>
        <View>
          <Text style={styles.roomLabel}>የአሁኑ ክፍልዎ (Current Room)</Text>
          <Text style={styles.roomNumber}>ክፍል 204 • Deluxe King</Text>
        </View>
        <View style={styles.activeGuestPill}>
          <Text style={styles.activeGuestText}>Active Guest</Text>
        </View>
      </View>

      {/* Segmented Category Buttons */}
      <View style={styles.segmentedControl}>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'dining' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('dining')}
        >
          <Text style={[styles.segmentText, activeTab === 'dining' && styles.segmentTextActive]}>🍽️ ምግብ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'laundry' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('laundry')}
        >
          <Text style={[styles.segmentText, activeTab === 'laundry' && styles.segmentTextActive]}>👔 ላውንድሪ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'housekeeping' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('housekeeping')}
        >
          <Text style={[styles.segmentText, activeTab === 'housekeeping' && styles.segmentTextActive]}>🧹 ጽዳት</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'maintenance' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('maintenance')}
        >
          <Text style={[styles.segmentText, activeTab === 'maintenance' && styles.segmentTextActive]}>🔧 ጥገና</Text>
        </TouchableOpacity>
      </View>

      {/* Live Order Tracker Banner */}
      {recentOrder && (
        <View style={styles.trackerCard}>
          <View style={styles.trackerRow}>
            <Text style={styles.trackerStatus}>⚡ ትዕዛዝዎ በዝግጅት ላይ ነው</Text>
            <Text style={styles.trackerTime}>15 ደቂቃ</Text>
          </View>
          <Text style={styles.trackerItem}>{recentOrder}</Text>
          <Text style={styles.trackerSub}>ወደ ክፍል 204 ይቀርባል • ሂሳቡ በፎሊዮዎ ተመዝግቧል</Text>
        </View>
      )}

      {/* Services Items List */}
      <ScrollView contentContainerStyle={styles.list}>
        {filteredServices.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemEmojiBox}>
              <Text style={{ fontSize: 32 }}>{item.emoji}</Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDesc} numberOfLines={2}>{item.description}</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.itemPrice}>
                  {item.price > 0 ? `${item.price.toLocaleString()} ብር` : 'ነጻ (Complimentary)'}
                </Text>
                <TouchableOpacity
                  style={[styles.orderBtn, item.price === 0 && { backgroundColor: COLORS.surfaceLight }]}
                  onPress={() => handleOrder(item)}
                >
                  <Text style={[styles.orderBtnText, item.price === 0 && { color: COLORS.primaryLight }]}>
                    {item.price > 0 ? '+ እዘዝ' : 'ጥሪ አድርግ'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {activeTab === 'laundry' && (
          <View style={styles.expressBanner}>
            <Text style={styles.expressTitle}>⚡ ፈጣን እጥበት (Express 3-Hour Wash)</Text>
            <Text style={styles.expressSub}>በ3 ሰዓት ውስጥ ደርቆና ተተኩሶ እንዲመለስልዎ +50% ሰርቻርጅ በማከል ማዘዝ ይችላሉ።</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  roomHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.surface },
  roomLabel: { fontSize: 10, color: COLORS.textMuted },
  roomNumber: { fontSize: 15, color: COLORS.text, fontWeight: '800', marginTop: 2 },
  activeGuestPill: { backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  activeGuestText: { color: COLORS.success, fontSize: 11, fontWeight: '700' },
  segmentedControl: { flexDirection: 'row', backgroundColor: COLORS.surface, padding: 4, margin: 16, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border },
  segmentBtn: { flex: 1, paddingVertical: 8, borderRadius: 12, alignItems: 'center' },
  segmentBtnActive: { backgroundColor: COLORS.primaryLight },
  segmentText: { fontSize: 11, color: COLORS.textMuted, fontWeight: '600' },
  segmentTextActive: { color: '#000', fontWeight: '800' },
  trackerCard: { marginHorizontal: 16, marginBottom: 12, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderWidth: 1, borderColor: 'rgba(16, 185, 129, 0.3)', borderRadius: 16, padding: 12 },
  trackerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  trackerStatus: { color: COLORS.success, fontSize: 12, fontWeight: '800' },
  trackerTime: { color: COLORS.textMuted, fontSize: 10 },
  trackerItem: { color: COLORS.text, fontSize: 12, fontWeight: '700', marginTop: 4 },
  trackerSub: { color: COLORS.textMuted, fontSize: 10, marginTop: 2 },
  list: { padding: 16, paddingTop: 0, paddingBottom: 40 },
  itemCard: { backgroundColor: COLORS.surface, borderRadius: 20, padding: 14, flexDirection: 'row', gap: 14, marginBottom: 12, borderWidth: 1, borderColor: COLORS.border },
  itemEmojiBox: { width: 64, height: 64, borderRadius: 14, backgroundColor: COLORS.surfaceLight, justifyContent: 'center', alignItems: 'center' },
  itemInfo: { flex: 1, justifyContent: 'space-between' },
  itemTitle: { fontSize: 13, color: COLORS.text, fontWeight: '700' },
  itemDesc: { fontSize: 11, color: COLORS.textMuted, lineHeight: 15, marginVertical: 3 },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  itemPrice: { fontSize: 13, color: COLORS.primaryLight, fontWeight: '800' },
  orderBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8 },
  orderBtnText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  expressBanner: { backgroundColor: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', borderWidth: 1, borderRadius: 16, padding: 14, marginTop: 10 },
  expressTitle: { color: COLORS.accent, fontSize: 12, fontWeight: '800', marginBottom: 2 },
  expressSub: { color: COLORS.textMuted, fontSize: 10, lineHeight: 14 },
});
