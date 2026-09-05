import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../contexts/AuthContext';
import { supabase } from '../../../lib/supabase/client';

export const useStudentDashboardData = () => {
  const { currentUser } = useAuth();

  return useQuery({
    queryKey: ['studentDashboardData', currentUser?.id],
    queryFn: async () => {
      // Mock data for Phase 3 visual demonstration
      return {
        isUnlinked: false,
        parentName: 'ولي أمر',
        journeys: [
          {
            id: 'journey-1',
            package_name: 'باقة المكتشف الصغير',
            status: 'مؤكد',
            instructor_name: 'أ. أحمد علي',
            sessions: [
              { status: 'completed', session_date: new Date(Date.now() - 86400000 * 2).toISOString() },
              { status: 'upcoming', session_date: new Date(Date.now() + 86400000 * 2).toISOString() }
            ],
            packageDetails: { sessions: '4' }
          }
        ],
        orders: [],
        subscriptions: [],
        badges: [
          { id: '1', name: 'كاتب المستقبل', description: 'أول قصة مكتوبة', icon_name: 'Feather' }
        ],
        attachments: [],
        childProfile: { name: 'عمر' }
      };
    },
  });
};
