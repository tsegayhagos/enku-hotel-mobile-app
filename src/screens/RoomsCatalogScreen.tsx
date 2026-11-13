import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { COLORS } from '../constants/theme';
import { DEMO_ROOM_TYPES, RoomType } from '../services/api';

export default function RoomsCatalogScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const [guestName, setGuestName] = useState('Tsegay Hagos');
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
            activeOpacity={0.8}
          >
            <Text style={[styles.filterText, selectedCategory === cat && styles.filterTextActive]}>
              {cat === 'All' ? '✨ ሁሉም ክፍሎች' : cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {DEMO_ROOM_TYPES.map((room) => (
          <View key={room.id} style={styles.card}>
            {/* Room Visual Emoji Header */}
            <View style={styles.cardHeader}>
              <Text style={{ fontSize: 48 }}>{room.emoji}</Text>
              <View style={styles.ratingTag}>
                <Text style={styles.ratingTagText}>⭐ 4.96 VIP</Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.priceValue}>{room.base_price.toLocaleString()}</Text>
                <Text style={styles.priceUnit}> ETB / ምሽት</Text>
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
              activeOpacity={0.85}
            >
              <Text style={styles.bookButtonText}>አሁን ያስይዙ (Reserve Room) →</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Booking Checkout Modal */}
      <Modal visible={bookingModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>✨ ቦታ ማስያዣ (Instant Reservation)</Text>
              <TouchableOpacity onPress={() => setBookingModalVisible(false)}>
                <Text style={styles.closeBtn}>✕</Text>
              </TouchableOpacity>
            </View>

            {selectedRoom && (
              <View style={styles.summaryCard}>
                <Text style={styles.summaryTitle}>{selectedRoom.name}</Text>
                <Text style={styles.summarySub}>ቆይታ: 3 ምሽቶች • 2 እንግዶች • ቁርስ በነፃ</Text>
                <Text style={styles.summaryPrice}>ጠቅላላ ሂሳብ: {(selectedRoom.base_price * 3).toLocaleString()} ETB</Text>
              </View>
            )}

            <View style={styles.formGroup}>
              <Text style={styles.label}>የእንግዳ ሙሉ ስም (Guest Full Name)</Text>
              <TextInput
                style={styles.input}
                value={guestName}
                onChangeText={setGuestName}
                placeholderTextColor={COLORS.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>ስልክ ቁጥር (Mobile / Contact Number)</Text>
              <TextInput
                style={styles.input}
                value={guestPhone}
                onChangeText={setGuestPhone}
                keyboardType="phone-pad"
                placeholderTextColor={COLORS.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>የክፍያ መንገድ ይምረጡ (Select Payment)</Text>
              <View style={styles.payGrid}>
                <TouchableOpacity
                  style={[styles.payOption, paymentMethod === 'Telebirr' && styles.payOptionActiveTele]}
                  onPress={() => setPaymentMethod('Telebirr')}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.payOptionText, paymentMethod === 'Telebirr' && styles.payOptionTextActiveTele]}>
                    📱 Telebirr (ቴሌብር)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.payOption, paymentMethod === 'CBE' && styles.payOptionActiveCbe]}
                  onPress={() => setPaymentMethod('CBE')}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.payOptionText, paymentMethod === 'CBE' && styles.payOptionTextActiveCbe]}>
                    🏦 CBE Birr (ሲቢኢ)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmReservation}
              activeOpacity={0.85}
            >
              <Text style={styles.confirmButtonText}>ክፍያ አረጋግጥ እና ቫውቸር አውጣ (Confirm & Pay)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  filterBar: { 
    flexDirection: 'row', 
    padding: 16, 
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight 
  },
  filterPill: { 
    paddingHorizontal: 16, 
    paddingVertical: 9, 
    borderRadius: 22, 
    backgroundColor: COLORS.surface, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  filterPillActive: { 
    backgroundColor: COLORS.gold, 
    borderColor: COLORS.gold 
  },
  filterText: { 
    fontSize: 12, 
    color: COLORS.textMuted, 
    fontWeight: '700' 
  },
  filterTextActive: { 
    color: '#070B11', 
    fontWeight: '800' 
  },
  list: { 
    padding: 18, 
    paddingBottom: 48 
  },
  card: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 26, 
    padding: 18, 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 5
  },
  cardHeader: { 
    height: 125, 
    backgroundColor: COLORS.surfaceLight, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    position: 'relative'
  },
  ratingTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(7, 11, 17, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)'
  },
  ratingTagText: {
    fontSize: 10,
    color: COLORS.gold,
    fontWeight: '800'
  },
  priceTag: { 
    position: 'absolute', 
    bottom: 12, 
    right: 12, 
    flexDirection: 'row', 
    alignItems: 'baseline', 
    backgroundColor: 'rgba(7, 11, 17, 0.9)', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderGold
  },
  priceValue: { 
    fontSize: 17, 
    color: COLORS.gold, 
    fontWeight: '900' 
  },
  priceUnit: { 
    fontSize: 10, 
    color: COLORS.textMuted,
    fontWeight: '600'
  },
  roomTitle: { 
    fontSize: 17, 
    color: COLORS.text, 
    fontWeight: '800', 
    marginBottom: 6,
    letterSpacing: -0.2
  },
  roomDescription: { 
    fontSize: 12.5, 
    color: COLORS.textMuted, 
    lineHeight: 18, 
    marginBottom: 14 
  },
  amenitiesWrap: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 7, 
    marginBottom: 18 
  },
  amenityBadge: { 
    backgroundColor: 'rgba(14, 165, 164, 0.1)', 
    paddingHorizontal: 9, 
    paddingVertical: 5, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: 'rgba(14, 165, 164, 0.25)' 
  },
  amenityText: { 
    fontSize: 11, 
    color: COLORS.primaryLight, 
    fontWeight: '700' 
  },
  bookButton: { 
    backgroundColor: COLORS.primaryLight, 
    paddingVertical: 14, 
    borderRadius: 16, 
    alignItems: 'center',
    shadowColor: COLORS.primaryLight,
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  bookButtonText: { 
    color: '#070B11', 
    fontSize: 13, 
    fontWeight: '800' 
  },

  // Modal styles
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.88)', 
    justifyContent: 'flex-end' 
  },
  modalContent: { 
    backgroundColor: COLORS.surface, 
    borderTopLeftRadius: 32, 
    borderTopRightRadius: 32, 
    padding: 24, 
    paddingBottom: 40, 
    borderWidth: 1, 
    borderColor: COLORS.borderGold,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20
  },
  modalHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 18 
  },
  modalTitle: { 
    fontSize: 18, 
    color: COLORS.text, 
    fontWeight: '800' 
  },
  closeBtn: { 
    fontSize: 22, 
    color: COLORS.textMuted, 
    padding: 4 
  },
  summaryCard: { 
    backgroundColor: COLORS.surfaceLight, 
    borderRadius: 18, 
    padding: 16, 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  summaryTitle: { 
    fontSize: 16, 
    color: COLORS.text, 
    fontWeight: '800' 
  },
  summarySub: { 
    fontSize: 11.5, 
    color: COLORS.textMuted, 
    marginTop: 4 
  },
  summaryPrice: { 
    fontSize: 15, 
    color: COLORS.gold, 
    fontWeight: '900', 
    marginTop: 8 
  },
  formGroup: { marginBottom: 16 },
  label: { 
    fontSize: 11.5, 
    color: COLORS.textMuted, 
    fontWeight: '600',
    marginBottom: 7 
  },
  input: { 
    backgroundColor: COLORS.background, 
    borderRadius: 14, 
    padding: 13, 
    color: '#FFF', 
    fontSize: 13.5, 
    borderWidth: 1, 
    borderColor: COLORS.border 
  },
  payGrid: { 
    flexDirection: 'row', 
    gap: 12 
  },
  payOption: { 
    flex: 1, 
    backgroundColor: COLORS.background, 
    padding: 14, 
    borderRadius: 14, 
    alignItems: 'center', 
    borderWidth: 1.5, 
    borderColor: COLORS.border 
  },
  payOptionActiveTele: { 
    backgroundColor: 'rgba(14, 165, 164, 0.15)', 
    borderColor: COLORS.primaryLight 
  },
  payOptionActiveCbe: { 
    backgroundColor: 'rgba(212, 175, 55, 0.15)', 
    borderColor: COLORS.gold 
  },
  payOptionText: { 
    fontSize: 12.5, 
    color: COLORS.textMuted, 
    fontWeight: '700' 
  },
  payOptionTextActiveTele: { 
    color: COLORS.primaryLight, 
    fontWeight: '800' 
  },
  payOptionTextActiveCbe: { 
    color: COLORS.gold, 
    fontWeight: '800' 
  },
  confirmButton: { 
    backgroundColor: COLORS.gold, 
    paddingVertical: 15, 
    borderRadius: 16, 
    alignItems: 'center', 
    marginTop: 10,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  confirmButtonText: { 
    color: '#070B11', 
    fontSize: 13.5, 
    fontWeight: '900' 
  },
});
