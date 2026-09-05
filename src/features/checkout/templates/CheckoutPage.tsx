import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, ShoppingBag, ArrowLeft } from 'lucide-react';

const CheckoutPage: React.FC = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useNavigate();

    const cartTotal = getCartTotal();

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            clearCart();
            setIsSubmitting(false);
            alert('تم استلام طلبك بنجاح! سيتم التواصل معك قريباً.');
            router('/student/dashboard');
        }, 1500);
    };

    if (cart.length === 0) {
        return (
            <div className="bg-white py-16 text-center">
                <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold mb-2">السلة فارغة</h2>
                <Link to="/packages">
                    <Button>تصفح الباقات</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-muted/50 py-12 min-h-screen">
            <div className="container mx-auto px-4 max-w-2xl">
                <h1 className="text-3xl font-bold mb-8">إتمام الدفع</h1>
                <form onSubmit={handleCheckout}>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>ملخص الطلب</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 mb-4">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                                        <div>
                                            <p className="font-bold">{item.title}</p>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        </div>
                                        <p className="font-bold">{item.price} ج.م</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center font-extrabold text-xl pt-2">
                                <span>الإجمالي</span>
                                <span className="text-primary">{cartTotal} ج.م</span>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>معلومات الدفع</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm mb-4">
                                يمكنك الدفع نقداً عند الاستلام أو تحويل بنكي. هذه نسخة تجريبية.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold mb-1">الاسم الكامل</label>
                                    <input required type="text" className="w-full border rounded-md px-3 py-2" placeholder="الاسم الكامل" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1">رقم الهاتف</label>
                                    <input required type="tel" className="w-full border rounded-md px-3 py-2" placeholder="رقم الهاتف" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full h-12 text-lg gap-2" disabled={isSubmitting}>
                                {isSubmitting ? 'جاري التنفيذ...' : (
                                    <>
                                        <CreditCard size={20} />
                                        تأكيد الطلب
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    );
};
export default CheckoutPage;
