import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScheduledSession } from '@/lib/database.types';
import Modal from '@/components/ui/modal';

interface RequestSessionChangeModalProps {
    isOpen: boolean;
    onClose: () => void;
    session: ScheduledSession | null;
    childName?: string | null;
}

const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const hour = (i + 8).toString().padStart(2, '0');
    return `${hour}:00`;
});

const RequestSessionChangeModal: React.FC<RequestSessionChangeModalProps> = ({ isOpen, onClose, session, childName }) => {
    const [reason, setReason] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClose = () => {
        setReason('');
        setNewDate('');
        setNewTime('');
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            handleClose();
        }, 1000);
    };

    if (!session) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title="طلب تغيير موعد جلسة"
            footer={
                <>
                    <Button type="button" variant="ghost" onClick={handleClose} disabled={isSubmitting}>إلغاء</Button>
                    <Button type="submit" form="request-change-form" disabled={isSubmitting} className="gap-2">
                        <Send size={16}/> إرسال الطلب للإدارة
                    </Button>
                </>
            }
        >
        <form
            id="request-change-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
        >
            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 mb-4">
                <p>أنت تطلب تعديل الجلسة الحالية للطالب: <span className="font-bold">{childName}</span></p>
                <p className="text-xs mt-1 opacity-80">الموعد الحالي: {new Date(session.session_date).toLocaleString('ar-EG')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">الموعد الجديد المقترح</label>
                    <input type="date" className="border rounded-md px-3 py-2 text-sm" value={newDate} onChange={e => setNewDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">التوقيت</label>
                    <select className="border rounded-md px-3 py-2 text-sm" value={newTime} onChange={e => setNewTime(e.target.value)} required>
                        <option value="">-- اختر --</option>
                        {timeSlots.map((time) => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">سبب التغيير (إلزامي)</label>
                <textarea 
                    className="border rounded-md px-3 py-2 text-sm" 
                    placeholder="يرجى توضيح سبب طلب التغيير بالتفصيل..." 
                    required rows={3}
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                />
            </div>
            
            <div className="text-xs text-muted-foreground bg-gray-50 p-2 rounded">
                <p>ملاحظة: يجب أن يكون الموعد المقترح <strong>خارج أوقات جدولك الأسبوعي الثابت</strong> لتجنب التعارض مع الحجوزات التلقائية للعملاء الآخرين.</p>
            </div>
        </form>
        </Modal>
    );
};
export default RequestSessionChangeModal;
