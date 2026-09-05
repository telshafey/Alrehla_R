import React from 'react';
import { Gift, Sparkles, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '../../../contexts/CartContext';
import { Link } from 'react-router-dom';

const MOCK_PRODUCTS = [
  { id: '1', title: 'القصة المخصصة', description: 'قصة تُصنع باسم طفلك وصورته واهتماماته وفق خيارات المنتج.', price: 200, is_addon: false, product_type: 'hero_story' },
  { id: '2', title: 'قصة المشاعر', description: 'قصة مخصصة تدور حول مشاعر ومواقف يومية بلغة مناسبة للعمر.', price: 250, is_addon: false, product_type: 'hero_story' },
  { id: '3', title: 'دفتر تلوين الأبطال', description: 'صفحات تلوين مستوحاة من شخصيات القصة ومشاهدها.', price: 100, is_addon: true, product_type: 'addon' },
  { id: '4', title: 'ملصقات باسم الطفل', description: 'مجموعة ملصقات تحمل اسم الطفل وتصميمات مرتبطة بالتجربة.', price: 50, is_addon: true, product_type: 'addon' },
];

const PersonalizedProductCard = ({ product, variant }: { product: any, variant: 'custom' | 'addon' }) => {
    const { addItemToCart } = useCart();
    
    const handleAdd = () => {
        addItemToCart({
            id: product.id,
            type: 'order',
            title: product.title,
            price: product.price,
            description: product.description,
            quantity: 1
        });
        alert('تمت الإضافة إلى السلة!');
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <p className="mt-4 font-bold text-lg text-primary">{product.price} ج.م</p>
            </CardContent>
            <CardFooter>
                <Button onClick={handleAdd} className="w-full" variant={variant === 'addon' ? 'outline' : 'default'}>
                    <PlusCircle className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                    إضافة للسلة
                </Button>
            </CardFooter>
        </Card>
    );
};

const CustomExperiencesPage = () => {
  const customProducts = MOCK_PRODUCTS.filter(p => !p.is_addon && p.product_type === 'hero_story');
  const addons = MOCK_PRODUCTS.filter(p => p.is_addon);

  return (
    <div className="min-h-screen bg-muted/30 py-12 sm:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-indigo-600">أنت البطل هنا</p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">قصة تُصنع لطفلك</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            اختر المنتج، ثم شاركنا المعلومات اللازمة للتخصيص. يبدأ فريقنا إعداد المحتوى بعد تأكيد الطلب.
          </p>
        </header>

        <section aria-labelledby="custom-products-heading">
          <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
            <div className="rounded-full bg-indigo-100 p-4 text-indigo-600"><Sparkles size={28} /></div>
            <div>
              <h2 id="custom-products-heading" className="text-2xl font-bold text-foreground mb-2">اختر تجربتك</h2>
              <p className="text-sm text-muted-foreground">كل منتج هنا يُعد خصيصًا لطفلك وفق خيارات التخصيص المتاحة.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {customProducts.map((product) => (
              <PersonalizedProductCard key={product.id} product={product} variant="custom" />
            ))}
          </div>
        </section>

        {addons.length > 0 && (
          <section className="mt-16 border-t pt-12" aria-labelledby="custom-addons-heading">
            <div className="mb-8 text-center">
              <h2 id="custom-addons-heading" className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground mb-2">
                <Gift className="text-emerald-500" /> إضافات اختيارية
              </h2>
              <p className="text-sm text-muted-foreground">يمكن إضافتها أثناء تخصيص المنتج.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {addons.map((product) => (
                <PersonalizedProductCard key={product.id} product={product} variant="addon" />
              ))}
            </div>
          </section>
        )}

        {/* Subscription Redirect */}
        <Card className="mx-auto mt-20 max-w-3xl border-indigo-200 bg-indigo-50/50">
          <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="flex-1 text-center sm:text-right">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">صندوق الرحلة الشهري</h3>
                <p className="text-indigo-800/80">تبحث عن تجربة تتجدد كل شهر؟ تعرّف إلى صندوق الرحلة.</p>
            </div>
            <Link to="/enha-lak/subscription">
              <Button className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700">اعرف المزيد</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomExperiencesPage;
