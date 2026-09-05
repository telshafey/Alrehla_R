export type BlogPost = { id: string | number; title: string; slug: string; image_url?: string; published_at?: string; content: string; };
export type UserProfile = { id: string | number; role: string; name?: string; email?: string; country?: string; city?: string; phone?: string; };
export type ChildProfile = { id: string | number; parent_id: string | number; name: string; age?: number; avatar_url?: string; birth_date?: string; gender?: "" | "ذكر" | "أنثى"; };
export type Badge = { id: string | number; name: string; description: string; icon_name: string; };
export type CreativeWritingBooking = { child_id?: number | string; id: string | number; package_name: string; status: 'completed' | 'upcoming' | 'cancelled'; };
export type ScheduledSession = { id: string | number; session_date: string; status: 'upcoming' | 'completed' | 'cancelled'; booking_id: string | number; };
export type Instructor = { id: string | number; name: string; bio?: string; active?: boolean; package_rates?: Record<string | number, number>; profile_update_status?: string; image_url?: string; avatar_url?: string; specialty?: string; slug?: string; };
export type ExtendedInstructor = Instructor & { weekly_schedule?: any; avatar_url?: string; specialty?: string; expertise_areas?: string[]; teaching_philosophy?: string; intro_video_url?: string; };
export interface EnrichedInstructorBooking { id: number | string; child_id?: number | string; child_name?: string; package_name?: string; status: 'completed' | 'upcoming' | 'cancelled'; progress?: number; sessions_completed?: number; total_sessions?: number; }
export interface ComparisonItem { id: number | string; label: string; }
export type CreativeWritingPackage = { id: string | number; name: string; price: number; popular?: boolean; sessions: number | string; features: string[]; icon_name?: string; description?: string; level?: string; comparison_values?: Record<string | number, string>; };
