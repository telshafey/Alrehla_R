import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InstructorStudentCard: React.FC<{ student: any, journeys: any[] }> = ({ student, journeys }) => {
    return (
        <div className="flex flex-col p-4 border rounded-lg bg-white hover:shadow-md transition">
            <h3 className="font-bold text-lg">{student.name || 'طالب'}</h3>
            <p className="text-sm text-gray-500 mb-4">{journeys.length} رحلة نشطة</p>
            
            <div className="flex justify-between items-center text-sm mb-4 bg-gray-50 p-2 rounded">
                <span>التقدم الإجمالي</span>
                <span className="font-bold">{journeys[0]?.progress || 0}%</span>
            </div>
            
            <Link to={`/student/${student.id}`}>
                <Button className="w-full" variant="outline" size="sm">تفاصيل الطالب</Button>
            </Link>
        </div>
    );
};
export default InstructorStudentCard;
