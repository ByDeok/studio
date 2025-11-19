import { format, subDays } from 'date-fns';

// User Profile
export interface User {
  uid: string;
  name: string; // "김철수"
  age: number;
  conditions: string[]; // ["고혈압", "당뇨"]
  role: 'senior' | 'caregiver';
  connectedDevices: string[]; // ["Galaxy Watch 6", "Omron BP"]
}

// Daily Mission
export interface Mission {
  id: string;
  title: string; // "아침 약 드시기"
  isCompleted: boolean;
  type: 'medication' | 'exercise' | 'measure';
  date: string; // "2025-11-20"
}

// Health Metrics (Report)
export interface HealthMetric {
  date: string;
  systolic?: number; // 수축기 혈압
  diastolic?: number; // 이완기 혈압
  glucose?: number; // 혈당
  steps?: number; // 걸음 수
  source: string; // "manual" | "device"
}

// Mock Data Instances
export const mockUser: User = {
    uid: 'user123',
    name: '김철수',
    age: 72,
    conditions: ['고혈압', '당뇨'],
    role: 'senior',
    connectedDevices: [],
}

export const mockMissions: Mission[] = [
    { id: 'mission1', title: '아침 약 드시기', isCompleted: false, type: 'medication', date: format(new Date(), 'yyyy-MM-dd') },
    { id: 'mission2', title: '혈압 측정하기', isCompleted: false, type: 'measure', date: format(new Date(), 'yyyy-MM-dd') },
    { id: 'mission3', title: '30분 걷기', isCompleted: false, type: 'exercise', date: format(new Date(), 'yyyy-MM-dd') },
];

export const mockHealthMetrics: HealthMetric[] = Array.from({ length: 90 }).map((_, i) => {
    const date = subDays(new Date(), 90 - i - 1);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    // Simulate slightly higher/lower readings on weekends or randomly
    const randomFactor = Math.random() - 0.5; // -0.5 to 0.5

    return {
        date: format(date, 'yyyy-MM-dd'),
        systolic: Math.round(125 + randomFactor * (isWeekend ? 30 : 20)), // 105-145
        diastolic: Math.round(80 + randomFactor * (isWeekend ? 20 : 15)), // 65-95
        glucose: Math.round(100 + randomFactor * (isWeekend ? 40 : 30)), // 80-120
        source: Math.random() > 0.3 ? 'device' : 'manual'
    };
});

// Add some specific out-of-range data
mockHealthMetrics[20].systolic = 145;
mockHealthMetrics[21].diastolic = 58;
mockHealthMetrics[50].systolic = 150;
mockHealthMetrics[55].glucose = 130;
mockHealthMetrics[80].glucose = 65;
mockHealthMetrics[85].systolic = 88;
