const fs = require('fs');
const path = 'src/features/portal/templates/PortalPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove HowItWorksStep section entirely
content = content.replace(/\{content\?.showStepsSection !== false && \([\s\S]*?\}\)/g, '');

// Fix import if HowItWorksStep is now unused
content = content.replace(/import HowItWorksStep from '\.\.\/components\/HowItWorksStep';\n?/g, '');

// Update Subtitle of Projects
content = content.replace(/بوابتان لعالم من الإبداع والنمو/g, 'مشروعان مختلفان، بحسب ما تبحث عنه الآن.');

// Update Enha Lak Card Description
content = content.replace(/قصص مخصصة ومنتجات تربوية فريدة تجعل طفلك بطلاً\./g, 'قصص ومنتجات تُخصص للطفل، أو قصص جاهزة يمكن تخصيص غلافها.');
content = content.replace(/'اكتشف القصص'/g, "'اكتشف «إنها لك»'");

// Update Creative Writing Card Description
content = content.replace(/'برنامج متكامل لتنمية مهارات الكتابة الإبداعية\.'/g, "'برنامج كتابة فردي للأعمار 6–20 يساعد المشارك على تنمية أدواته وصوته من خلال الكتابة.'");
content = content.replace(/'ابدأ الرحلة'/g, "'اكتشف «بداية الرحلة»'");

// Update About Section Title & Subtitle & Button
content = content.replace(/قصتنا: من فكرة إلى رحلة/g, 'تعرّف إلى رحلتنا');
content = content.replace(/تعرف علينا أكثر/g, 'تعرّف إلى رحلتنا');
content = content.replace(/نحن منصة تسعى لتمكين الأطفال من خلال القصص والكتابة\.\.\./g, '«الرحلة» منصة عربية تجمع قصصاً وتجارب تربوية تضع صاحب الرحلة في قلب التجربة.');

// Update Testimonials Section Title
content = content.replace(/ماذا تقول عائلاتنا؟/g, 'من تجارب عملائنا');
content = content.replace(/آراء نفخر بها/g, 'شهادات تجمع تجارب «إنها لك» و«بداية الرحلة»');

// Update CTA Section
content = content.replace(/هل أنت جاهز لبدء الرحلة؟/g, 'ما الذي تبحث عنه الآن؟');
content = content.replace(/اختر المسار الذي يناسب طفلك اليوم/g, 'قصة أو منتج مخصص لطفل؟ أم برنامج كتابة فردي؟ اختر المشروع الأقرب لاحتياجك.');
content = content.replace(/"تصفح منتجات 'إنها لك'"/g, "'اكتشف «إنها لك»'");
content = content.replace(/"احجز جلسة 'بداية الرحلة'"/g, "'اكتشف «بداية الرحلة»'");

fs.writeFileSync(path, content);
