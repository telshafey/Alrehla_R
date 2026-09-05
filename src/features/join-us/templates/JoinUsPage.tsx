import React from 'react';
import { Send, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const JoinUsPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    };

    return (
        <div className="min-h-screen bg-muted/30 py-20 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-foreground mb-4">كن جزءًا من الرحلة</h1>
                    <p className="text-lg text-muted-foreground">
                        نبحث دائمًا عن مبدعين يشاركوننا الشغف بالقصة والكتابة.
                    </p>
                </div>

                <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">الاسم الكامل</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50" placeholder="أدخل اسمك" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">البريد الإلكتروني</label>
                                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50" placeholder="example@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">الاهتمام / الدور</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50">
                                    <option>مدرب كتابة إبداعية</option>
                                    <option>رسام قصص أطفال</option>
                                    <option>معلق صوتي</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">رابط نماذج الأعمال (Portfolio)</label>
                                <input type="url" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50" placeholder="https://" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">لماذا تريد الانضمام للرحلة؟</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 resize-none" placeholder="حدثنا عن شغفك..."></textarea>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                                <Send className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                                إرسال الطلب
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default JoinUsPage;
