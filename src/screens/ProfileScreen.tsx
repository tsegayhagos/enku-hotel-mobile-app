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
          <Text style={{ fontSize: 32 }}>👤</Text>
        </View>
        <Text style={styles.userName}>Abebe Kebede</Text>
        <Text style={styles.userPhone}>+251 91 123 4567 • abebe@example.com</Text>
        <View style={styles.vipBadge}>
          <Text style={styles.vipBadgeText}>👑 Enku Gold VIP Guest</Text>
        </View>
      </View>

      {/* Language Switcher */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>ቋንቋ ይምረጡ (Select Language)</Text>
        <View style={styles.langGrid}>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'Amharic' && styles.langBtnActive]}
            onPress={() => setSelectedLang('Amharic')}
          >
            <Text style={[styles.langText, selectedLang === 'Amharic' && styles.langTextActive]}>አማርኛ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'Tigrinya' && styles.langBtnActive]}
            onPress={() => setSelectedLang('Tigrinya')}
          >
            <Text style={[styles.langText, selectedLang === 'Tigrinya' && styles.langTextActive]}>ትግርኛ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.langBtn, selectedLang === 'English' && styles.langBtnActive]}
            onPress={() => setSelectedLang('English')}
          >
            <Text style={[styles.langText, selectedLang === 'English' && styles.langTextActive]}>English</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bookings History */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>የቀደሙ ቦታ ማስያዣዎች (Booking History)</Text>
        <View style={styles.historyItem}>
          <View>
            <Text style={styles.historyTitle}>Presidential Suite #301</Text>
            <Text style={styles.historyDate}>መስከረም 10 – 14, 2026 (4 ምሽት)</Text>
          </View>
          <Text style={styles.historyStatus}>ተጠናቋል</Text>
        </View>
        <View style={[styles.historyItem, { borderBottomWidth: 0 }]}>
          <View>
            <Text style={styles.historyTitle}>Executive Room #108</Text>
            <Text style={styles.historyDate}>ነሐሴ 02 – 05, 2026 (3 ምሽት)</Text>
          </View>
          <Text style={styles.historyStatus}>ተጠናቋል</Text>
        </View>
      </View>

      {/* Hotel Concierge & Hotline */}
      <View style={styles.cardSection}>
        <Text style={styles.cardHeader}>የሆቴሉ ድጋፍ (Concierge Support)</Text>
        <TouchableOpacity
          style={styles.supportRow}
          onPress={() => Alert.alert('የሆቴል ስልክ', 'የቀጥታ ስልክ መስመር: +251 11 000 0000')}
        >
          <Text style={styles.supportIcon}>📞</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.supportTitle}>የቀጥታ የሆቴል ስልክ መስመር</Text>
            <Text style={styles.supportSub}>+251 11 000 0000 (24/7 ክፍት)</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportRow}
          onPress={() => Alert.alert('የአየር ማረፊያ ትራንስፖርት', 'የነጻ አየር ማረፊያ ትራንስፖርት ጥያቄዎ ለኮንሲየርጅ ደርሷል።')}
        >
          <Text style={styles.supportIcon}>🚐</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.supportTitle}>የአየር ማረፊያ ትራንስፖርት (Shuttle)</Text>
            <Text style={styles.supportSub}>የመውሰጃ ሰዓት ያስይዙ</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 18, paddingBottom: 40 },
  profileCard: { backgroundColor: COLORS.surface, borderRadius: 24, padding: 22, alignItems: 'center', marginBottom: 18, borderWidth: 1, borderColor: COLORS.border },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: COLORS.surfaceLight, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  userName: { fontSize: 18, color: COLORS.text, fontWeight: '800' },
  userPhone: { fontSize: 11, color: COLORS.textMuted, marginTop: 2, marginBottom: 10 },
  vipBadge: { backgroundColor: 'rgba(245, 158, 11, 0.15)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.3)' },
  vipBadgeText: { color: COLORS.accent, fontSize: 11, fontWeight: '800' },
  cardSection: { backgroundColor: COLORS.surface, borderRadius: 20, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: COLORS.border },
  cardHeader: { fontSize: 13, color: COLORS.text, fontWeight: '800', marginBottom: 12 },
  langGrid: { flexDirection: 'row', gap: 8 },
  langBtn: { flex: 1, paddingVertical: 10, borderRadius: 12, backgroundColor: COLORS.surfaceLight, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border },
  langBtnActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primaryLight },
  langText: { fontSize: 11, color: COLORS.textMuted, fontWeight: '600' },
  langTextActive: { color: '#000', fontWeight: '800' },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: COLORS.border },
  historyTitle: { fontSize: 12, color: COLORS.text, fontWeight: '700' },
  historyDate: { fontSize: 10, color: COLORS.textMuted, marginTop: 2 },
  historyStatus: { fontSize: 10, color: COLORS.success, fontWeight: '700' },
  supportRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
  supportIcon: { fontSize: 22 },
  supportTitle: { fontSize: 12, color: COLORS.text, fontWeight: '700' },
  supportSub: { fontSize: 10, color: COLORS.textMuted },
  arrow: { fontSize: 14, color: COLORS.textMuted },
});
