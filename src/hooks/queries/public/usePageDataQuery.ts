import { useQuery } from '@tanstack/react-query';

export const useBookingData = () => {
    return useQuery({
        queryKey: ['bookingData'],
        queryFn: async () => {
            return {
                instructors: [
                  { id: '1', name: 'أ. محمد سعيد', bio: 'خبير في الكتابة الإبداعية', active: true, image_url: '' }
                ],
                cw_packages: [
                  { id: '1', name: 'باقة المكتشف الصغير', sessions: '4', price_egp: 500, price_usd: 20, active: true, features: [] }
                ],
                holidays: [],
                cw_services: [],
                pricingConfig: { base_rate_egp: 100, base_rate_usd: 5 },
                activeBookings: []
            };
        },
        staleTime: 1000 * 30,
    });
};
