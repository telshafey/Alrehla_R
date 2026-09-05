import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, PenTool, Search, Edit, Gift, Star, ArrowLeft } from 'lucide-react';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';

const EnhaLakPage = () => {
    return (
        <div className="bg-background animate-fadeIn min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-background py-20 sm:py-24 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
                        <Sparkles className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                        قصة فريدة... بطلها طفلك
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
                        قصص ومنتجات مخصصة تجعل الطفل جزءًا من الحكاية، وتتيح للأسرة اختيار موضوع أو قيمة تريد أن تكون حاضرة فيها.
                    </p>
                    <Link to="/enha-lak/custom">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-transform hover:scale-105">
                            اختر تجربتك
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Selection Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-4">اختر الطريقة التي تناسبك</h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        هل تريد قصة أو تجربة تُصنع لطفلك من البداية، أم قصة جاهزة مع غلاف مخصص؟
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <Card className="hover:shadow-lg transition-shadow border-indigo-100">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-900">أنت البطل هنا (قصص مخصصة)</h3>
                                <p className="text-muted-foreground mb-8 min-h-[80px]">
                                    نصنع قصة أو تجربة مخصصة لطفلك من البداية. اختر المنتج، ثم شاركنا المعلومات التي يحتاجها فريقنا للتخصيص.
                                </p>
                                <Link to="/enha-lak/custom">
                                    <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                                        اكتشف التجارب المخصصة
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow border-blue-100">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-blue-900">المكتبة العامة (قصص جاهزة)</h3>
                                <p className="text-muted-foreground mb-8 min-h-[80px]">
                                    اختر قصة جاهزة من المكتبة وخصص غلافها فقط. يبقى محتوى القصة كما هو.
                                </p>
                                <Link to="/enha-lak/library">
                                    <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                                        تصفح المكتبة
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Power of Story Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">لماذا يحب الأطفال القصة الأقرب إليهم؟</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            عندما يدخل اسم الطفل وصورته واهتماماته في الحكاية، تصبح التجربة أكثر قربًا وشخصية.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 flex items-center justify-center rounded-full mb-6">
                                <Star size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">حضور الطفل في الحكاية</h3>
                            <p className="text-muted-foreground">
                                يرى اسمه وصورته وتفاصيله داخل قصة صُنعت له، فيشعر أن الحكاية تخصه فعلًا.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-6">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">قراءة أقرب</h3>
                            <p className="text-muted-foreground">
                                التخصيص يجعل القصة أكثر اتصالًا بعالم الطفل، وقد يشجعه على العودة إليها ومشاركتها.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full mb-6">
                                <PenTool size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">القيمة داخل الحكاية</h3>
                            <p className="text-muted-foreground">
                                يمكن أن تدور القصة حول قيمة أو موقف تختاره الأسرة، فتظهر داخل الأحداث بدل تقديمها كوعظ مباشر.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Products Highlights Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-12">منتجات «إنها لك»</h2>
                    <div className="space-y-12">
                        {/* Custom Story Product */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-indigo-50/50 p-8 rounded-3xl border border-indigo-50">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-indigo-900 mb-4">أنت البطل هنا (تجارب مخصصة)</h3>
                                <p className="text-lg text-indigo-800/80 mb-6 leading-relaxed">
                                    قصة تُبنى خصيصاً من البداية حول اسم الطفل وصورته واهتماماته. يمكنك اختيار موضوع القصة أو القيمة التي تدور حولها الأحداث، لنصنع كتاباً فريداً بطلُه طفلك.
                                </p>
                                <Link to="/enha-lak/custom">
                                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                        تصفح القصص المخصصة
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Library Product */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-emerald-50/50 p-8 rounded-3xl border border-emerald-50">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4">المكتبة العامة (قصص جاهزة)</h3>
                                <p className="text-lg text-emerald-800/80 mb-6 leading-relaxed">
                                    قصص جاهزة مكتوبة مسبقاً، يمكنك اختيار ما يناسب طفلك منها وتخصيص الغلاف فقط ليحمل اسمه أو صورته، بينما يظل محتوى القصة ثابتاً كما هو.
                                </p>
                                <Link to="/enha-lak/library">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                        تصفح المكتبة
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Subscription Box Product */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50/50 p-8 rounded-3xl border border-blue-50">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">صندوق الرحلة</h3>
                                <p className="text-lg text-blue-800/80 mb-6 leading-relaxed">
                                    صندوق شهري يجمع قصة ومحتوى وأنشطة وهدايا مختارة في تجربة تتجدد مع كل إرسال، لاكتشاف عالم جديد كل شهر.
                                </p>
                                <Link to="/enha-lak/subscription">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                        اكتشف الصندوق
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* How to order (Steps) */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-16">كيف تطلب القصة المخصصة؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
                            <h3 className="text-lg font-bold mb-2">شاركنا البيانات الأساسية</h3>
                            <p className="text-slate-400 text-sm">الاسم والعمر والصورة والمعلومات المطلوبة للتخصيص.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
                            <h3 className="text-lg font-bold mb-2">اختر الموضوع أو القيمة</h3>
                            <p className="text-slate-400 text-sm">من الخيارات المتاحة في المنتج.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
                            <h3 className="text-lg font-bold mb-2">نصنع القصة</h3>
                            <p className="text-slate-400 text-sm">يبدأ فريقنا إعداد المحتوى والتصميم بعد تأكيد الطلب.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">4</div>
                            <h3 className="text-lg font-bold mb-2">استلم طلبك</h3>
                            <p className="text-slate-400 text-sm">خلال المدة التشغيلية المعتمدة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-indigo-100 to-blue-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 mb-8">
                        جاهز لصناعة قصة تخص طفلك؟
                    </h2>
                    <Link to="/enha-lak/custom">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg text-lg px-8 py-6 h-auto">
                            ابدأ التجربة المخصصة
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EnhaLakPage;
