const fs = require('fs');
const path = 'src/features/creative-writing-main/templates/CreativeWritingPage.tsx';

const content = `import React from 'react';
import { Link } from 'react-router-dom';
import { usePublicData } from '../../../hooks/queries/public/usePublicDataQuery';
import PageLoader from '@/components/ui/page-loader';
import { Button } from '@/components/ui/button';
import { Edit3, User, BookOpen, CheckCircle, Sparkles, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CreativeWritingPage: React.FC = () => {
    const { data, isLoading } = usePublicData();
    
    if (isLoading) return <PageLoader />;
    
    return (
        <div className="bg-background animate-fadeIn min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-background py-20 sm:py-24 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
                        <Edit3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                        «بداية الرحلة»... اكتشف صوتك من خلال الكتابة
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                        برنامج كتابة فردي يرافق المشارك (6–20 سنة) في رحلة لتطوير أدواته والتعبير عن أفكاره، مع التركيز على بناء المهارة والثقة وتنمية الصوت الخاص.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link to="/booking">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105">
                                احجز جلستك الأولى
                            </Button>
                        </Link>
                        <Link to="/instructors">
                            <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 shadow-sm transition-transform hover:scale-105">
                                تعرف على المدربين
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-md bg-slate-50/50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-6">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">رحلة فردية مخصصة</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    المسار يُصمم ليناسب عمر المشارك ومستواه، ويُبنى حول اهتماماته ليكون التعلم أمتع وأكثر ارتباطاً بعالمه.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-none shadow-md bg-slate-50/50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-full mb-6">
                                    <User size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">مدربون متخصصون</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    كتاب وأدباء متمرسون يرافقون المشارك خطوة بخطوة، ويقدمون توجيهاً يبني المهارة بلطف دون المساس بفرادة صوته.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-none shadow-md bg-slate-50/50 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full mb-6">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">إنتاج حقيقي</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    تنتهي كل مرحلة بمشروع كتابي يعكس تطور المشارك ويعزز ثقته بصوته وقدرته على إنتاج نص متماسك.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How it works (Steps) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-16">كيف تسير رحلة الكتابة؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="relative text-center z-10">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-900/50">1</div>
                            <h3 className="text-xl font-bold mb-3">تقييم الانطلاق</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">جلسة أولى للتعرف على المشارك، مستواه، واهتماماته.</p>
                        </div>
                        <div className="relative text-center z-10">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-900/50">2</div>
                            <h3 className="text-xl font-bold mb-3">تصميم المسار</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">إعداد خطة كتابة فردية تناسب أهداف المشارك وتستجيب لتطوره.</p>
                        </div>
                        <div className="relative text-center z-10">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-900/50">3</div>
                            <h3 className="text-xl font-bold mb-3">الجلسات الفردية</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">لقاءات دورية مع المدرب للتوجيه والممارسة والمراجعة المشتركة.</p>
                        </div>
                        <div className="relative text-center z-10">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-900/50">4</div>
                            <h3 className="text-xl font-bold mb-3">المشروع الختامي</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">إنجاز عمل كتابي متكامل (قصة، مقال، نصوص) يتوج الرحلة.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeWritingPage;
`
fs.writeFileSync(path, content);
