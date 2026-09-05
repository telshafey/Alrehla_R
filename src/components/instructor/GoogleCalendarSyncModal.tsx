import React from 'react';
import Modal from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

const GoogleCalendarSyncModal: React.FC<{ isOpen: boolean, onClose: () => void, session: any }> = ({ isOpen, onClose, session }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="مزامنة التقويم">
            <div className="p-4 text-center">
                <p>ميزة المزامنة مع جوجل متاحة في النسخة الكاملة.</p>
                <Button className="mt-4" onClick={onClose}>إغلاق</Button>
            </div>
        </Modal>
    );
};
export default GoogleCalendarSyncModal;
