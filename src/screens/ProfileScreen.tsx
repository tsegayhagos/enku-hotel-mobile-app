import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../constants/theme';

export default function ProfileScreen() {
  const [selectedLang, setSelectedLang] = useState<'Amharic' | 'Tigrinya' | 'English'>('Amharic');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Profile Header Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 36 }}>👑</Text>
        </View>
        <Text style={styles.userName}>Tsegay Hagos</Text>
        <Text style={styles.userPhone}>+251 91 123 4567 • tsegayhagos1942@gmail.com</Text>
        <View style={styles.vipBadge}>
          <Text style={styles.vipBadgeText}>✨ Grand Enku VIP Gold Elite Member</Text>
        </View>
      </View>

      {/* Language Switcher */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>ቋንቋ ይምረጡ (Select Language)</Text>
        <View style={styles.langGrid}>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'Amharic' && styles.langBtnActive]}
            onPress={() => setSelectedLang('Amharic')}
            activeOpacity={0.8}
          >
            <Text style={[styles.langText, selectedLang === 'Amharic' && styles.langTextActive]}>አማርኛ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'Tigrinya' && styles.langBtnActive]}
            onPress={() => setSelectedLang('Tigrinya')}
            activeOpacity={0.8}
          >
            <Text style={[styles.langText, selectedLang === 'Tigrinya' && styles.langTextActive]}>ትግርኛ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'English' && styles.langBtnActive]}
            onPress={() => setSelectedLang('English')}
            activeOpacity={0.8}
          >
            <Text style={[styles.langText, selectedLang === 'English' && styles.langTextActive]}>English</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bookings History */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>የቀደሙ ቦታ ማስያዣዎች (Stay History)</Text>
        <View style={styles.historyItem}>
          <View>
            <Text style={styles.historyTitle}>Presidential Suite #301</Text>
            <Text style={styles.historyDate}>መስከረም 10 – 14, 2026 • 4 ምሽቶች</Text>
          </View>
          <View style={styles.completedBadge}>
            <Text style={styles.historyStatus}>✓ ተጠናቋል</Text>
          </View>
        </View>
        <View style={[styles.historyItem, { borderBottomWidth: 0 }]}>
          <View>
            <Text style={styles.historyTitle}>Executive Villa #108</Text>
            <Text style={styles.historyDate}>ነሐሴ 02 – 05, 2026 • 3 ምሽቶች</Text>
          </View>
          <View style={styles.completedBadge}>
            <Text style={styles.historyStatus}>✓ ተጠናቋል</Text>
          </View>
        </View>
      </View>

      {/* Hotel Concierge & Hotline */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>የሆቴል ድጋፍ እና አገልግሎት (VIP Concierge)</Text>
        <TouchableOpacity
          style={styles.supportRow}
          onPress={() => Alert.alert('የሆቴል ስልክ', 'የቀጥታ ስልክ መስመር: +251 11 000 0000')}
          activeOpacity={0.8}
        >
          <View style={styles.supportIconBox}>
            <Text style={styles.supportIcon}>📞</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.supportTitle}>የቀጥታ የሆቴል ስልክ መስመር</Text>
            <Text style={styles.supportSub}>+251 11 000 0000 (24/7 ክፍት)</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportRow}
          onPress={() => Alert.alert('የአየር ማረፊያ ትራንስፖርት', 'የነጻ አየር ማረፊያ ትራንስፖርት ጥያቄዎ ለኮንሲየርጅ ደርሷል።')}
          activeOpacity={0.8}
        >
          <View style={styles.supportIconBox}>
            <Text style={styles.supportIcon}>🚐</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.supportTitle}>የአየር ማረፊያ ትራንስፖርት (VIP Shuttle)</Text>
            <Text style={styles.supportSub}>የመውሰጃ ሰዓት ያስይዙ</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
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
  profileCard: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 28, 
    padding: 24, 
    alignItems: 'center', 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: COLORS.borderGold,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.15,
    shadowRadius: 16
  },
  avatar: { 
    width: 76, 
    height: 76, 
    borderRadius: 38, 
    backgroundColor: 'rgba(212, 175, 55, 0.15)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: COLORS.gold
  },
  userName: { 
    fontSize: 20, 
    color: COLORS.text, 
    fontWeight: '900',
    letterSpacing: -0.3 
  },
  userPhone: { 
    fontSize: 12, 
    color: COLORS.textMuted, 
    marginTop: 3, 
    marginBottom: 12 
  },
  vipBadge: { 
    backgroundColor: 'rgba(212, 175, 55, 0.15)', 
    paddingHorizontal: 14, 
    paddingVertical: 5, 
    borderRadius: 14, 
    borderWidth: 1, 
    borderColor: COLORS.gold 
  },
  vipBadgeText: { 
    color: COLORS.gold, 
    fontSize: 11.5, 
    fontWeight: '800' 
  },
  cardSection: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 22, 
    padding: 18, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  cardHeader: { 
    fontSize: 14, 
    color: COLORS.text, 
    fontWeight: '800', 
    marginBottom: 14,
    letterSpacing: -0.2 
  },
  langGrid: { 
    flexDirection: 'row', 
    gap: 10 
  },
  langBtn: { 
    flex: 1, 
    paddingVertical: 11, 
    borderRadius: 14, 
    backgroundColor: COLORS.surfaceLight, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  langBtnActive: { 
    backgroundColor: COLORS.gold, 
    borderColor: COLORS.gold,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.25,
    shadowRadius: 6 
  },
  langText: { 
    fontSize: 12, 
    color: COLORS.textMuted, 
    fontWeight: '700' 
  },
  langTextActive: { 
    color: '#070B11', 
    fontWeight: '900' 
  },
  historyItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderColor: COLORS.borderLight 
  },
  historyTitle: { 
    fontSize: 13.5, 
    color: COLORS.text, 
    fontWeight: '700' 
  },
  historyDate: { 
    fontSize: 11, 
    color: COLORS.textMuted, 
    marginTop: 3 
  },
  completedBadge: {
    backgroundColor: COLORS.successBg,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  historyStatus: { 
    fontSize: 10.5, 
    color: COLORS.success, 
    fontWeight: '800' 
  },
  supportRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12, 
    paddingVertical: 12 
  },
  supportIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  supportIcon: { fontSize: 20 },
  supportTitle: { 
    fontSize: 13, 
    color: COLORS.text, 
    fontWeight: '700' 
  },
  supportSub: { 
    fontSize: 11, 
    color: COLORS.textMuted,
    marginTop: 2 
  },
  arrow: { 
    fontSize: 16, 
    color: COLORS.gold,
    fontWeight: '800' 
  },
});
