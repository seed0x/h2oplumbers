"use client";
import { useState, useMemo, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import { CheckCircle, Clock, AlertTriangle, Loader2 } from 'lucide-react';
import './booking.css';

// Define a client-safe type for services
type ClientService = {
  id: string;
  name: string;
};

type CalendarValuePiece = Date | null;
type CalendarValue = CalendarValuePiece | [CalendarValuePiece, CalendarValuePiece];

const allSlotTimes = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

// Simulate some booked slots
const bookedSlots = {
  [new Date().toISOString().split('T')[0]]: ['10:00 AM', '1:00 PM'],
};

export default function BookingPage() {
  const [date, setDate] = useState<CalendarValue>(new Date());
  const [time, setTime] = useState<string>('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    serviceId: '',
    notes: ''
  });
  const [services, setServices] = useState<ClientService[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper function to categorize time slots
  const getTimeCategory = (timeStr: string): 'morning' | 'afternoon' | 'evening' | 'flexible' => {
    const hour = parseInt(timeStr.split(':')[0]);
    const isAM = timeStr.includes('AM');
    const is24Hour = isAM ? hour : hour + 12;
    
    if (is24Hour < 12) return 'morning';
    if (is24Hour < 17) return 'afternoon';
    return 'evening';
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        const services: ClientService[] = data.services.map((service: any) => ({
          id: service.id,
          name: service.name
        }));
        setServices(services);
        if (services.length > 0) {
          setForm(prev => ({ ...prev, serviceId: services[0].id }));
        }
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Could not load service options. Please try again later or call (360) 883-2506.");
      }
    };
    fetchServices();
  }, []);

  const availableSlots = useMemo(() => {
    const selectedDate = Array.isArray(date) ? date[0] : date;
    if (!selectedDate) return allSlotTimes;
    
    const dateString = selectedDate.toISOString().split('T')[0];
    const todaysBookedSlots = bookedSlots[dateString] || [];
    const now = new Date();
    const todayString = now.toISOString().split('T')[0];
    const isToday = dateString === todayString;
    
    // Filter out booked slots
    let available = allSlotTimes.filter(slot => !todaysBookedSlots.includes(slot));
    
    // If it's today, filter out slots within 2 hours of current time
    if (isToday) {
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const twoHoursFromNow = currentHour + 2 + (currentMinute / 60);
      
      available = available.filter(slotTime => {
        // Parse slot time to 24-hour format
        const [hourStr, minuteStr, ampm] = slotTime.match(/(\d+):(\d+)\s(AM|PM)/)!.slice(1);
        let slotHour = parseInt(hourStr, 10);
        const slotMinute = parseInt(minuteStr, 10);
        
        if (ampm === 'PM' && slotHour !== 12) slotHour += 12;
        if (ampm === 'AM' && slotHour === 12) slotHour = 0;
        
        const slotTimeIn24 = slotHour + (slotMinute / 60);
        
        // Only show slots that are at least 2 hours away
        return slotTimeIn24 >= twoHoursFromNow;
      });
    }
    
    return available;
  }, [date]);

  const handleDateChange = (value: CalendarValue) => {
    setDate(value);
    setTime(''); // Reset time when date changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!time) {
      setError("Please select a time for your appointment.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    const selectedDate = Array.isArray(date) ? date[0] : date;
    if (!selectedDate) {
        setError("Invalid date selected.");
        setIsSubmitting(false);
        return;
    }

    const [hourStr, minuteStr, ampm] = time.match(/(\d+):(\d+)\s(AM|PM)/)!.slice(1);
    let hour = parseInt(hourStr, 10);
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    
    const scheduledAt = new Date(selectedDate);
    scheduledAt.setHours(hour, parseInt(minuteStr, 10), 0, 0);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: 'WA',
          zipCode: form.zipCode,
          serviceId: form.serviceId,
          scheduledAt: scheduledAt.toISOString(),
          description: form.notes || '',
          priority: 'NORMAL'
        }),
      });

      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.error || 'Something went wrong.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4 bg-white">
        <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Request Sent!</h1>
        <p className="text-lg text-gray-600 max-w-md">
          Thank you, {form.firstName}. We've received your request and will call you at {form.phone} shortly to confirm your appointment for {time} on {(Array.isArray(date) ? date[0] : date)?.toLocaleDateString()}.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider mb-4" style={{backgroundColor: '#e0f7ff', color: '#00A3D9'}}>
            <Clock className="w-4 h-4" />
            Online Booking
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Schedule Your Service</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select a date and time that works for you. We'll confirm your appointment by phone.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar and Time */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg transition-colors hover:border-[#00A3D9]">
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-4 uppercase">1. Select Date</h3>
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  minDate={new Date()}
                  tileDisabled={({ date }) => {
                    // Disable weekends (Saturday = 6, Sunday = 0)
                    const day = date.getDay();
                    return day === 0 || day === 6;
                  }}
                  className="custom-calendar"
                />
              </div>
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg transition-colors hover:border-[#00A3D9]">
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-4 uppercase">2. Select Time</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableSlots.map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`time-slot text-sm font-semibold px-3 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                        time === t
                          ? 'text-white shadow-lg scale-105'
                          : 'bg-white border-slate-300'
                      }`}
                      style={time === t ? {backgroundColor: '#00A3D9', borderColor: '#00A3D9'} : {}}
                    >
                      <Clock size={14} />
                      {t}
                    </button>
                  ))}
                  {availableSlots.length === 0 && (
                    <p className="col-span-full text-center text-gray-500 py-8">
                      No available slots for this day. Please select another date.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg transition-colors hover:border-[#00A3D9]">
              <h3 className="font-heading font-bold text-slate-900 text-xl mb-4 uppercase">3. Your Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required placeholder="First Name" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required placeholder="Last Name" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email" required placeholder="Email" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} type="tel" required placeholder="Phone" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required placeholder="Address" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required placeholder="City" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  <input value={form.zipCode} onChange={e => setForm({ ...form, zipCode: e.target.value })} required placeholder="ZIP Code" className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <select value={form.serviceId} onChange={e => setForm({ ...form, serviceId: e.target.value })} required className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none appearance-none">
                  <option value="" disabled>Select Service Type</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </select>
                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe your issue (optional)" className="w-full bg-white px-4 py-3 h-24 resize-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                
                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg p-3 flex items-center gap-3">
                    <AlertTriangle size={18} />
                    <p>{error}</p>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting || !time || !form.firstName || !form.phone} className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all text-lg flex items-center justify-center shadow-lg hover:shadow-xl" style={{backgroundColor: '#00A3D9'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0082af'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00A3D9'}>
                  {isSubmitting ? <><Loader2 className="animate-spin mr-2" /> Submitting...</> : 'Confirm Booking'}
                </button>
                <p className="text-xs text-muted-foreground text-center">We will call you to confirm your appointment.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


