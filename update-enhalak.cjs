const fs = require('fs');
const path = 'src/features/enha-lak/templates/EnhaLakPage.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace Products Highlights Section with "أنت البطل هنا" vs "المكتبة"
const newProductsSection = `
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
`;

// use regex to replace from {/* Products Highlights Section */} to {/* How to order (Steps) */}
const regex = /\{\/\* Products Highlights Section \*\/\}.*?\{\/\* How to order \(Steps\) \*\/\}/s;
content = content.replace(regex, newProductsSection + '            {/* How to order (Steps) */}');

// Remove Testimonials section as requested earlier "وأي شهادات غير حقيقية."
const testRegex = /\{\/\* Testimonials \*\/\}.*?\{\/\* Final CTA \*\/\}/s;
content = content.replace(testRegex, '{/* Final CTA */}');

fs.writeFileSync(path, content);
