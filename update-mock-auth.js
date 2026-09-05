const fs = require('fs');
const file = 'src/contexts/AuthContext.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `export const MockAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use a mock user so dashboards and protected routes are visible during mock phase
  const mockUser: UserProfile = {
    id: 'mock-user-123',
    title: 'تامر الشافعي',
    slug: 'tamer',
    content: 'Mock User',
    role: 'super_admin', // Default to super_admin so we can see everything
    first_name: 'تامر',
    last_name: 'الشافعي'
  } as any;

  const [currentUser] = useState<UserProfile | null>(mockUser);
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
};`;

content = content.replace(/export const MockAuthProvider[\s\S]*?(?=export const useAuth)/, replacement + '\n\n');
fs.writeFileSync(file, content);
