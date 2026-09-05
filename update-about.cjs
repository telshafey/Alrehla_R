const fs = require('fs');
const path = 'src/features/about/templates/AboutPage.tsx';

let content = fs.readFileSync(path, 'utf8');

const newValues = `
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
`;

content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">.*?<\/div>\n                <\/div>\n            <\/section>/s, newValues + '                </div>\n            </section>');

fs.writeFileSync(path, content);
