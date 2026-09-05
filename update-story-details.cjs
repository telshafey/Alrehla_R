const fs = require('fs');
const path = 'src/features/enha-lak-library/templates/LibraryStoryDetailsPage.tsx';

let content = fs.readFileSync(path, 'utf8');

const MOCK_STORIES = `const MOCK_STORIES = [
  { id: '1', title: 'قصص الأنبياء للأطفال', description: 'مجموعة قصصية مبسطة بأسلوب شيق يناسب الأطفال. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 150 },
  { id: '2', title: 'موسوعة المستكشف الصغير', description: 'رحلة استكشافية ممتعة في عالم الحيوان والنبات. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 180 },
  { id: '3', title: 'حديقة الأخلاق', description: 'قصص هادفة لغرس القيم والأخلاق الحميدة بأسلوب تفاعلي. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 120 },
];`;

content = content.replace(/const MOCK_STORIES = \[\s*\{ id: '1'.*?\{ id: '3'.*?\},?\s*\];/s, MOCK_STORIES);

fs.writeFileSync(path, content);
