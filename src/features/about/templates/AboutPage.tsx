import React, { useState } from 'react';
import { usePublicData } from '../../../hooks/queries/public/usePublicDataQuery';
import PageLoader from '@/components/ui/page-loader';
import { BookOpen, Users, Star, Target, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
    const { data, isLoading } = usePublicData();
    const [imageError, setImageError] = useState(false);
    
    if (isLoading) return <PageLoader />;
    
    const content = data?.siteContent as any;
    
    return (
        <div className="bg-background animate-fadeIn">
            <section className="relative py-24 sm:py-32 text-center text-white bg-primary">
                <div className="container relative z-10 px-4 mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                        {content?.about_hero_title || 'رحلتنا: لماذا وُجدت «الرحلة»؟'}
                    </h1>
                    <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                        {content?.about_hero_subtitle || 'نؤمن أن التجربة تصبح أكثر معنى عندما يكون صاحبها حاضرًا فيها بصوته واختياراته.'}
                    </p>
                </div>
            </section>
            
            <section className="py-20 bg-muted/30">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Target className="text-blue-600" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">الرسالة</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    نصمم قصصًا وتجارب تربوية عربية تجعل المشارك أقرب إلى حكايته وصوته، وتحول التلقي إلى تجربة أكثر شخصية ووعيًا.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Star className="text-purple-600" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">الرؤية</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    أن تكون «الرحلة» منصة عربية موثوقة للقصص المخصصة وتجارب الكتابة التي تحترم الإنسان وهويته وصوته.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">القيم التي تجمع مشروعاتنا</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="text-center p-6">
                            <Shield className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
                            <h3 className="text-xl font-bold mb-3">الأصالة</h3>
                            <p className="text-muted-foreground text-sm">محتوى عربي أصيل يحترم اللغة والسياق والهوية.</p>
                        </div>
                        <div className="text-center p-6">
                            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                            <h3 className="text-xl font-bold mb-3">الإبداع</h3>
                            <p className="text-muted-foreground text-sm">نبحث عن صيغ جديدة تجعل المحتوى أقرب وأكثر حضورًا في تجربة صاحبه.</p>
                        </div>
                        <div className="text-center p-6">
                            <Target className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <h3 className="text-xl font-bold mb-3">الجودة</h3>
                            <p className="text-muted-foreground text-sm">نراجع ما نقدمه من حيث المحتوى والتجربة والتنفيذ، لا الشكل وحده.</p>
                        </div>
                        <div className="text-center p-6">
                            <Users className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                            <h3 className="text-xl font-bold mb-3">التخصيص</h3>
                            <p className="text-muted-foreground text-sm">نؤمن بأن كل تجربة يجب أن تُعبر عن صاحبها وتشبهه.</p>
                        </div>
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
                            <h3 className="text-xl font-bold mb-3">الشمولية</h3>
                            <p className="text-muted-foreground text-sm">نتعامل مع اختلاف الأعمار والخلفيات باحترام وجدية.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
