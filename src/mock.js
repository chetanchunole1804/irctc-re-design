// Mock data for IRCTC redesign clone

export const STATIONS = [
  { code: 'NDLS', name: 'New Delhi', city: 'New Delhi' },
  { code: 'BCT', name: 'Mumbai Central', city: 'Mumbai' },
  { code: 'MAS', name: 'MGR Chennai Central', city: 'Chennai' },
  { code: 'HWH', name: 'Howrah Junction', city: 'Kolkata' },
  { code: 'SBC', name: 'KSR Bengaluru', city: 'Bengaluru' },
  { code: 'PUNE', name: 'Pune Junction', city: 'Pune' },
  { code: 'JP', name: 'Jaipur Junction', city: 'Jaipur' },
  { code: 'LKO', name: 'Lucknow', city: 'Lucknow' },
  { code: 'ADI', name: 'Ahmedabad Junction', city: 'Ahmedabad' },
  { code: 'BPL', name: 'Bhopal Junction', city: 'Bhopal' },
  { code: 'CNB', name: 'Kanpur Central', city: 'Kanpur' },
  { code: 'PNBE', name: 'Patna Junction', city: 'Patna' },
  { code: 'BBS', name: 'Bhubaneswar', city: 'Bhubaneswar' },
  { code: 'TVC', name: 'Thiruvananthapuram', city: 'Thiruvananthapuram' },
  { code: 'AGC', name: 'Agra Cantt', city: 'Agra' },
  { code: 'VSKP', name: 'Visakhapatnam', city: 'Visakhapatnam' },
];

export const TRAVEL_CLASSES = [
  { code: 'ALL', name: 'All Classes' },
  { code: '1A', name: 'AC First Class (1A)' },
  { code: '2A', name: 'AC 2 Tier (2A)' },
  { code: '3A', name: 'AC 3 Tier (3A)' },
  { code: 'SL', name: 'Sleeper (SL)' },
  { code: 'CC', name: 'Chair Car (CC)' },
  { code: 'EC', name: 'Exec Chair Car (EC)' },
  { code: '2S', name: 'Second Sitting (2S)' },
];

export const QUOTAS = [
  'General', 'Tatkal', 'Premium Tatkal', 'Ladies', 'Senior Citizen', 'Lower Berth', 'Defence', 'Foreign Tourist'
];

export const TRAINS = [
  {
    number: '22435', name: 'Vande Bharat Express', from: 'NDLS', to: 'BCT', depart: '06:00', arrive: '17:30', duration: '11h 30m', days: ['M','T','W','T','F','S','S'],
    classes: { 'CC': { fare: 1950, available: 'AVL 23', status: 'Available' }, 'EC': { fare: 3500, available: 'AVL 8', status: 'Available' } }
  },
  {
    number: '12951', name: 'Mumbai Rajdhani', from: 'NDLS', to: 'BCT', depart: '16:55', arrive: '08:35', duration: '15h 40m', days: ['M','T','W','T','F','S','S'],
    classes: { '1A': { fare: 5200, available: 'AVL 4', status: 'Available' }, '2A': { fare: 3100, available: 'RAC 12', status: 'RAC' }, '3A': { fare: 2200, available: 'WL 42', status: 'Waiting' } }
  },
  {
    number: '12952', name: 'New Delhi Rajdhani', from: 'BCT', to: 'NDLS', depart: '17:00', arrive: '08:32', duration: '15h 32m', days: ['M','T','W','T','F','S','S'],
    classes: { '1A': { fare: 5200, available: 'AVL 2', status: 'Available' }, '2A': { fare: 3100, available: 'AVL 18', status: 'Available' }, '3A': { fare: 2200, available: 'AVL 45', status: 'Available' } }
  },
  {
    number: '12009', name: 'Shatabdi Express', from: 'NDLS', to: 'AGC', depart: '06:00', arrive: '08:00', duration: '2h 00m', days: ['M','T','W','T','F','S','S'],
    classes: { 'CC': { fare: 850, available: 'AVL 56', status: 'Available' }, 'EC': { fare: 1650, available: 'AVL 11', status: 'Available' } }
  },
  {
    number: '12259', name: 'Sealdah Duronto', from: 'NDLS', to: 'HWH', depart: '20:00', arrive: '10:00', duration: '14h 00m', days: ['M','T','W','T','F','S','S'],
    classes: { '1A': { fare: 4800, available: 'AVL 6', status: 'Available' }, '2A': { fare: 2900, available: 'AVL 22', status: 'Available' }, '3A': { fare: 2050, available: 'AVL 78', status: 'Available' } }
  },
  {
    number: '20902', name: 'Vande Bharat Express', from: 'BCT', to: 'ADI', depart: '06:10', arrive: '12:30', duration: '6h 20m', days: ['M','T','W','T','F','S','S'],
    classes: { 'CC': { fare: 1385, available: 'AVL 33', status: 'Available' }, 'EC': { fare: 2620, available: 'AVL 14', status: 'Available' } }
  },
];

export const BUSES = [
  { id: 'b1', operator: 'IntrCity SmartBus', type: 'AC Sleeper (2+1)', depart: '21:30', arrive: '07:45', duration: '10h 15m', fare: 1299, seats: 24, rating: 4.5, amenities: ['Charging Point', 'WiFi', 'Water Bottle', 'Blanket'] },
  { id: 'b2', operator: 'VRL Travels', type: 'Volvo Multi-Axle A/C Semi Sleeper', depart: '20:00', arrive: '08:30', duration: '12h 30m', fare: 1099, seats: 12, rating: 4.3, amenities: ['Charging Point', 'Water Bottle', 'Reading Light'] },
  { id: 'b3', operator: 'Orange Tours', type: 'Bharat Benz A/C Sleeper', depart: '22:15', arrive: '09:00', duration: '10h 45m', fare: 1450, seats: 18, rating: 4.6, amenities: ['Charging Point', 'WiFi', 'Snacks', 'Blanket'] },
  { id: 'b4', operator: 'SRS Travels', type: 'Scania Multi-Axle Sleeper', depart: '23:00', arrive: '10:30', duration: '11h 30m', fare: 1599, seats: 8, rating: 4.7, amenities: ['Charging Point', 'WiFi', 'Water Bottle', 'Blanket', 'TV'] },
  { id: 'b5', operator: 'KPN Travels', type: 'A/C Seater Push Back', depart: '18:30', arrive: '06:15', duration: '11h 45m', fare: 849, seats: 32, rating: 4.1, amenities: ['Charging Point', 'Water Bottle'] },
];

export const FLIGHTS = [
  { id: 'f1', airline: 'IndiGo', code: '6E-2317', depart: '06:00', arrive: '08:15', duration: '2h 15m', stops: 'Non Stop', fare: 4499, logo: 'IG' },
  { id: 'f2', airline: 'Air India', code: 'AI-805', depart: '07:30', arrive: '09:50', duration: '2h 20m', stops: 'Non Stop', fare: 5299, logo: 'AI' },
  { id: 'f3', airline: 'Vistara', code: 'UK-995', depart: '09:15', arrive: '11:30', duration: '2h 15m', stops: 'Non Stop', fare: 5899, logo: 'VS' },
  { id: 'f4', airline: 'SpiceJet', code: 'SG-8169', depart: '12:00', arrive: '15:45', duration: '3h 45m', stops: '1 Stop', fare: 3899, logo: 'SJ' },
  { id: 'f5', airline: 'Akasa Air', code: 'QP-1411', depart: '14:30', arrive: '16:50', duration: '2h 20m', stops: 'Non Stop', fare: 4799, logo: 'AK' },
  { id: 'f6', airline: 'IndiGo', code: '6E-5045', depart: '19:45', arrive: '22:10', duration: '2h 25m', stops: 'Non Stop', fare: 4299, logo: 'IG' },
];

export const HOTELS = [
  { id: 'h1', name: 'Taj Palace', location: 'Sardar Patel Marg, New Delhi', rating: 4.8, reviews: 3240, price: 12500, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', amenities: ['Pool', 'Spa', 'WiFi', 'Breakfast', 'Gym'] },
  { id: 'h2', name: 'The Leela Palace', location: 'Chanakyapuri, New Delhi', rating: 4.9, reviews: 2890, price: 18900, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', amenities: ['Pool', 'Spa', 'WiFi', 'Breakfast', 'Restaurant'] },
  { id: 'h3', name: 'ITC Maurya', location: 'Sardar Patel Marg, New Delhi', rating: 4.7, reviews: 4120, price: 11200, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800', amenities: ['Pool', 'WiFi', 'Breakfast', 'Gym'] },
  { id: 'h4', name: 'Radisson Blu Plaza', location: 'Mahipalpur, New Delhi', rating: 4.4, reviews: 1980, price: 6800, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800', amenities: ['WiFi', 'Breakfast', 'Gym', 'Airport Shuttle'] },
  { id: 'h5', name: 'The Lalit', location: 'Barakhamba Avenue, New Delhi', rating: 4.5, reviews: 2340, price: 8900, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', amenities: ['Pool', 'WiFi', 'Breakfast', 'Gym', 'Bar'] },
];

export const OFFERS = [
  { tag: 'NEW', title: 'Vande Bharat Routes Expanded', desc: '12 new Vande Bharat trains added to network', color: 'bg-blue-50 text-blue-700' },
  { tag: 'OFFER', title: 'Up to 25% off on Premium Tatkal', desc: 'Limited period offer on select routes', color: 'bg-orange-50 text-orange-700' },
  { tag: 'INFO', title: 'AI Powered Seat Allocation', desc: 'Get the best available seats automatically', color: 'bg-emerald-50 text-emerald-700' },
];

export const POPULAR_ROUTES = [
  { from: 'Delhi', to: 'Mumbai', trains: 142, fareFrom: 415 },
  { from: 'Mumbai', to: 'Pune', trains: 89, fareFrom: 95 },
  { from: 'Delhi', to: 'Jaipur', trains: 56, fareFrom: 215 },
  { from: 'Bengaluru', to: 'Chennai', trains: 78, fareFrom: 180 },
  { from: 'Howrah', to: 'New Delhi', trains: 64, fareFrom: 685 },
  { from: 'Chennai', to: 'Mumbai', trains: 42, fareFrom: 720 },
  { from: 'Delhi', to: 'Lucknow', trains: 71, fareFrom: 285 },
  { from: 'Mumbai', to: 'Ahmedabad', trains: 53, fareFrom: 305 },
];

export const TRAIN_SCHEDULE_SAMPLE = {
  number: '22435', name: 'Vande Bharat Express',
  stops: [
    { code: 'NDLS', name: 'New Delhi', arrive: '--', depart: '06:00', day: 1, distance: 0, platform: 16 },
    { code: 'AGC', name: 'Agra Cantt', arrive: '07:45', depart: '07:47', day: 1, distance: 188, platform: 3 },
    { code: 'GWL', name: 'Gwalior', arrive: '09:08', depart: '09:10', day: 1, distance: 305, platform: 1 },
    { code: 'JHS', name: 'Jhansi Junction', arrive: '10:18', depart: '10:23', day: 1, distance: 403, platform: 4 },
    { code: 'BPL', name: 'Bhopal Junction', arrive: '13:55', depart: '14:00', day: 1, distance: 705, platform: 1 },
    { code: 'BCT', name: 'Mumbai Central', arrive: '17:30', depart: '--', day: 1, distance: 1384, platform: 5 },
  ]
};

export const PNR_SAMPLE = {
  pnr: '2347189651', train: '22435 / Vande Bharat Express', from: 'NDLS - New Delhi', to: 'BCT - Mumbai Central',
  doj: '15 Aug 2025', class: 'CC', boardingPoint: 'NDLS', chartStatus: 'Chart Not Prepared',
  passengers: [
    { name: 'Passenger 1', age: 32, gender: 'M', bookingStatus: 'CNF/C2/45', currentStatus: 'CNF/C2/45' },
    { name: 'Passenger 2', age: 28, gender: 'F', bookingStatus: 'CNF/C2/46', currentStatus: 'CNF/C2/46' },
  ]
};
