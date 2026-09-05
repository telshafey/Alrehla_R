import { ArrowLeft, BookOpen, Building2, Edit, Feather, Gift, Search, Target } from 'lucide-react';
import React from 'react';
import PostCard from '../../../components/shared/PostCard';
import TestimonialCard from '../../../components/shared/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/Image';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';

const PortalPage = () => {
  // Mock data for Phase 1
  const data = {
    siteBranding: {
      heroImageUrl: '/assets/placeholder-hero.jpg',
      enhaLakPortalImageUrl: '/assets/placeholder-story.jpg',
      creativeWritingPortalImageUrl: '/assets/placeholder-writing.jpg',
    },
    siteContent: {
      portalPage: {
        showProjectsSection: true,
        showStepsSection: true,
        showAboutSection: true,
        showTestimonialsSection: true,
        showBlogSection: false,
        showFinalCtaSection: true,
      },
    },
    personalizedProducts: [],
    publishers: [],
    blogPosts: [],
  };

  const { blogPosts, siteContent, personalizedProducts, publishers, siteBranding } = data;
  const branding = (siteBranding as any) || {};

  // Get project images from personalized products to guarantee sync
  const customStoryImg = personalizedProducts.find((p: any) => p.key === 'custom_story')?.image_url;
  const subBoxImg = personalizedProducts.find((p: any) => p.key === 'subscription_box')?.image_url;

  const publishedPosts = (blogPosts || []).slice(0, 3);
  const displayPublishers = (publishers || []).slice(0, 8);
  const content = siteContent?.portalPage as any;

  return (
    <div className="bg-background animate-fadeIn">
      <HeroSection
        backgroundUrl={branding?.heroImageUrl}
        content={content}
      />

      {content?.showProjectsSection !== false && (
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                {content?.projectsTitle || 'أقسامنا الرئيسية'}
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                {content?.projectsSubtitle || 'مشروعان مختلفان، بحسب ما تبحث عنه الآن.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <ProjectCard
                title={content?.enhaLakTitle || 'إنها لك'}
                description={
                  content?.enhaLakDescription || 'قصص ومنتجات تُخصص للطفل، أو قصص جاهزة يمكن تخصيص غلافها.'
                }
                link="/enha-lak"
                imageUrl={customStoryImg || branding?.enhaLakPortalImageUrl}
                icon={<BookOpen size={32} />}
                btnText={content?.enhaLakBtnText || 'اكتشف «إنها لك»'}
                themeColor="pink"
              />
              <ProjectCard
                title={content?.creativeWritingTitle || 'بداية الرحلة'}
                description={
                  content?.creativeWritingDescription ||
                  'برنامج كتابة فردي للأعمار 6–20 يساعد المشارك على تنمية أدواته وصوته من خلال الكتابة.'
                }
                link="/creative-writing"
                imageUrl={branding?.creativeWritingPortalImageUrl}
                icon={<Feather size={32} />}
                btnText={content?.creativeWritingBtnText || 'اكتشف «بداية الرحلة»'}
                themeColor="blue"
              />
            </div>
          </div>
        </section>
      )}

      {displayPublishers.length > 0 && (
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0,transparent_48%)]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 flex items-center justify-center gap-3">
              <Building2 className="text-blue-600" /> شركاؤنا في النجاح
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-16 leading-relaxed">
              نفخر بالتعاون مع نخبة من دور النشر العربية لتقديم أفضل محتوى لأطفالكم.
            </p>

            <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
              {displayPublishers.map((publisher) => (
                <Link
                  key={publisher.id}
                  to={`/publisher/${publisher.slug}`}
                  className="group flex flex-col items-center gap-4 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg group-hover:shadow-xl bg-white flex items-center justify-center p-3 overflow-hidden ring-1 ring-gray-100 group-hover:ring-blue-200">
                    <img
                      src={
                        !publisher.logo_url ||
                        publisher.logo_url.includes('wikimedia.org') ||
                        publisher.logo_url.includes('googleusercontent.com')
                          ? '/placeholder-image.jpeg'
                          : publisher.logo_url
                      }
                      alt={publisher.store_name}
                      width={144}
                      height={144}
                      sizes="144px"
                      className="h-full w-full"
                    />
                  </div>
                  <span className="font-bold text-lg text-gray-700 group-hover:text-primary transition-colors">
                    {publisher.store_name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      

      {content?.showAboutSection !== false && (
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-last lg:order-first">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 flex items-center gap-3">
                  <Target className="text-primary" />{' '}
                  {content?.aboutSectionTitle || 'تعرّف إلى رحلتنا'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {content?.aboutSectionContent ||
                    '«الرحلة» منصة عربية تجمع قصصاً وتجارب تربوية تضع صاحب الرحلة في قلب التجربة.'}
                </p>
                <Link to="/about" className="inline-block">
                  <Button
                    as="span"
                    size="lg"
                    className="shadow-lg transition-transform transform hover:scale-105"
                  >
                    {content?.aboutBtnText || 'تعرّف إلى رحلتنا'}
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-square max-w-md mx-auto w-full">
                <img
                  src={branding?.aboutPortalImageUrl || '/placeholder-image.jpeg'}
                  alt="عن منصة الرحلة"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="h-full w-full rounded-3xl shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      

      {content?.showBlogSection !== false && publishedPosts.length > 0 && (
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                {content?.blogTitle || 'من مدونتنا'}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {content?.blogSubtitle || 'مقالات ونصائح تربوية'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {publishedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center font-semibold text-lg text-primary hover:text-primary/80 group"
              >
                <span>قراءة المزيد من المقالات</span>
                <ArrowLeft
                  size={22}
                  className="ms-2 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {content?.showFinalCtaSection !== false && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {content?.finalCtaTitle || 'ما الذي تبحث عنه الآن؟'}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {content?.finalCtaSubtitle || 'قصة أو منتج مخصص لطفل؟ أم برنامج كتابة فردي؟ اختر المشروع الأقرب لاحتياجك.'}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/enha-lak" className="inline-block">
                <Button
                  as="span"
                  size="lg"
                  className="shadow-lg transition-transform transform hover:scale-105"
                >
                  {content?.finalCtaBtn1 || 'اكتشف «إنها لك»'}
                </Button>
              </Link>
              <Link to="/creative-writing/booking" className="inline-block">
                <Button
                  as="span"
                  size="lg"
                  variant="secondary"
                  className="shadow-lg transition-transform transform hover:scale-105"
                >
                  {content?.finalCtaBtn2 || 'اكتشف «بداية الرحلة»'}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PortalPage;
