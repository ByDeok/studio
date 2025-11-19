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
