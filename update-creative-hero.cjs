const fs = require('fs');
const path = 'src/features/creative-writing-main/templates/CreativeWritingPage.tsx';

let content = fs.readFileSync(path, 'utf8');

content = content.replace(
    '«بداية الرحلة»... اكتشف صوتك من خلال الكتابة',
    'رحلة كتابة، لا درس كتابة'
);

// We also should add the philosophy section.
const philosophySection = `
            {/* Philosophy Section */}
            <section className="py-20 bg-blue-50/50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">فلسفتنا في «بداية الرحلة»</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        نحن لا نلقّن قواعد جامدة، بل نوفر مساحة آمنة للمحاولة والخطأ واكتشاف الذات. نؤمن أن كل مشارك يمتلك صوتاً فريداً، ودورنا هو مساعدته على صقل أدواته للتعبير عن هذا الصوت بثقة وحرية، بعيداً عن قوالب التعبير التقليدية.
                    </p>
                </div>
            </section>
`;

if (!content.includes('فلسفتنا في')) {
    content = content.replace(
        '            {/* Why Choose Us Section */}',
        philosophySection + '\n            {/* Why Choose Us Section */}'
    );
}

fs.writeFileSync(path, content);
