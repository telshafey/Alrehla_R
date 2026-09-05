import React from 'react';
import { BookOpen, Star, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentPortfolioPage = () => {
    return (
        <div className="bg-muted/30 py-12 min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-primary mb-4">معرض إبداعات الطالب</h1>
                    <p className="text-lg text-muted-foreground">مساحة مخصصة للاحتفال بقصص وكتابات أطفالنا المبدعين.</p>
                </header>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-blue-50">
                            <CardTitle className="text-blue-700 flex justify-between items-center">
                                مغامرة في الفضاء
                                <Trophy className="w-5 h-5 text-yellow-500" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-4">قصة قصيرة خيالية تدور أحداثها حول رحلة مدرسية إلى المريخ واكتشاف كائنات فضائية لطيفة.</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>الكاتب: يوسف (10 سنوات)</span>
                                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-current"/> مميز</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="bg-purple-50">
                            <CardTitle className="text-purple-700 flex justify-between items-center">
                                الشجرة المتحدثة
                                <BookOpen className="w-5 h-5 text-purple-500" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-4">قصة عن الطبيعة تحكي عن شجرة قديمة في حديقة المنزل تبدأ في إعطاء نصائح للأطفال.</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>الكاتبة: ليلى (8 سنوات)</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default StudentPortfolioPage;
