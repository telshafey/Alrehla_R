export type UserRole =
  | 'user'
  | 'parent'
  | 'student'
  | 'super_admin'
  | 'general_supervisor'
  | 'enha_lak_supervisor'
  | 'creative_writing_supervisor'
  | 'instructor'
  | 'content_editor'
  | 'support_agent'
  | 'publisher';

export type AccountType = 'parent' | 'student';
export type GlobalRole = 'super_admin' | 'support_admin';
export type OrganizationRole = 'org:general_supervisor' | 'org:instructor' | 'org:publisher';

export const ACCOUNT_TYPES = ['parent', 'student'] as const;
export const GLOBAL_ROLES = ['super_admin', 'support_admin'] as const;
export const ORGANIZATION_ROLES = [
  'org:general_supervisor',
  'org:instructor',
  'org:publisher',
] as const;

export const roleNames: Record<UserRole, string> = {
  user: 'مستخدم عادي',
  parent: 'ولي أمر',
  student: 'طالب',
  super_admin: 'مدير النظام',
  general_supervisor: 'مشرف عام',
  enha_lak_supervisor: 'مشرف إنها لك',
  creative_writing_supervisor: 'مشرف بداية الرحلة',
  instructor: 'مدرب',
  content_editor: 'محرر محتوى',
  support_agent: 'وكيل دعم',
  publisher: 'دار نشر',
};

export const STAFF_ROLES: UserRole[] = [
    'super_admin',
    'general_supervisor',
    'enha_lak_supervisor',
    'creative_writing_supervisor',
    'instructor',
    'content_editor',
    'support_agent',
    'publisher'
];

export const CUSTOMER_ROLES: UserRole[] = [
    'user',
    'parent',
    'student'
];

export interface Permissions {
  canViewDashboard: boolean;
  canViewGlobalStats: boolean;
  canViewContentStats: boolean;
  canManageEnhaLakOrders: boolean;
  canManageCreativeWritingBookings: boolean;
  canManageEnhaLakProducts: boolean;
  canManageCreativeWritingSettings: boolean;
  canManageUsers: boolean;
  canManageInstructors: boolean;
  canManageInstructorUpdates: boolean;
  canManageBlog: boolean;
  canManageSiteContent: boolean;
  canManageSupportTickets: boolean;
  canManageJoinRequests: boolean;
  canManageSettings: boolean;
  canManageFinancials: boolean; 
  canViewAuditLog: boolean;
  isInstructor: boolean;
  canManageOwnSchedule: boolean;
  canManageOwnProfile: boolean;
  canViewOwnFinancials: boolean;
  isPublisher: boolean;
  canManageOwnProducts: boolean;
}

export const defaultPermissions: Permissions = {
  canViewDashboard: false,
  canViewGlobalStats: false,
  canViewContentStats: false,
  canManageEnhaLakOrders: false,
  canManageCreativeWritingBookings: false,
  canManageEnhaLakProducts: false,
  canManageCreativeWritingSettings: false,
  canManageUsers: false,
  canManageInstructors: false,
  canManageInstructorUpdates: false,
  canManageBlog: false,
  canManageSiteContent: false,
  canManageSupportTickets: false,
  canManageJoinRequests: false,
  canManageSettings: false,
  canManageFinancials: false,
  canViewAuditLog: false,
  isInstructor: false,
  canManageOwnSchedule: false,
  canManageOwnProfile: false,
  canViewOwnFinancials: false,
  isPublisher: false,
  canManageOwnProducts: false,
};

export const permissionsByRole: Record<UserRole, Permissions> = {
  super_admin: {
      canViewDashboard: true, canViewGlobalStats: true, canViewContentStats: true, canManageEnhaLakOrders: true,
      canManageCreativeWritingBookings: true, canManageEnhaLakProducts: true, canManageCreativeWritingSettings: true,
      canManageUsers: true, canManageInstructors: true, canManageInstructorUpdates: true, canManageBlog: true,
      canManageSiteContent: true, canManageSupportTickets: true, canManageJoinRequests: true, canManageSettings: true,
      canManageFinancials: true, canViewAuditLog: true, isInstructor: false, canManageOwnSchedule: false,
      canManageOwnProfile: false, canViewOwnFinancials: false, isPublisher: false, canManageOwnProducts: false
  },
  general_supervisor: {
    ...defaultPermissions,
    canViewDashboard: true, canViewGlobalStats: true, canViewContentStats: true, canManageEnhaLakOrders: true,
    canManageCreativeWritingBookings: true, canManageUsers: true, canManageInstructors: true, 
    canManageInstructorUpdates: true, canManageSupportTickets: true, canManageFinancials: true,
  },
  enha_lak_supervisor: {
    ...defaultPermissions,
    canViewDashboard: true, canManageEnhaLakOrders: true, canManageEnhaLakProducts: true,
  },
  creative_writing_supervisor: {
    ...defaultPermissions,
    canViewDashboard: true, canViewGlobalStats: false, canManageCreativeWritingBookings: true, canManageCreativeWritingSettings: true,
    canManageInstructors: true, canManageInstructorUpdates: true,
  },
  instructor: {
    ...defaultPermissions,
    canViewDashboard: true, isInstructor: true, canManageOwnSchedule: true, canManageOwnProfile: true, canViewOwnFinancials: true,
  },
  publisher: {
    ...defaultPermissions,
    canViewDashboard: true, isPublisher: true, canManageOwnProducts: true,
  },
  content_editor: {
    ...defaultPermissions,
    canViewDashboard: true, canManageBlog: true, canManageSiteContent: true,
  },
  support_agent: {
    ...defaultPermissions,
    canViewDashboard: true, canManageSupportTickets: true, canManageJoinRequests: true,
  },
  user: defaultPermissions,
  parent: defaultPermissions,
  student: defaultPermissions,
};

export const getPermissions = (role: UserRole): Permissions => {
  return permissionsByRole[role] || defaultPermissions;
};

export const hasPermission = (role: UserRole, permission: keyof Permissions): boolean => {
  return Boolean(getPermissions(role)[permission]);
};

export const ADMIN_PANEL_ROLES: UserRole[] = [
  'super_admin',
  'general_supervisor',
  'enha_lak_supervisor',
  'creative_writing_supervisor',
  'content_editor',
  'support_agent',
  'publisher',
];

export const INSTRUCTOR_PANEL_ROLES: UserRole[] = ['instructor'];
export const STUDENT_PANEL_ROLES: UserRole[] = ['student'];

export const isAdminRole = (role: UserRole): boolean => ADMIN_PANEL_ROLES.includes(role);
