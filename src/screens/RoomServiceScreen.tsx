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
          <Text style={styles.roomNumber}>ክፍል 204 • Deluxe King Suite</Text>
        </View>
        <View style={styles.activeGuestPill}>
          <Text style={styles.activeGuestText}>● Active Guest</Text>
        </View>
      </View>

      {/* Segmented Category Buttons */}
      <View style={styles.segmentedControl}>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'dining' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('dining')}
          activeOpacity={0.8}
        >
          <Text style={[styles.segmentText, activeTab === 'dining' && styles.segmentTextActive]}>🍽️ ምግብ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'laundry' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('laundry')}
          activeOpacity={0.8}
        >
          <Text style={[styles.segmentText, activeTab === 'laundry' && styles.segmentTextActive]}>👔 ላውንድሪ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'housekeeping' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('housekeeping')}
          activeOpacity={0.8}
        >
          <Text style={[styles.segmentText, activeTab === 'housekeeping' && styles.segmentTextActive]}>🧹 ጽዳት</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'maintenance' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('maintenance')}
          activeOpacity={0.8}
        >
          <Text style={[styles.segmentText, activeTab === 'maintenance' && styles.segmentTextActive]}>🔧 ጥገና</Text>
        </TouchableOpacity>
      </View>

      {/* Live Order Tracker Banner */}
      {recentOrder && (
        <View style={styles.trackerCard}>
          <View style={styles.trackerRow}>
            <Text style={styles.trackerStatus}>⚡ ትዕዛዝዎ በዝግጅት ላይ ነው</Text>
            <Text style={styles.trackerTime}>15 ደቂቃ ይቀራል</Text>
          </View>
          <Text style={styles.trackerItem}>{recentOrder}</Text>
          <Text style={styles.trackerSub}>ወደ ክፍል 204 ይቀርባል • ሂሳቡ በክፍል ፎሊዮዎ ተመዝግቧል</Text>
        </View>
      )}

      {/* Services Items List */}
      <ScrollView contentContainerStyle={styles.list}>
        {filteredServices.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemEmojiBox}>
              <Text style={{ fontSize: 36 }}>{item.emoji}</Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDesc} numberOfLines={2}>{item.description}</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.itemPrice}>
                  {item.price > 0 ? `${item.price.toLocaleString()} ETB` : 'ነጻ (Complimentary)'}
                </Text>
                <TouchableOpacity
                  style={[styles.orderBtn, item.price === 0 && { backgroundColor: COLORS.surfaceLight }]}
                  onPress={() => handleOrder(item)}
                  activeOpacity={0.85}
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
            <Text style={styles.expressTitle}>⚡ ፈጣን እጥበት (Express 3-Hour Valet)</Text>
            <Text style={styles.expressSub}>በ3 ሰዓት ውስጥ ደርቆና ተተኩሶ እንዲመለስልዎ +50% ሰርቻርጅ በማከል ማዘዝ ይችላሉ።</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  roomHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 18, 
    borderBottomWidth: 1, 
    borderColor: 'rgba(255, 255, 255, 0.08)', 
    backgroundColor: COLORS.surface 
  },
  roomLabel: { 
    fontSize: 11, 
    color: COLORS.textMuted,
    fontWeight: '500' 
  },
  roomNumber: { 
    fontSize: 16, 
    color: COLORS.text, 
    fontWeight: '800', 
    marginTop: 2 
  },
  activeGuestPill: { 
    backgroundColor: COLORS.successBg, 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)' 
  },
  activeGuestText: { 
    color: COLORS.success, 
    fontSize: 11, 
    fontWeight: '800' 
  },
  segmentedControl: { 
    flexDirection: 'row', 
    backgroundColor: COLORS.surface, 
    padding: 5, 
    margin: 18, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  segmentBtn: { 
    flex: 1, 
    paddingVertical: 9, 
    borderRadius: 14, 
    alignItems: 'center' 
  },
  segmentBtnActive: { 
    backgroundColor: COLORS.gold,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.3,
    shadowRadius: 6 
  },
  segmentText: { 
    fontSize: 11.5, 
    color: COLORS.textMuted, 
    fontWeight: '700' 
  },
  segmentTextActive: { 
    color: '#070B11', 
    fontWeight: '900' 
  },
  trackerCard: { 
    marginHorizontal: 18, 
    marginBottom: 14, 
    backgroundColor: 'rgba(16, 185, 129, 0.1)', 
    borderWidth: 1, 
    borderColor: 'rgba(16, 185, 129, 0.3)', 
    borderRadius: 18, 
    padding: 14 
  },
  trackerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  trackerStatus: { 
    color: COLORS.success, 
    fontSize: 12.5, 
    fontWeight: '800' 
  },
  trackerTime: { 
    color: COLORS.textMuted, 
    fontSize: 11,
    fontWeight: '600' 
  },
  trackerItem: { 
    color: COLORS.text, 
    fontSize: 13, 
    fontWeight: '800', 
    marginTop: 5 
  },
  trackerSub: { 
    color: COLORS.textMuted, 
    fontSize: 10.5, 
    marginTop: 3 
  },
  list: { 
    padding: 18, 
    paddingTop: 0, 
    paddingBottom: 48 
  },
  itemCard: { 
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
    shadowRadius: 8
  },
  itemEmojiBox: { 
    width: 68, 
    height: 68, 
    borderRadius: 16, 
    backgroundColor: COLORS.surfaceLight, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight 
  },
  itemInfo: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  itemTitle: { 
    fontSize: 14, 
    color: COLORS.text, 
    fontWeight: '800' 
  },
  itemDesc: { 
    fontSize: 11.5, 
    color: COLORS.textMuted, 
    lineHeight: 16, 
    marginVertical: 4 
  },
  itemFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 6 
  },
  itemPrice: { 
    fontSize: 14.5, 
    color: COLORS.gold, 
    fontWeight: '900' 
  },
  orderBtn: { 
    backgroundColor: COLORS.primaryLight, 
    paddingHorizontal: 15, 
    paddingVertical: 7, 
    borderRadius: 10,
    shadowColor: COLORS.primaryLight,
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  orderBtnText: { 
    color: '#070B11', 
    fontSize: 11.5, 
    fontWeight: '800' 
  },
  expressBanner: { 
    backgroundColor: 'rgba(212, 175, 55, 0.1)', 
    borderColor: 'rgba(212, 175, 55, 0.35)', 
    borderWidth: 1, 
    borderRadius: 18, 
    padding: 16, 
    marginTop: 10 
  },
  expressTitle: { 
    color: COLORS.gold, 
    fontSize: 13, 
    fontWeight: '800', 
    marginBottom: 3 
  },
  expressSub: { 
    color: COLORS.textMuted, 
    fontSize: 11, 
    lineHeight: 16 
  },
});
