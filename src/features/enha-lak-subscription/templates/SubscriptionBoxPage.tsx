import React from 'react';
import { PackageOpen, CheckCircle, Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SUBSCRIPTION_PLANS = [
    {
        id: 'monthly',
        title: 'شهري',
        price: '450',
        duration: '1 شهر من المرح والتعلم',
        features: [
            'صندوق واحد كل شهر',
            'قصة تفاعلية جديدة',
            'أدوات نشاط مصاحبة',
            'ملصقات حصرية'
        ],
        isPopular: false
    },
    {
        id: 'quarterly',
        title: 'ربع سنوي',
        price: '1200',
        duration: '3 أشهر من المرح والتعلم',
        features: [
            'صندوق كل شهر (إجمالي 3)',
            'توفير 150 ج.م',
            'مفاجأة خاصة في الصندوق الأول',
            'شحن مجاني للشهر الأول'
        ],
        isPopular: true
    },
    {
        id: 'semi-annual',
        title: 'نصف سنوي',
        price: '2100',
        duration: '6 أشهر من المرح والتعلم',
        features: [
            'صندوق كل شهر (إجمالي 6)',
            'توفير 600 ج.م',
            'مفاجآت خاصة كل شهرين',
            'شحن مجاني طوال فترة الاشتراك'
        ],
        isPopular: false
    }
];

const SubscriptionBoxPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-muted/30 py-20 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <PackageOpen size={32} />
                    </div>
                    <p className="text-sm font-bold tracking-wide text-purple-600 mb-2">«إنها لك»</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">صندوق الرحلة</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        اشترك الآن ليصل لطفلك صندوق شهري مليء بالقصص والأنشطة والمفاجآت التي تنمي خياله.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SUBSCRIPTION_PLANS.map((plan) => (
                        <Card 
                            key={plan.id} 
                            className={`relative h-full flex flex-col ${plan.isPopular ? 'border-purple-500 shadow-xl scale-105' : 'border-slate-100 shadow-md'}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    الأكثر طلباً
                                </div>
                            )}
                            <CardHeader className="text-center pt-8">
                                <CardTitle className="text-2xl font-bold mb-2">{plan.title}</CardTitle>
                                <p className="text-muted-foreground text-sm">{plan.duration}</p>
                            </CardHeader>
                            <CardContent className="flex-grow text-center">
                                <div className="my-6">
                                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground mr-2">ج.م</span>
                                </div>
                                <ul className="space-y-4 text-right">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-4 pb-8 px-6">
                                <Button size="lg" className={`w-full ${plan.isPopular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'variant-outline border-purple-200 text-purple-700 hover:bg-purple-50'}`}>
                                    اشترك الآن
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionBoxPage;
