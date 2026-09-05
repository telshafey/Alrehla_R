import { useQuery } from '@tanstack/react-query';
import type {
    Instructor,
    BlogPost,
    CreativeWritingPackage,
    ComparisonItem
} from '../../../lib/database.types';

// Extend local types that might not be in database.types yet but are used in mock
type SiteContent = {
    creative_writing_hero_title?: string;
    creative_writing_hero_subtitle?: string;
    about_hero_title?: string;
    about_hero_subtitle?: string;
    privacyPage?: any;
    termsPage?: any;
};

type SocialLinks = {
    facebook?: string;
    twitter?: string;
    instagram?: string;
};

type CommunicationSettings = {
    whatsapp_number?: string;
};

type PricingSettings = {
    company_percentage?: number;
    fixed_fee?: number;
};

export const usePublicData = () => {
    return {
        data: {
            creativeWritingPackages: [
                { id: 1, name: 'الكاتب المبدع', description: 'رحلة لاكتشاف المواهب', price: 150, popular: true, sessions: 4, features: ['جلسة تعريفية', '3 جلسات تدريبية', 'شهادة إتمام'], comparison_values: { 1: 'نعم', 2: 'لا' } },
                { id: 2, name: 'الكاتب المحترف', description: 'رحلة متقدمة', price: 300, popular: false, sessions: 8, features: ['كل ميزات المبدع', 'نشر قصة', 'جلسات أطول'], comparison_values: { 1: 'نعم', 2: 'نعم' } },
            ] as CreativeWritingPackage[],
            instructors: [
                { id: 1, name: 'أحمد محمود', package_rates: { 1: 100, 2: 250 }, active: true, specialty: 'كتابة إبداعية', avatar_url: 'https://i.pravatar.cc/150?u=ahmed', slug: 'ahmed-mahmoud', bio: 'مدرب كتابة إبداعية ذو خبرة.' },
                { id: 2, name: 'منى جمال', package_rates: { 1: 120, 2: 280 }, active: true, specialty: 'تأليف قصص', avatar_url: 'https://i.pravatar.cc/150?u=mona', slug: 'mona-gamal', bio: 'متخصصة في قصص الأطفال.' }
            ] as any[],
            blogPosts: [
                { id: 1, title: 'أهمية الكتابة للأطفال', slug: 'writing-for-kids', content: 'مقال عن الكتابة...', published_at: new Date().toISOString() }
            ] as BlogPost[],
            comparisonItems: [
                { id: 1, label: 'شهادة معتمدة' },
                { id: 2, label: 'نشر كتاب' }
            ] as ComparisonItem[],
            pricingSettings: { company_percentage: 1.2, fixed_fee: 50 } as PricingSettings,
            siteContent: {
                creative_writing_hero_title: 'اكتشف موهبة طفلك في الكتابة',
                creative_writing_hero_subtitle: 'برامج متخصصة لتنمية مهارات التعبير والإبداع لدى الأطفال',
                about_hero_title: 'عن منصة الرحلة',
                about_hero_subtitle: 'رحلة في عالم المعرفة',
                privacyPage: { content: "محتوى سياسة الخصوصية التجريبي" },
                termsPage: { content: "محتوى شروط الاستخدام التجريبي" }
            } as SiteContent,
            socialLinks: { facebook: '#', instagram: '#' } as SocialLinks,
            communicationSettings: { whatsapp_number: '+201000000000' } as CommunicationSettings
        },
        isLoading: false,
        error: null
    };
};

export const usePublicSettings = () => {
    return useQuery({
        queryKey: ['publicSettings'],
        queryFn: async () => {
            return {
                maintenance_mode: false,
                site_name: 'الرحلة'
            };
        }
    });
};
