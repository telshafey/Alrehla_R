const fs = require('fs');
const path = 'src/features/creative-writing-packages/templates/CreativeWritingPackagesPage.tsx';

let content = fs.readFileSync(path, 'utf8');

const additionalSection = `
                {/* Independent Services Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-foreground mb-4">الخدمات الإبداعية المستقلة</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            خدمات منفصلة لا تتطلب الاشتراك في باقة، مصممة لتلبية احتياجات محددة.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">مراجعة قصة</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    مراجعة شاملة لقصة كتبها طفلك، مع تقديم ملاحظات بناءة حول الحبكة والشخصيات واللغة.
                                </p>
                                <div className="font-bold text-xl text-blue-600 mb-4">150 ج.م</div>
                                <Link to="/booking">
                                    <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">اطلب الخدمة</Button>
                                </Link>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">جلسة عصف ذهني</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    جلسة واحدة مدتها 45 دقيقة لمساعدة طفلك على توليد أفكار جديدة لقصته القادمة وتجاوز قفلة الكاتب.
                                </p>
                                <div className="font-bold text-xl text-purple-600 mb-4">200 ج.م</div>
                                <Link to="/booking">
                                    <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">اطلب الخدمة</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">تقرير كتابي مفصل</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    تحليل مكتوب لنقاط القوة ومجالات التطور في أسلوب طفلك الكتابي بناءً على نصوصه السابقة.
                                </p>
                                <div className="font-bold text-xl text-emerald-600 mb-4">250 ج.م</div>
                                <Link to="/booking">
                                    <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">اطلب الخدمة</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
`;

if (!content.includes('Independent Services Section')) {
    content = content.replace(
        '                </div>\n            </div>\n        </div>',
        '                </div>\n' + additionalSection + '\n            </div>\n        </div>'
    );
    fs.writeFileSync(path, content);
}
