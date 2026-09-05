import React from 'react';
import { Users, FileText, CheckCircle, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AdminDashboardPage: React.FC = () => {
    return (
        <div className="animate-fadeIn space-y-8 p-8">
            <h1 className="text-3xl font-extrabold text-foreground">لوحة تحكم الإدارة</h1>
            <p className="text-muted-foreground">مرحباً بك في لوحة تحكم المنصة.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">الطلاب النشطون</CardTitle>
                        <Users className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground mt-1">+12 هذا الأسبوع</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">الطلبات المعلقة</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground mt-1">بحاجة إلى مراجعة</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">الجلسات المكتملة</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">430</div>
                        <p className="text-xs text-muted-foreground mt-1">+45 هذا الشهر</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">المقالات</CardTitle>
                        <FileText className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground mt-1">منشورة</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>أحدث الطلبات (الإجراءات المطلوبة)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-bold">طلب حجز رحلة كاتب مبدع</p>
                                        <p className="text-sm text-muted-foreground">عن طريق: أحمد يوسف</p>
                                    </div>
                                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">قيد المراجعة</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>النشاط الأخير</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-bold">قام المدرب محمد بتحديث التقييم لـ يوسف</p>
                                        <p className="text-xs text-muted-foreground">منذ ساعتين</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default AdminDashboardPage;
