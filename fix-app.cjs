const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
`  // If we have a Clerk key, wrap with full auth. Otherwise render as-is for development preview.
  if (!clerkPubKey) {
    return (
      <div className="border-b bg-yellow-50 p-2 text-center text-sm text-yellow-800">
        Authentication disabled. Add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your environment to enable login.
        {routerApp}
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AuthProvider>
        <CartProvider>
          {routerApp}
        </CartProvider>
      </AuthProvider>
    </ClerkProvider>
  );`,
`  const AppContent = (
    <AuthProvider>
      <CartProvider>
        {routerApp}
      </CartProvider>
    </AuthProvider>
  );

  // If we have a Clerk key, wrap with full auth. Otherwise render as-is for development preview.
  if (!clerkPubKey) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="border-b bg-yellow-50 p-2 text-center text-sm text-yellow-800 shrink-0">
          Authentication disabled. Add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your environment to enable login.
        </div>
        <div className="flex-grow flex flex-col">
          {AppContent}
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {AppContent}
    </ClerkProvider>
  );`
);

fs.writeFileSync('src/App.tsx', content);
