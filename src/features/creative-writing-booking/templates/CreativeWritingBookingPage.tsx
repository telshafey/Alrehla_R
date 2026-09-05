"use client";


import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, useLocation, useSearchParams } from '@/lib/navigation-compat';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useBookingData } from '@/hooks/queries/public/usePageDataQuery';
import PageLoader from '@/components/ui/page-loader';
import OrderStepper from '../../../components/order/OrderStepper';
import ChildDetailsSection from '../../../components/order/ChildDetailsSection';
import PackageSelection from '../../../components/creative-writing/booking/PackageSelection';
import InstructorSelection from '../../../components/creative-writing/booking/InstructorSelection';
import CalendarSelection from '../../../components/creative-writing/booking/CalendarSelection';
import BookingSummary from '../../../components/creative-writing/booking/BookingSummary';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info } from 'lucide-react';
import type { ChildProfile, CreativeWritingPackage, ExtendedInstructor } from '@/lib/database.types';
import { checkBookingSlotAvailability } from '@/lib/api-client/resources/bookings';
import { apiClient } from '@/lib/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type BookingStep = 'package' | 'child' | 'instructor' | 'schedule';

const stepsConfig = [
    { key: 'package', title: 'اختر الباقة' },
    { key: 'child', title: 'اختر الطفل' },
    { key: 'instructor', title: 'اختر المدرب' },
    { key: 'schedule', title: 'اختر الموعد' },
];

const formatCalendarDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const CreativeWritingBookingPage: React.FC = () => {
    const router = useRouter();
    const pathname = useLocation();
    const searchParams = useSearchParams();
    const { isLoggedIn, currentUser, childProfiles, loading: authLoading, isProfileComplete, triggerProfileUpdate } = useAuth();
    const { addItemToCart } = useCart();
    const { toast } = useToast();
    const { data: bookingData, isLoading: bookingDataLoading } = useBookingData();
    
    const [step, setStep] = useState<BookingStep>('package');
    const [selectedChildId, setSelectedChildId] = useState<any>(null);
    const [childData, setChildData] = useState({ childName: '', childBirthDate: '', childGender: '' as 'ذكر' | 'أنثى' | '' });
    const [selectedPackage, setSelectedPackage] = useState<CreativeWritingPackage | null>(null);
    const [selectedExtendedInstructor, setSelectedExtendedInstructor] = useState<ExtendedInstructor | null>(null);
    const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date, time: string } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Handled via standard search params if present
    }, [searchParams]);
    
    // تصحيح: استخدام pricingSettings من المستوى الأعلى
    const { instructors = [], cw_packages = [], holidays = [], activeBookings = [], pricingConfig } = (bookingData as any) || {};
    
    // المعادلة الديناميكية لحساب سعر العميل النهائي
    const finalPrice = useMemo(() => {
        if (!selectedPackage) return null;
        if (selectedPackage.price === 0) return 0;
        
        if (selectedExtendedInstructor && selectedPackage) {
            const netPrice = selectedExtendedInstructor.package_rates?.[selectedPackage.id];
            
            // إذا لم يحدد المدرب سعراً خاصاً، نستخدم السعر الأساسي للباقة
            const baseNet = netPrice !== undefined ? netPrice : selectedPackage.price;
            
            // استخدام القيم الافتراضية إذا لم تتوفر إعدادات التسعير
            const percentage = pricingConfig?.company_percentage || 1.2;
            const fixedFee = pricingConfig?.fixed_fee || 50;

            return Math.ceil((baseNet * percentage) + fixedFee);
        }
        return null;
    }, [selectedPackage, selectedExtendedInstructor, pricingConfig]);

    // حساب نطاق الأسعار للباقة المختارة قبل اختيار المدرب
    const priceRange = useMemo(() => {
        if (!selectedPackage || finalPrice !== null) return null;
        if (selectedPackage.price === 0) return { min: 0, max: 0 };

        const percentage = pricingConfig?.company_percentage || 1.2;
        const fixedFee = pricingConfig?.fixed_fee || 50;

        // نحسب الأسعار النهائية لكل المدربين لهذه الباقة
        const prices = (instructors as ExtendedInstructor[])
            .map((i: ExtendedInstructor) => {
                const net = i.package_rates?.[selectedPackage.id];
                // إذا كان للمدرب سعر خاص، نستخدمه، وإلا نستخدم سعر الباقة الافتراضي كصافي ربح افتراضي
                const baseNet = net !== undefined ? net : selectedPackage.price;
                return Math.ceil((baseNet * percentage) + fixedFee);
            });

        // نضيف أيضاً السعر الافتراضي للباقة (في حال لم يختر أي مدرب سعراً خاصاً)
        const defaultCustomerPrice = Math.ceil((selectedPackage.price * percentage) + fixedFee);
        prices.push(defaultCustomerPrice);

        return { min: Math.min(...prices), max: Math.max(...prices) };
    }, [selectedPackage, finalPrice, instructors, pricingConfig]);


    const isLoading = authLoading || bookingDataLoading;
    if (isLoading) return <PageLoader text="جاري تجهيز صفحة الحجز..." />;
    
    if (!isLoggedIn) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <p className="mb-4 text-lg">يجب تسجيل الدخول أولاً لحجز رحلتك التدريبية.</p>
                <Button asChild size="lg"><Link to="/account">تسجيل الدخول / إنشاء حساب</Link></Button>
            </div>
        );
    }

    const handleNext = () => {
        const currentIndex = stepsConfig.findIndex(s => s.key === step);
        if (currentIndex < stepsConfig.length - 1) {
            setStep(stepsConfig[currentIndex + 1].key as BookingStep);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const handleBack = () => {
        const currentIndex = stepsConfig.findIndex(s => s.key === step);
        if (currentIndex > 0) {
            setStep(stepsConfig[currentIndex - 1].key as BookingStep);
        } else {
            router.push('/creative-writing');
        }
    };

    const handleSelectChild = (child: ChildProfile | null) => {
        if (child) {
            setSelectedChildId(child.id);
            setChildData({ childName: child.name, childBirthDate: child.birth_date, childGender: child.gender });
        } else {
            setSelectedChildId(null);
            setChildData({ childName: '', childBirthDate: '', childGender: '' });
        }
    };
    
    const handleSelectSelf = () => {
        if(!currentUser) return;
        setSelectedChildId(null);
        setChildData({ childName: currentUser.name, childBirthDate: '', childGender: '' });
    };

    const isNextDisabled = () => {
        switch (step) {
            case 'package': return !selectedPackage;
            case 'child': return !childData.childName || !childData.childBirthDate || !childData.childGender;
            case 'instructor': return !selectedExtendedInstructor;
            case 'schedule': return !selectedDateTime;
            default: return true;
        }
    };

    const handleAddChild = () => {
        router.push('/account?tab=familyCenter');
    };

    const handleSubmit = async () => {
        // Enforce Profile Completion
        if (!isProfileComplete) {
            triggerProfileUpdate(); // Mandatory
            return;
        }

        if (!childData.childName || !selectedPackage || !selectedExtendedInstructor || !selectedDateTime || finalPrice === null) {
            toast({ title: 'بيانات الحجز غير مكتملة.', variant: "destructive" });
            return;
        }
        
        setIsSubmitting(true);

        try {
            const bookingDate = formatCalendarDate(selectedDateTime.date);
            const isAvailable = await checkBookingSlotAvailability();// (
                // apiClient,
                // selectedExtendedInstructor.id, 
                // bookingDate,
                // selectedDateTime.time
//            );

            if (!isAvailable) {
                toast({ title: 'عذراً، يبدو أن هذا الموعد تم حجزه للتو. يرجى اختيار موعد آخر.', variant: "destructive" });
                setStep('schedule'); 
                setIsSubmitting(false);
                return;
            }

            const childForCart: Partial<ChildProfile> = selectedChildId
                ? childProfiles.find(c => c.id === selectedChildId)!
                : {
                    id: -1,
                    name: childData.childName,
                    birth_date: childData.childBirthDate,
                    gender: childData.childGender as 'ذكر' | 'أنثى',
                };

            addItemToCart({
                type: 'booking',
                payload: {
                    child: childForCart,
                    package: selectedPackage,
                    instructor: selectedExtendedInstructor,
                    dateTime: { ...selectedDateTime, date: bookingDate },
                    total: finalPrice,
                    summary: `${selectedPackage.name} لـ ${childData.childName} (مع ${selectedExtendedInstructor.name})`
                }
            });
            
            toast({ title: 'تمت إضافة الحجز إلى السلة بنجاح!' });
            router.push('/cart');
        } catch (error) {
            toast({ title: 'حدث خطأ أثناء التحقق من الموعد.', variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentStepTitle = stepsConfig.find(s => s.key === step)?.title;

    return (
        <>
            <div className="bg-muted/50 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 text-center">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">حجز رحلة إبداعية</h1>
                            <p className="mt-2 text-muted-foreground">اختر باقتك ومدربك المفضل لبدء الرحلة.</p>
                        </div>
                        <div className="mb-12">
                            <OrderStepper steps={stepsConfig} currentStep={step} />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <Card className="lg:col-span-2 shadow-sm border-t-4 border-t-primary">
                               {currentStepTitle && (
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{currentStepTitle}</CardTitle>
                                    </CardHeader>
                                )}
                               <CardContent className="pt-2 space-y-10">
                                  {step === 'package' && (
                                      <PackageSelection 
                                          packages={cw_packages as CreativeWritingPackage[]} 
                                          onSelect={setSelectedPackage} 
                                          pricingConfig={pricingConfig} // نمرر إعدادات التسعير هنا
                                      />
                                  )}
                                  {step === 'child' && <ChildDetailsSection childProfiles={childProfiles} onSelectChild={handleSelectChild} selectedChildId={selectedChildId} formData={childData} handleChange={(e) => setChildData(p => ({...p, [e.target.name]: e.target.value}))} errors={{}} currentUser={currentUser} onSelectSelf={handleSelectSelf} onAddChild={handleAddChild} />}
                                  
                                  {step === 'instructor' && (
                                      <InstructorSelection 
                                          instructors={instructors as ExtendedInstructor[]} 
                                          onSelect={setSelectedExtendedInstructor} 
                                          selectedPackage={selectedPackage}
                                          pricingConfig={pricingConfig}
                                      />
                                  )}
                                  
                                  {step === 'schedule' && selectedExtendedInstructor && <CalendarSelection instructor={selectedExtendedInstructor} holidays={holidays as string[]} activeBookings={activeBookings as any[]} onSelect={(date, time) => setSelectedDateTime({ date, time })} />}
                                  
                                  <div className="flex justify-between items-center pt-6 border-t">
                                      <Button onClick={handleBack} variant="outline" icon={<ArrowLeft className="transform rotate-180" />}>السابق</Button>
                                      {step !== 'schedule' ? (
                                          <Button onClick={handleNext} disabled={isNextDisabled()}>التالي <ArrowLeft /></Button>
                                      ) : (
                                           <p className="text-sm text-blue-600 font-bold animate-pulse">يرجى مراجعة الملخص النهائي للتأكيد</p>
                                      )}
                                  </div>
                               </CardContent>
                            </Card>
                            <div className="lg:col-span-1 sticky top-24">
                               <BookingSummary 
                                    childName={childData.childName} 
                                    pkg={selectedPackage} 
                                    instructor={selectedExtendedInstructor} 
                                    dateTime={selectedDateTime} 
                                    onSubmit={handleSubmit} 
                                    isSubmitting={isSubmitting} 
                                    isConfirmStep={step === 'schedule'} 
                                    finalPrice={finalPrice} 
                                    priceRange={priceRange} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreativeWritingBookingPage;
