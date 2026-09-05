const fs = require('fs');
const path = 'src/features/creative-writing-packages/templates/CreativeWritingPackagesPage.tsx';

const content = `import React from 'react';
import { CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MOCK_PACKAGES = [
    {
        id: '1',
        title: 'جلسة التقييم',
        description: 'جلسة واحدة للتعرف على المشارك وتقييم مستواه واهتماماته وبناء خطة عمل أولية.',
        price: 200,
        sessions: 1,
        features: [
            'تقييم مستوى الكتابة الحالي',
            'التعرف على اهتمامات المشارك',
            'تحديد أهداف الرحلة',
            'خطة مقترحة للمسار'
        ],
        isPopular: false
    },
    {
        id: '2',
        title: 'الباقة الأساسية',
        description: '4 جلسات فردية تغطي أساسيات الكتابة الإبداعية وتساعد المشارك على الانطلاق في التعبير عن أفكاره.',
        price: 800,
        sessions: 4,
        features: [
            '4 جلسات فردية (45 دقيقة للجلسة)',
            'توجيه مستمر ومتابعة',
            'مشاريع كتابية قصيرة',
            'تقييم ختامي للمرحلة'
        ],
        isPopular: true
    },
    {
        id: '3',
        title: 'الباقة المتقدمة',
        description: '8 جلسات فردية متعمقة لتطوير مهارات الكتابة وإنتاج نصوص متكاملة تعكس التطور.',
        price: 1500,
        sessions: 8,
        features: [
            '8 جلسات فردية (45 دقيقة للجلسة)',
            'التركيز على بناء الشخصيات والحبكة',
            'إشراف على مشروع كتابي متكامل',
            'تقرير أداء مفصل'
        ],
        isPopular: false
    }
];

const CreativeWritingPackagesPage: React.FC = () => {
    return (
        <div className="bg-muted/30 min-h-screen py-20 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-wide text-blue-600 mb-2">بداية الرحلة</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">اختر باقتك</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        باقات مصممة لتناسب احتياجات طفلك وتضمن تطوره المستمر في الكتابة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_PACKAGES.map((pkg) => (
                        <Card 
                            key={pkg.id} 
                            className={\`relative h-full flex flex-col \${pkg.isPopular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-100 shadow-md'}\`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    الأكثر طلباً
                                </div>
                            )}
                            <CardHeader className="text-center pt-8">
                                <CardTitle className="text-2xl font-bold mb-2">{pkg.title}</CardTitle>
                                <p className="text-muted-foreground text-sm">{pkg.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow text-center">
                                <div className="my-6">
                                    <span className="text-4xl font-extrabold text-foreground">{pkg.price}</span>
                                    <span className="text-muted-foreground mr-2">ج.م</span>
                                </div>
                                <div className="bg-slate-50 py-2 px-4 rounded-lg inline-block mb-8 text-sm font-semibold text-slate-700">
                                    {pkg.sessions} جلسة فردية
                                </div>
                                <ul className="space-y-4 text-right">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8 px-6">
                                <Link to="/booking" className="w-full">
                                    <Button size="lg" className={\`w-full \${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'variant-outline'}\`}>
                                        احجز جلستك الآن
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeWritingPackagesPage;
`
fs.writeFileSync(path, content);
