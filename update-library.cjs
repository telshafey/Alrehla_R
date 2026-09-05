const fs = require('fs');
const path = 'src/features/enha-lak-library/templates/LibraryPage.tsx';

const content = `import React from 'react';
import { BookHeart, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MOCK_STORIES = [
  { id: '1', title: 'قصص الأنبياء للأطفال', description: 'مجموعة قصصية مبسطة بأسلوب شيق يناسب الأطفال.', price: 150 },
  { id: '2', title: 'موسوعة المستكشف الصغير', description: 'رحلة استكشافية ممتعة في عالم الحيوان والنبات.', price: 180 },
  { id: '3', title: 'حديقة الأخلاق', description: 'قصص هادفة لغرس القيم والأخلاق الحميدة بأسلوب تفاعلي.', price: 120 },
];

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-12 sm:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-blue-600">المكتبة العامة</p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">قصة جاهزة... وغلاف يحمل اسم طفلك</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            تصفح القصص واختر ما يناسب طفلك. يبقى محتوى القصة كما هو، ويقتصر التخصيص على الغلاف والخيارات المتاحة.
          </p>
        </header>

        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="relative flex-grow w-full max-w-md">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                 type="text" 
                 placeholder="ابحث في قصص المكتبة..." 
                 className="w-full pr-10 pl-4 py-2 border rounded-full outline-none focus:border-blue-500 bg-slate-50"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <select className="w-full appearance-none bg-slate-50 border rounded-full px-4 py-2 pr-8 outline-none focus:border-blue-500 text-sm">
                <option>كل دور النشر</option>
              </select>
            </div>
            <div className="relative flex-1 md:flex-none">
              <select className="w-full appearance-none bg-slate-50 border rounded-full px-4 py-2 pr-8 outline-none focus:border-blue-500 text-sm">
                <option>الترتيب الافتراضي</option>
                <option>الأحدث</option>
                <option>السعر: من الأقل للأعلى</option>
              </select>
            </div>
            <Button variant="outline" className="rounded-full shrink-0">
                تطبيق
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_STORIES.map(story => (
              <Card key={story.id} className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-blue-50">
                  <div className="bg-blue-100 aspect-video flex items-center justify-center relative">
                    <BookHeart className="text-blue-300 w-16 h-16"/>
                    <span className="absolute top-3 left-3 bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        غلاف مخصص فقط
                    </span>
                  </div>
                  <CardHeader>
                      <CardTitle className="text-xl text-blue-950 leading-tight">
                        {story.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm leading-relaxed">{story.description}</p>
                      <p className="mt-4 font-black text-xl text-primary">{story.price} ج.م</p>
                  </CardContent>
                  <CardFooter>
                      <Link to={"/enha-lak/library/" + story.id} className="w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">عرض تفاصيل القصة</Button>
                      </Link>
                  </CardFooter>
              </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
`
fs.writeFileSync(path, content);
