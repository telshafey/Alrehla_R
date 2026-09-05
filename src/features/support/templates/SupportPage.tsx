import React, { useState } from 'react';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SupportPage = () => {
    const [selectedTab, setSelectedTab] = useState('general');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.');
    };

    return (
        <div className="min-h-screen bg-muted/30 py-20 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle size={32} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-foreground mb-4">كيف يمكننا مساعدتك؟</h1>
                    <p className="text-lg text-muted-foreground">
                        نحن هنا للإجابة على استفساراتك وحل أي مشكلة قد تواجهك.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* FAQs */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">الأسئلة الشائعة</h2>
                        
                        <Tabs defaultValue="general" className="w-full" onValueChange={setSelectedTab}>
                            <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-6 justify-start">
                                <TabsTrigger value="general" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white">عامة</TabsTrigger>
                                <TabsTrigger value="enha-lak" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white">«إنها لك»</TabsTrigger>
                                <TabsTrigger value="bedayat" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white">«بداية الرحلة»</TabsTrigger>
                                <TabsTrigger value="partners" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white">الشركاء</TabsTrigger>
                            </TabsList>

                            <TabsContent value="general" className="space-y-4 animate-fadeIn">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-indigo-900">متى يمكنني التواصل مع الدعم الفني؟</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        فريقنا متاح عبر محادثة واتساب المباشرة من الأحد إلى الخميس (9 صباحاً - 5 مساءً).
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-indigo-900">كيف أعدل على بيانات طلب تم دفعه؟</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        يمكنك تعديل البيانات خلال 24 ساعة من إتمام الطلب عن طريق التواصل معنا.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="enha-lak" className="space-y-4 animate-fadeIn">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-indigo-900">كم يستغرق وصول القصة المخصصة؟</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        يستغرق تجهيز وطباعة القصة المخصصة من 7 إلى 10 أيام عمل، وتختلف مدة الشحن حسب موقعك الجغرافي.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="bedayat" className="space-y-4 animate-fadeIn">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-indigo-900">هل يمكنني اختيار مدرب محدد لابني؟</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        نعم، عند حجز جلسة في برنامج «بداية الرحلة»، يمكنك تصفح ملفات المدربين واختيار المدرب الأنسب لاحتياجات طفلك.
                                    </p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="partners" className="space-y-4 animate-fadeIn">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-indigo-900">كيف يمكن لمدارسنا التعاون معكم؟</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        نرحب بالتعاون مع المدارس والمؤسسات التعليمية. يرجى ملء نموذج التواصل وسيقوم فريق الشراكات بالرد عليكم.
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                            <div className="bg-blue-600 text-white p-3 rounded-full shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">محادثة واتساب فورية</h3>
                                <p className="text-slate-600 mb-3 text-sm">متاحون من الأحد للخميس (9 صباحاً - 5 مساءً)</p>
                                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100">
                                    تواصل عبر واتساب
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900">أرسل لنا رسالة</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">الاسم</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50" placeholder="اسمك الكريم" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">البريد الإلكتروني</label>
                                        <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50" placeholder="البريد للرد عليك" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">نوع الاستفسار</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50">
                                            <option>استفسار عام</option>
                                            <option>«إنها لك» (القصص والمنتجات)</option>
                                            <option>«بداية الرحلة» (برنامج الكتابة)</option>
                                            <option>شراكات ومؤسسات</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">التفاصيل</label>
                                        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 resize-none" placeholder="اكتب رسالتك هنا..."></textarea>
                                    </div>
                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                                        <MessageCircle className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                                        إرسال الرسالة
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
