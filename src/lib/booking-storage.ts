// Simple file-based storage for bookings until database is set up
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BOOKINGS_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(BOOKINGS_DIR, 'bookings.json');

export interface StoredBooking {
  id: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  serviceDetails: {
    serviceId: string;
    preferredDate: string;
    preferredTime: string;
    urgency: string;
    description?: string;
  };
  metadata: {
    source: string;
    userAgent?: string;
    ipAddress?: string;
  };
}

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(BOOKINGS_DIR)) {
    await mkdir(BOOKINGS_DIR, { recursive: true });
  }
}

// Save booking to file
export async function saveBooking(booking: StoredBooking): Promise<void> {
  await ensureDataDir();
  
  let bookings: StoredBooking[] = [];
  
  // Read existing bookings
  try {
    if (existsSync(BOOKINGS_FILE)) {
      const data = await readFile(BOOKINGS_FILE, 'utf-8');
      bookings = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading bookings file:', error);
    bookings = [];
  }
  
  // Add new booking
  bookings.push(booking);
  
  // Write back to file
  try {
    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
    console.log(`✅ Booking saved: ${booking.id}`);
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    throw new Error('Failed to save booking');
  }
}

// Get all bookings
export async function getAllBookings(): Promise<StoredBooking[]> {
  await ensureDataDir();
  
  try {
    if (!existsSync(BOOKINGS_FILE)) {
      return [];
    }
    
    const data = await readFile(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading bookings:', error);
    return [];
  }
}

// Get booking by ID
export async function getBookingById(id: string): Promise<StoredBooking | null> {
  const bookings = await getAllBookings();
  return bookings.find(booking => booking.id === id) || null;
}

// Update booking status
export async function updateBookingStatus(id: string, status: StoredBooking['status']): Promise<boolean> {
  const bookings = await getAllBookings();
  const bookingIndex = bookings.findIndex(booking => booking.id === id);
  
  if (bookingIndex === -1) {
    return false;
  }
  
  bookings[bookingIndex].status = status;
  
  try {
    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
    return true;
  } catch (error) {
    console.error('Error updating booking status:', error);
    return false;
  }
}
