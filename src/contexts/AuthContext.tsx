import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useAuth as useClerkAuth, useUser as useClerkUser } from '@clerk/clerk-react';
import { supabase, setSupabaseAccessTokenProvider, clearSupabaseAccessTokenProvider } from '../lib/supabase/client';
import { getPermissions, Permissions, type UserRole } from '../lib/roles';
import type { UserProfile, ChildProfile } from '../lib/database.types';

interface AuthContextType {
  currentUser: UserProfile | null;
  currentChildProfile: ChildProfile | null;
  childProfiles: ChildProfile[];
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  hasAdminAccess: boolean;
  permissions: Permissions;
  isProfileComplete: boolean;
  triggerProfileUpdate: () => void;
  signOut: () => Promise<void>;
  // Simplified placeholders for Phase 2
  signIn: (email: string, pass: string) => Promise<UserProfile | null>;
  signUp: (email: string, pass: string, name: string, role: UserRole) => Promise<UserProfile | null>;
  signInWithGoogle: (redirectUrl?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoaded, userId, getToken, signOut: clerkSignOut } = useClerkAuth();
  const { user: clerkUser } = useClerkUser();
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (userId) {
      // Set up Supabase auth integration
      setSupabaseAccessTokenProvider(async () => {
        try {
          return await getToken({ template: 'supabase' });
        } catch (e) {
          console.error("Failed to get Clerk Supabase token", e);
          return null;
        }
      });

      // Fetch user profile from Supabase
      const fetchProfile = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

          if (error) {
            console.error("Supabase profile fetch error", error);
            // Fallback mock for UI Phase 2 if DB isn't fully seeded
            setCurrentUser({
              id: userId,
              title: clerkUser?.firstName || 'User',
              slug: userId,
              content: '',
              role: 'user',
            } as any);
          } else {
            setCurrentUser(data);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    } else {
      setCurrentUser(null);
      clearSupabaseAccessTokenProvider();
      setLoading(false);
    }
  }, [isLoaded, userId, clerkUser]);

  const signOut = async () => {
    await clerkSignOut();
  };

  const signIn = async () => { return null; };
  const signUp = async () => { return null; };
  const signInWithGoogle = async () => {};

  const userRole = (currentUser as any)?.role || 'user';
  const permissions = getPermissions(userRole);
  
  const allowedAdminRoles = [
    'super_admin', 'general_supervisor', 'instructor', 'enha_lak_supervisor',
    'creative_writing_supervisor', 'publisher', 'content_editor', 'support_agent'
  ];

  const triggerProfileUpdate = () => {};

  const value = useMemo(() => ({
    currentUser,
    currentChildProfile: null,
    childProfiles: [
      { id: '1', parent_id: userId || '', name: 'عمر', age: 8 }
    ],
    isLoggedIn: !!userId,
    loading: !isLoaded || loading,
    error,
    hasAdminAccess: allowedAdminRoles.includes(userRole),
    permissions,
    isProfileComplete: true,
    triggerProfileUpdate,
    signOut,
    signIn,
    signUp,
    signInWithGoogle,
  }), [currentUser, userId, isLoaded, loading, error, permissions, userRole]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const MockAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use a mock user so dashboards and protected routes are visible during mock phase
  const mockUser = {
    id: 'mock-user-123',
    title: 'تامر الشافعي',
    slug: 'tamer',
    content: 'Mock User',
    role: 'super_admin', // Default to super_admin so we can see everything
    first_name: 'تامر',
    last_name: 'الشافعي'
  } as any;

  const [currentUser] = useState<any | null>(mockUser);
  const loading = false;
  const error = null;
  const userRole = currentUser?.role || 'user';
  const permissions = getPermissions(userRole);
  
  const allowedAdminRoles = [
    'super_admin', 'general_supervisor', 'instructor', 'enha_lak_supervisor',
    'creative_writing_supervisor', 'publisher', 'content_editor', 'support_agent'
  ];

  const value = useMemo(() => ({
    currentUser,
    currentChildProfile: { id: '1', parent_id: 'mock', name: 'عمر', age: 8 } as any,
    childProfiles: [
      { id: '1', parent_id: 'mock', name: 'عمر', age: 8 } as any
    ],
    isLoggedIn: true,
    loading,
    error,
    hasAdminAccess: allowedAdminRoles.includes(userRole),
    permissions,
    isProfileComplete: true,
    triggerProfileUpdate: () => {},
    signOut: async () => { alert("Mock Sign Out"); },
    signIn: async () => mockUser,
    signUp: async () => mockUser,
    signInWithGoogle: async () => {},
  }), [currentUser, loading, error, permissions, userRole]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
