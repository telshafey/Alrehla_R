export const useInstructorOverview = () => {
    return {
        instructor: { id: 1, name: 'أحمد محمود', profile_update_status: 'approved' },
        bookings: [
            { id: 101, child_id: 201, child_name: 'يوسف جمال', package_name: 'رحلة الكاتب المبدع', progress: 40, status: 'active' as const, sessions_completed: 2, total_sessions: 5 },
            { id: 102, child_id: 202, child_name: 'سارة خالد', package_name: 'رحلة القراءة السريعة', progress: 75, status: 'active' as const, sessions_completed: 3, total_sessions: 4 }
        ],
        allScheduledSessions: [
            { id: 1, booking_id: 101, status: 'upcoming', session_date: new Date(new Date().setHours(new Date().getHours() - 2)).toISOString(), child_name: 'يوسف جمال', package_name: 'رحلة الكاتب المبدع' },
            { id: 2, booking_id: 102, status: 'upcoming', session_date: new Date(new Date().setHours(new Date().getHours() + 2)).toISOString(), child_name: 'سارة خالد', package_name: 'رحلة القراءة السريعة' },
            { id: 3, booking_id: 101, status: 'upcoming', session_date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(), child_name: 'يوسف جمال', package_name: 'رحلة الكاتب المبدع' }
        ],
        upcomingSessionsCount: 5,
        activeJourneysCount: 12,
        introSessionsThisMonth: 1,
        introSessionGoalMet: true,
        isLoading: false,
        error: null
    };
};
