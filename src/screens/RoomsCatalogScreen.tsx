import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { COLORS } from '../constants/theme';
import { DEMO_ROOM_TYPES, RoomType } from '../services/api';

export default function RoomsCatalogScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const [guestName, setGuestName] = useState('Abebe Kebede');
  const [guestPhone, setGuestPhone] = useState('+251 91 123 4567');
  const [paymentMethod, setPaymentMethod] = useState<'Telebirr' | 'CBE'>('Telebirr');

  const handleBook = (room: RoomType) => {
    setSelectedRoom(room);
    setBookingModalVisible(true);
  };

  const confirmReservation = () => {
    setBookingModalVisible(false);
    Alert.alert(
      '🎉 ቦታ ማስያዝዎ ተረጋግጧል!',
      `እንኳን ደስ አለዎ! የ ${selectedRoom?.name} ማስያዣዎ ተረጋግጧል። ክፍያው በ ${paymentMethod} ተከናውኗል። የዲጂታል ቁልፍ እና የክፍል መረጃ "ቆይታዬ" ገጽ ላይ ዝግጁ ሆኗል!`,
      [{ text: 'ወደ ቆይታዬ ሂድ', onPress: () => navigation.navigate('MyStay') }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Category Filter Pills */}
      <View style={styles.filterBar}>
        {['All', 'Suites', 'Villas', 'Standard'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.filterPill, selectedCategory === cat && styles.filterPillActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.filterText, selectedCategory === cat && styles.filterTextActive]}>
              {cat === 'All' ? 'ሁሉም ክፍሎች' : cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {DEMO_ROOM_TYPES.map((room) => (
          <View key={room.id} style={styles.card}>
            {/* Room Visual Emoji Header */}
            <View style={styles.cardHeader}>
              <Text style={{ fontSize: 44 }}>{room.emoji}</Text>
              <View style={styles.priceTag}>
                <Text style={styles.priceValue}>{room.base_price.toLocaleString()}</Text>
                <Text style={styles.priceUnit}> ብር / ምሽት</Text>
              </View>
            </View>

            {/* Room Info */}
            <Text style={styles.roomTitle}>{room.name}</Text>
            <Text style={styles.roomDescription}>{room.description}</Text>

            {/* Amenities Pills */}
            <View style={styles.amenitiesWrap}>
              {room.amenities.map((am, i) => (
                <View key={i} style={styles.amenityBadge}>
                  <Text style={styles.amenityText}>✓ {am}</Text>
                </View>
              ))}
            </View>

            {/* Booking Action */}
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => handleBook(room)}
            >
              <Text style={styles.bookButtonText}>አሁን ያስይዙ (Book This Room)</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Booking Checkout Modal */}
      <Modal visible={bookingModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>ቦታ ማስያዣ (Instant Booking)</Text>
              <TouchableOpacity onPress={() => setBookingModalVisible(false)}>
                <Text style={styles.closeBtn}>✕</Text>
              </TouchableOpacity>
            </View>

            {selectedRoom && (
              <View style={styles.summaryCard}>
                <Text style={styles.summaryTitle}>{selectedRoom.name}</Text>
                <Text style={styles.summarySub}>ቆይታ: 3 ምሽቶች • 2 እንግዶች</Text>
                <Text style={styles.summaryPrice}>ድምር: {(selectedRoom.base_price * 3).toLocaleString()} ብር</Text>
              </View>
            )}

            <View style={styles.formGroup}>
              <Text style={styles.label}>ሙሉ ስም (Full Name)</Text>
              <TextInput
                style={styles.input}
                value={guestName}
                onChangeText={setGuestName}
                placeholderTextColor={COLORS.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>ስልክ ቁጥር (Phone Number)</Text>
              <TextInput
                style={styles.input}
                value={guestPhone}
                onChangeText={setGuestPhone}
                keyboardType="phone-pad"
                placeholderTextColor={COLORS.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>የመክፈያ መንገድ ይምረጡ</Text>
              <View style={styles.payGrid}>
                <TouchableOpacity
                  style={[styles.payOption, paymentMethod === 'Telebirr' && styles.payOptionActive]}
                  onPress={() => setPaymentMethod('Telebirr')}
                >
                  <Text style={[styles.payOptionText, paymentMethod === 'Telebirr' && styles.payOptionTextActive]}>
                    📱 Telebirr
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.payOption, paymentMethod === 'CBE' && styles.payOptionActive]}
                  onPress={() => setPaymentMethod('CBE')}
                >
                  <Text style={[styles.payOptionText, paymentMethod === 'CBE' && styles.payOptionTextActive]}>
                    🏦 CBE Birr
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmReservation}
            >
              <Text style={styles.confirmButtonText}>ክፍያ አረጋግጥ እና ቫውቸር አውጣ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  filterBar: { flexDirection: 'row', padding: 14, gap: 8 },
  filterPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border },
  filterPillActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primaryLight },
  filterText: { fontSize: 12, color: COLORS.textMuted, fontWeight: '600' },
  filterTextActive: { color: '#000', fontWeight: '800' },
  list: { padding: 16, paddingBottom: 40 },
  card: { backgroundColor: COLORS.surface, borderRadius: 24, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: COLORS.border },
  cardHeader: { height: 110, backgroundColor: COLORS.surfaceLight, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  priceTag: { position: 'absolute', bottom: 10, right: 12, flexDirection: 'row', alignItems: 'baseline', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  priceValue: { fontSize: 16, color: COLORS.primaryLight, fontWeight: '800' },
  priceUnit: { fontSize: 10, color: COLORS.textMuted },
  roomTitle: { fontSize: 16, color: COLORS.text, fontWeight: '800', marginBottom: 4 },
  roomDescription: { fontSize: 12, color: COLORS.textMuted, lineHeight: 18, marginBottom: 12 },
  amenitiesWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 16 },
  amenityBadge: { backgroundColor: 'rgba(14, 165, 164, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(14, 165, 164, 0.2)' },
  amenityText: { fontSize: 10, color: COLORS.primaryLight, fontWeight: '600' },
  bookButton: { backgroundColor: COLORS.primary, paddingVertical: 12, borderRadius: 14, alignItems: 'center' },
  bookButtonText: { color: '#fff', fontSize: 13, fontWeight: '700' },

  // Modal styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: COLORS.surface, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 22, paddingBottom: 36, borderWidth: 1, borderColor: COLORS.border },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 17, color: COLORS.text, fontWeight: '800' },
  closeBtn: { fontSize: 20, color: COLORS.textMuted, padding: 4 },
  summaryCard: { backgroundColor: COLORS.surfaceLight, borderRadius: 16, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: COLORS.border },
  summaryTitle: { fontSize: 15, color: COLORS.primaryLight, fontWeight: '800' },
  summarySub: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  summaryPrice: { fontSize: 14, color: COLORS.accent, fontWeight: '800', marginTop: 6 },
  formGroup: { marginBottom: 14 },
  label: { fontSize: 11, color: COLORS.textMuted, marginBottom: 6 },
  input: { backgroundColor: COLORS.background, borderRadius: 12, padding: 12, color: '#fff', fontSize: 13, borderWidth: 1, borderColor: COLORS.border },
  payGrid: { flexDirection: 'row', gap: 10 },
  payOption: { flex: 1, backgroundColor: COLORS.background, padding: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border },
  payOptionActive: { backgroundColor: 'rgba(14, 165, 164, 0.15)', borderColor: COLORS.primaryLight },
  payOptionText: { fontSize: 12, color: COLORS.textMuted, fontWeight: '600' },
  payOptionTextActive: { color: COLORS.primaryLight, fontWeight: '800' },
  confirmButton: { backgroundColor: COLORS.primaryLight, paddingVertical: 14, borderRadius: 14, alignItems: 'center', marginTop: 10 },
  confirmButtonText: { color: '#000', fontSize: 13, fontWeight: '800' },
});
