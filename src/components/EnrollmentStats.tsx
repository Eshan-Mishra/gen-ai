import React from 'react';
import { Users } from 'lucide-react';

interface EnrollmentStatsProps {
  studentCount: number;
}

export default function EnrollmentStats({ studentCount }: EnrollmentStatsProps) {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <Users className="w-5 h-5" />
      <span>{studentCount.toLocaleString()} students enrolled</span>
    </div>
  );
}