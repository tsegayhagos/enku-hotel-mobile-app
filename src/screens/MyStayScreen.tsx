import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../constants/theme';

export default function MyStayScreen() {
  const [keyUnlocked, setKeyUnlocked] = useState(false);

  const handleTapToUnlock = () => {
    setKeyUnlocked(true);
    Alert.alert('🔓 በር ተከፍቷል!', 'ክፍል 204 በዲጂታል ቁልፍዎ ተከፍቷል (Door Unlocked Successfully)');
    setTimeout(() => setKeyUnlocked(false), 4000);
  };

  const handleCheckout = () => {
    Alert.alert(
      '📱 ዲጂታል ቼክአውት (Express Check-Out)',
      'የቀረበውን ጠቅላላ 11,730 ብር ሂሳብ በቴሌብር (Telebirr) ወይም በሲቢኢ ብር (CBE Birr) መክፈል ይፈልጋሉ?',
      [
        { text: 'ይቅር', style: 'cancel' },
        {
          text: 'ክፈል እና ቼክአውት አድርግ',
          onPress: () => Alert.alert('✓ ተጠናቋል!', 'ክፍያው ተጠናቆ ደረሰኝ ወደ ኢሜይልዎ ተልኳል፤ ስለጎበኙን እናመሰግናለን!')
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Reservation Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>የእኔ ቆይታ (My Stay)</Text>
          <Text style={styles.bookingCode}>ቦታ ማስያዣ ኮድ: #ENK-2026-88</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Checked-In</Text>
        </View>
      </View>

      {/* Digital Key Card */}
      <View style={styles.digitalKeyCard}>
        <Text style={styles.keyTag}>ዲጂታል የክፍል ቁልፍ</Text>
        <Text style={styles.keyRoomNumber}>ክፍል 204</Text>
        <Text style={styles.keySub}>Deluxe King Suite • 2ኛ ፎቅ</Text>

        <TouchableOpacity
          style={[styles.keyButton, keyUnlocked && styles.keyButtonUnlocked]}
          onPress={handleTapToUnlock}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 38 }}>{keyUnlocked ? '🔓' : '🔑'}</Text>
        </TouchableOpacity>
        <Text style={styles.keyInstruction}>
          {keyUnlocked ? 'በር ተከፍቷል! (Unlocked)' : 'ስልክዎን ከበሩ እጀታ ጋር ያገናኙ (Tap to Unlock)'}
        </Text>
      </View>

      {/* Stay Details Information */}
      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>የመግቢያ ሰዓት (Check-In)</Text>
          <Text style={styles.detailVal}>ህዳር 15, 2:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>የመውጫ ሰዓት (Check-Out)</Text>
          <Text style={styles.detailVal}>ህዳር 18, 11:00 AM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>የእንግዳ ስም</Text>
          <Text style={styles.detailVal}>Abebe Kebede</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ዋይፋይ ፓስዎርድ (Wi-Fi)</Text>
          <Text style={styles.wifiCode}>EnkuResort@2026</Text>
        </View>
      </View>

      {/* Live Itemized Folio Bill */}
      <View style={styles.folioCard}>
        <View style={styles.folioHeader}>
          <Text style={styles.folioTitle}>የቀጥታ ሂሳብ (Live Room Folio)</Text>
          <View style={styles.folioOpenBadge}>
            <Text style={styles.folioOpenText}>Open Folio</Text>
          </View>
        </View>

        <View style={styles.folioRow}>
          <Text style={styles.folioItem}>የክፍል ኪራይ (2 ምሽት x 4,500)</Text>
          <Text style={styles.folioAmount}>9,000 ብር</Text>
        </View>
        <View style={styles.folioRow}>
          <Text style={styles.folioItem}>ሬስቶራንት (ልዩ የበሬ ጥብስ እና መጠጦች)</Text>
          <Text style={styles.folioAmount}>800 ብር</Text>
        </View>
        <View style={styles.folioRow}>
          <Text style={styles.folioItem}>ቫሌት ላውንድሪ (ሱፍ እጥበት)</Text>
          <Text style={styles.folioAmount}>400 ብር</Text>
        </View>
        <View style={styles.folioRow}>
          <Text style={styles.folioTax}>ቫት እና ሰርቪስ ቻርጅ (15%)</Text>
          <Text style={styles.folioTaxAmount}>1,530 ብር</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>ጠቅላላ ሂሳብ (Total Due)</Text>
          <Text style={styles.totalAmount}>11,730 ብር</Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
          <Text style={styles.checkoutBtnText}>📱 በቴሌብር / CBE Birr ክፈል (Express Check-Out)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 18, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  headerTitle: { fontSize: 18, color: COLORS.text, fontWeight: '800' },
  bookingCode: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  statusBadge: { backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  statusText: { color: COLORS.success, fontSize: 11, fontWeight: '700' },
  digitalKeyCard: { backgroundColor: COLORS.primary, borderRadius: 28, padding: 22, alignItems: 'center', marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 12, elevation: 8 },
  keyTag: { fontSize: 10, color: COLORS.primaryLight, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: '800' },
  keyRoomNumber: { fontSize: 32, color: '#fff', fontWeight: '900', marginVertical: 4 },
  keySub: { fontSize: 12, color: '#cbd5e1', marginBottom: 16 },
  keyButton: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', marginBottom: 10, shadowColor: '#0ea5a4', shadowOpacity: 0.5, shadowRadius: 10, elevation: 6 },
  keyButtonUnlocked: { backgroundColor: COLORS.success },
  keyInstruction: { fontSize: 11, color: '#cbd5e1', fontWeight: '600' },
  detailsCard: { backgroundColor: COLORS.surface, borderRadius: 20, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: COLORS.border },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  detailLabel: { fontSize: 11, color: COLORS.textMuted },
  detailVal: { fontSize: 12, color: COLORS.text, fontWeight: '600' },
  wifiCode: { fontSize: 12, color: COLORS.primaryLight, fontWeight: '700' },
  folioCard: { backgroundColor: COLORS.surface, borderRadius: 22, padding: 18, borderWidth: 1, borderColor: COLORS.border },
  folioHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottomWidth: 1, borderColor: COLORS.border, marginBottom: 10 },
  folioTitle: { fontSize: 13, color: COLORS.text, fontWeight: '800' },
  folioOpenBadge: { backgroundColor: 'rgba(14, 165, 164, 0.15)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  folioOpenText: { color: COLORS.primaryLight, fontSize: 10, fontWeight: '700' },
  folioRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  folioItem: { fontSize: 11, color: '#cbd5e1' },
  folioAmount: { fontSize: 12, color: COLORS.text, fontWeight: '600' },
  folioTax: { fontSize: 10, color: COLORS.textMuted },
  folioTaxAmount: { fontSize: 11, color: COLORS.textMuted },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, marginTop: 8, borderTopWidth: 1, borderColor: COLORS.border },
  totalLabel: { fontSize: 13, color: COLORS.text, fontWeight: '800' },
  totalAmount: { fontSize: 16, color: COLORS.primaryLight, fontWeight: '900' },
  checkoutBtn: { backgroundColor: COLORS.success, borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 14 },
  checkoutBtnText: { color: '#000', fontSize: 12, fontWeight: '800' },
});
