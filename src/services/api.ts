import { Platform } from 'react-native';

// For local Android emulator 10.0.2.2 connects to host machine localhost:8000
// For physical devices, replace with your local WiFi IP e.g. http://192.168.1.5:8000
export const API_BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:8000/api' : 'http://127.0.0.1:8000/api';

export interface RoomType {
  id: number;
  name: string;
  slug: string;
  base_price: number;
  max_occupancy: number;
  description: string;
  amenities: string[];
  emoji: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  category: 'dining' | 'laundry' | 'housekeeping' | 'maintenance';
  price: number;
  description: string;
  emoji: string;
}

export interface FolioItem {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
}

export const DEMO_ROOM_TYPES: RoomType[] = [
  {
    id: 1,
    name: 'Deluxe King Suite',
    slug: 'deluxe-king',
    base_price: 4500,
    max_occupancy: 2,
    description: 'Spacious 45m² suite with panoramic mountain view, king-size bed, private jacuzzi, and complimentary breakfast.',
    amenities: ['King Bed', 'Jacuzzi', 'High-speed Wi-Fi', 'Balcony', 'Breakfast Included', 'Minibar'],
    emoji: '🛌',
  },
  {
    id: 2,
    name: 'Executive Panoramic Suite',
    slug: 'executive-suite',
    base_price: 6200,
    max_occupancy: 3,
    description: 'Luxury 4th-floor corner suite with executive workstation, espresso bar, and 180° valley skyline terrace.',
    amenities: ['King Bed + Sofa', 'Corner Terrace', 'Executive Lounge', 'Dedicated Butler', 'Espresso Machine'],
    emoji: '🌅',
  },
  {
    id: 3,
    name: 'Presidential Royal Villa',
    slug: 'presidential-villa',
    base_price: 9800,
    max_occupancy: 4,
    description: 'Ultra-exclusive 2-bedroom private villa with temperature-controlled plunge pool, dining room, and VIP airport transfer.',
    amenities: ['Private Pool', '2 Master Bedrooms', 'Private Chef', 'VIP Airport Transfer', 'Chauffeur Service'],
    emoji: '👑',
  },
  {
    id: 4,
    name: 'Standard Queen Room',
    slug: 'standard-queen',
    base_price: 2800,
    max_occupancy: 2,
    description: 'Modern, soundproofed room with plush queen bed, rainfall shower, smart TV, and ergonomic work area.',
    amenities: ['Queen Bed', 'Smart 55" TV', 'Rainfall Shower', 'Work Desk', 'Free Wi-Fi'],
    emoji: '🛋️',
  },
];

export const DEMO_SERVICES: ServiceItem[] = [
  // Dining
  { id: 101, title: 'ልዩ የበሬ ጥብስ (Special Beef Tibs)', category: 'dining', price: 650, description: 'Tender beef sautéed with rosemary, onions, and jalapenos with fresh injera & awaze.', emoji: '🥩' },
  { id: 102, title: 'Enku Woodfired Gourmet Pizza', category: 'dining', price: 580, description: 'Artisan sourdough crust, buffalo mozzarella, fresh basil, and spiced beef.', emoji: '🍕' },
  { id: 103, title: 'የኢትዮጵያ ባህላዊ ቡና (Special Roast)', category: 'dining', price: 150, description: 'Traditional jebena coffee served with frankincense aroma and popcorn.', emoji: '☕' },
  { id: 104, title: 'Seasonal Tropical Fruit Platter', category: 'dining', price: 280, description: 'Freshly sliced mango, papaya, pineapple, and honey drizzle.', emoji: '🍉' },

  // Laundry
  { id: 201, title: 'ሙሉ ሱፍ እጥበት (Suit 2-Piece Dry Clean)', category: 'laundry', price: 400, description: 'Professional gentle dry cleaning and precision steam press.', emoji: '👔' },
  { id: 202, title: 'የሴት ቀሚስ (Evening Gown / Dress)', category: 'laundry', price: 300, description: 'Delicate fabric wash, hand finish, and hanger return.', emoji: '👗' },
  { id: 203, title: 'ሸሚዝ እና ሱሪ (Shirt & Trousers Express)', category: 'laundry', price: 220, description: 'Wash & fold or steam pressed ready in 3 hours.', emoji: '👕' },

  // Housekeeping
  { id: 301, title: 'ክፍል አጽዱልኝ (Room Make-Up Call)', category: 'housekeeping', price: 0, description: 'Complete linen change, vacuum, bathroom sanitization, and trash removal.', emoji: '🧹' },
  { id: 302, title: 'ተጨማሪ ፎጣ እና ሳሙና (Extra Towel Set)', category: 'housekeeping', price: 0, description: 'Plush bath sheets, hand towels, and organic toiletries.', emoji: '🛁' },
  { id: 303, title: 'ተጨማሪ ትራስ እና ብርድ ልብስ (Pillows & Duvet)', category: 'housekeeping', price: 0, description: 'Hypoallergenic memory foam pillows and goose down blanket.', emoji: '🛏️' },

  // Maintenance
  { id: 401, title: 'የኤሲ / ሙቀት ጥገና (Air Conditioning Check)', category: 'maintenance', price: 0, description: 'Quick technician dispatch for thermostat or cooling issues.', emoji: '❄️' },
  { id: 402, title: 'የቧንቧ / ውሀ ጥገና (Plumbing & Water Flow)', category: 'maintenance', price: 0, description: 'Hot water check or shower drain maintenance.', emoji: '🔧' },
];
