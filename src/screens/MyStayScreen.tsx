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
          <Text style={styles.statusText}>● Checked-In</Text>
        </View>
      </View>

      {/* Digital Key Card */}
      <View style={styles.digitalKeyCard}>
        <View style={styles.keyTagRow}>
          <Text style={styles.keyTag}>✨ ዲጂታል የክፍል ቁልፍ</Text>
          <Text style={styles.nfcTag}>NFC READY</Text>
        </View>
        <Text style={styles.keyRoomNumber}>ክፍል 204</Text>
        <Text style={styles.keySub}>Deluxe King Suite • 2ኛ ፎቅ (Floor 2)</Text>

        <TouchableOpacity
          style={[styles.keyButton, keyUnlocked && styles.keyButtonUnlocked]}
          onPress={handleTapToUnlock}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 44 }}>{keyUnlocked ? '🔓' : '🔑'}</Text>
        </TouchableOpacity>
        <Text style={styles.keyInstruction}>
          {keyUnlocked ? 'በር ተከፍቷል! (Unlocked)' : 'ስልክዎን ከበሩ እጀታ ጋር ያገናኙ (Tap to Unlock)'}
        </Text>
      </View>

      {/* Stay Details Information */}
      <View style={styles.detailsCard}>
        <Text style={styles.cardHeading}>የቆይታ ዝርዝር መረጃ (Stay Details)</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>መግቢያ (Check-in)</Text>
          <Text style={styles.detailValue}>ህዳር 15, 2026 • 2:00 PM</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>መውጫ (Check-out)</Text>
          <Text style={styles.detailValue}>ህዳር 18, 2026 • 11:00 AM</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>የዋይፋይ ስም (Guest Wi-Fi)</Text>
          <Text style={styles.detailValue}>Enku_Guest_VIP</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>የዋይፋይ ፓስወርድ</Text>
          <Text style={[styles.detailValue, { color: COLORS.gold, fontWeight: '900' }]}>enku2026vip</Text>
        </View>
      </View>

      {/* Folio Summary & Express Checkout */}
      <View style={styles.folioCard}>
        <View style={styles.folioHeader}>
          <Text style={styles.cardHeading}>የአሁኑ የክፍያ ሂሳብ (Live Folio)</Text>
          <Text style={styles.folioTotal}>11,730 ETB</Text>
        </View>
        <Text style={styles.folioSub}>የክፍል ኪራይ + የክፍል ምግብና ላውንድሪ ሰርቪስ</Text>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
          activeOpacity={0.85}
        >
          <Text style={styles.checkoutButtonText}>⚡ ፈጣን ዲጂታል ቼክአውት (Express Check-Out)</Text>
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
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  headerTitle: { 
    fontSize: 20, 
    color: COLORS.text, 
    fontWeight: '800' 
  },
  bookingCode: { 
    fontSize: 12, 
    color: COLORS.primaryLight, 
    fontWeight: '600',
    marginTop: 3 
  },
  statusBadge: { 
    backgroundColor: COLORS.successBg, 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)'
  },
  statusText: { 
    color: COLORS.success, 
    fontSize: 11, 
    fontWeight: '800' 
  },

  // Digital Key
  digitalKeyCard: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 28, 
    padding: 24, 
    alignItems: 'center', 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: COLORS.borderGold,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 6
  },
  keyTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12
  },
  keyTag: { 
    fontSize: 12, 
    color: COLORS.gold, 
    fontWeight: '800' 
  },
  nfcTag: {
    fontSize: 10,
    color: COLORS.primaryLight,
    fontWeight: '800',
    backgroundColor: 'rgba(14, 165, 164, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6
  },
  keyRoomNumber: { 
    fontSize: 32, 
    color: '#FFF', 
    fontWeight: '900', 
    letterSpacing: -0.5 
  },
  keySub: { 
    fontSize: 12.5, 
    color: COLORS.textMuted, 
    marginTop: 4, 
    marginBottom: 20 
  },
  keyButton: { 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    backgroundColor: 'rgba(212, 175, 55, 0.15)', 
    borderWidth: 2, 
    borderColor: COLORS.gold, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.3,
    shadowRadius: 12
  },
  keyButtonUnlocked: { 
    backgroundColor: 'rgba(16, 185, 129, 0.2)', 
    borderColor: COLORS.success 
  },
  keyInstruction: { 
    fontSize: 12, 
    color: COLORS.textMuted, 
    fontWeight: '600' 
  },

  // Details
  detailsCard: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 22, 
    padding: 18, 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  cardHeading: { 
    fontSize: 15, 
    color: COLORS.text, 
    fontWeight: '800', 
    marginBottom: 14 
  },
  detailRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 9, 
    borderBottomWidth: 1, 
    borderBottomColor: COLORS.borderLight 
  },
  detailLabel: { 
    fontSize: 12.5, 
    color: COLORS.textMuted 
  },
  detailValue: { 
    fontSize: 13, 
    color: COLORS.text, 
    fontWeight: '700' 
  },

  // Folio
  folioCard: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 24, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12
  },
  folioHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  folioTotal: { 
    fontSize: 18, 
    fontWeight: '900', 
    color: COLORS.gold 
  },
  folioSub: { 
    fontSize: 12, 
    color: COLORS.textMuted, 
    marginTop: 4, 
    marginBottom: 16 
  },
  checkoutButton: { 
    backgroundColor: COLORS.primaryLight, 
    paddingVertical: 14, 
    borderRadius: 16, 
    alignItems: 'center',
    shadowColor: COLORS.primaryLight,
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  checkoutButtonText: { 
    color: '#070B11', 
    fontSize: 12.5, 
    fontWeight: '800' 
  },
});
