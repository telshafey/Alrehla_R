import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { AuthProvider, MockAuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import PortalPage from '@/features/portal/templates/PortalPage';
import StudentDashboardPage from '@/features/student-dashboard/templates/StudentDashboardPage';
import CreativeWritingBookingPage from '@/features/creative-writing-booking/templates/CreativeWritingBookingPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminDashboardPage from "./page-views/admin/AdminDashboardPage";
import EnhaLakPage from "@/features/enha-lak/templates/EnhaLakPage";
import CustomExperiencesPage from "@/features/enha-lak-custom/templates/CustomExperiencesPage";
import SubscriptionBoxPage from "@/features/enha-lak-subscription/templates/SubscriptionBoxPage";
import LibraryPage from "@/features/enha-lak-library/templates/LibraryPage";
import LibraryStoryDetailsPage from "@/features/enha-lak-library/templates/LibraryStoryDetailsPage";
import BlogPostPage from "@/features/blog-post/templates/BlogPostPage";
import PaymentStatusPage from "@/features/payment-status/templates/PaymentStatusPage";
import PrivacyPolicyPage from "@/features/privacy/templates/PrivacyPolicyPage";
import TermsOfUsePage from "@/features/terms/templates/TermsOfUsePage";
import InstructorProfilePage from "@/features/instructor-profile/templates/InstructorProfilePage";
import StudentPortfolioPage from "@/features/student-portfolio/templates/StudentPortfolioPage";
import CreativeWritingPage from "@/features/creative-writing-main/templates/CreativeWritingPage";
import CreativeWritingInstructorsPage from "@/features/creative-writing-instructors/templates/CreativeWritingInstructorsPage";
import BlogPage from "@/features/blog/templates/BlogPage";
import AboutPage from "@/features/about/templates/AboutPage";
import JoinUsPage from "@/features/join-us/templates/JoinUsPage";
import SupportPage from "@/features/support/templates/SupportPage";
import CreativeWritingPackagesPage from "@/features/creative-writing-packages/templates/CreativeWritingPackagesPage";
import CartPage from "@/features/cart/templates/CartPage";
import CheckoutPage from "@/features/checkout/templates/CheckoutPage";
import InstructorDashboardPage from "./page-views/instructor/InstructorDashboardPage";

// Retrieve Clerk key from environment
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '';

export default function App() {
  const routerApp = (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col" dir="rtl">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PortalPage />} />
            <Route path="/student/dashboard" element={<StudentDashboardPage />} />
            <Route path="/booking" element={<CreativeWritingBookingPage />} />
            <Route path="/enha-lak" element={<EnhaLakPage />} />
            <Route path="/enha-lak/custom" element={<CustomExperiencesPage />} />
            <Route path="/enha-lak/store" element={<CustomExperiencesPage />} />
            <Route path="/enha-lak/subscription" element={<SubscriptionBoxPage />} />
            <Route path="/enha-lak/library" element={<LibraryPage />} />
            <Route path="/enha-lak/library/:id" element={<LibraryStoryDetailsPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/payment-status" element={<PaymentStatusPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfUsePage />} />
            <Route path="/instructor/:slug" element={<InstructorProfilePage />} />
            <Route path="/portfolio" element={<StudentPortfolioPage />} />
            <Route path="/creative-writing" element={<CreativeWritingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/instructors" element={<CreativeWritingInstructorsPage />} />
            <Route path="/packages" element={<CreativeWritingPackagesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/instructor/dashboard" element={<InstructorDashboardPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );

  const getAppContent = (Provider: any) => (
    <Provider>
      <CartProvider>
        {routerApp}
      </CartProvider>
    </Provider>
  );

  // If we have a Clerk key, wrap with full auth. Otherwise render as-is for development preview.
  if (!clerkPubKey) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="border-b bg-yellow-50 p-2 text-center text-sm text-yellow-800 shrink-0">
          Authentication disabled. Add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your environment to enable login.
        </div>
        <div className="flex-grow flex flex-col">
          {getAppContent(MockAuthProvider)}
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {getAppContent(AuthProvider)}
    </ClerkProvider>
  );
}
