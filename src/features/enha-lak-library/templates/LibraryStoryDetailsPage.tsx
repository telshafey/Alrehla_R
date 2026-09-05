import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '../../../contexts/CartContext';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

const MOCK_STORIES = [
  { id: '1', title: 'قصص الأنبياء للأطفال', description: 'مجموعة قصصية مبسطة بأسلوب شيق يناسب الأطفال. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 150 },
  { id: '2', title: 'موسوعة المستكشف الصغير', description: 'رحلة استكشافية ممتعة في عالم الحيوان والنبات. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 180 },
  { id: '3', title: 'حديقة الأخلاق', description: 'قصص هادفة لغرس القيم والأخلاق الحميدة بأسلوب تفاعلي. القصة جاهزة بالكامل ولا يتم تعديل محتواها، ويقتصر التخصيص على إضافة اسم الطفل على الغلاف.', price: 120 },
];

const LibraryStoryDetailsPage = () => {
    const { id } = useParams();
    const { addItemToCart } = useCart();
    
    const story = MOCK_STORIES.find(s => s.id === id);

    if (!story) {
        return <div className="py-20 text-center">القصة غير موجودة</div>;
    }

    const handleAdd = () => {
        addItemToCart({
            id: story.id,
            type: 'order',
            title: story.title,
            price: story.price,
            description: story.description,
            quantity: 1
        });
        alert('تمت الإضافة إلى السلة بنجاح!');
    };

    return (
        <div className="bg-muted/30 min-h-[80vh] py-12 animate-fadeIn">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/enha-lak/library" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold mb-8">
                    <ArrowLeft size={16} />
                    العودة إلى المكتبة
                </Link>
                <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-12 text-center">
                        <BookOpen className="w-20 h-20 text-indigo-500 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-foreground">{story.title}</h1>
                    </div>
                    <CardContent className="p-8">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Sparkles className="text-yellow-500"/> عن هذه القصة</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{story.description}</p>
                        <div className="bg-gray-50 p-6 rounded-lg flex justify-between items-center">
                            <span className="text-xl text-gray-600">السعر:</span>
                            <span className="text-3xl font-extrabold text-primary">{story.price} ج.م</span>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                        <Button size="lg" className="w-full text-lg h-14" onClick={handleAdd}>إضافة إلى السلة والمتابعة للدفع</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
export default LibraryStoryDetailsPage;
