import React from 'react';
import { useParams } from 'react-router-dom';
import { usePublicData } from '../../../hooks/queries/public/usePublicDataQuery';
import PageLoader from '@/components/ui/page-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, BookOpen, Star } from 'lucide-react';

const InstructorProfilePage = () => {
    const { slug } = useParams();
    const { data, isLoading } = usePublicData();
    
    if (isLoading) return <PageLoader />;
    
    const instructor = data?.instructors.find(i => i.slug === slug || i.id.toString() === slug);
    
    if (!instructor) {
        return <div className="py-20 text-center">المدرب غير موجود</div>;
    }

    return (
        <div className="bg-muted/30 py-12 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="mb-8">
                    <CardContent className="pt-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden shrink-0">
                            {instructor.avatar_url ? (
                                <img src={instructor.avatar_url} alt={instructor.name} className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-16 h-16 text-indigo-400" />
                            )}
                        </div>
                        <div className="text-center md:text-right">
                            <h1 className="text-3xl font-bold text-foreground mb-2">{instructor.name}</h1>
                            <p className="text-primary font-medium mb-4">{instructor.specialty || 'مدرب كتابة إبداعية'}</p>
                            <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>
                        </div>
                    </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BookOpen className="text-primary"/> التخصصات</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>قصص الأطفال</li>
                                <li>الكتابة الخيالية</li>
                                <li>تنمية التعبير</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Star className="text-yellow-500"/> تقييم المدرب</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold">4.9</span>
                                <div className="flex text-yellow-500">
                                    <Star className="fill-current w-5 h-5" />
                                    <Star className="fill-current w-5 h-5" />
                                    <Star className="fill-current w-5 h-5" />
                                    <Star className="fill-current w-5 h-5" />
                                    <Star className="fill-current w-5 h-5" />
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">بناءً على 124 جلسة سابقة</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default InstructorProfilePage;
