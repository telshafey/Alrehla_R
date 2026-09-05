import { Image } from '@/components/ui/Image';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HERO_FALLBACK_IMAGE = '/placeholder-image.jpeg';

interface HeroSectionProps {
  backgroundUrl: string | null | undefined;
  content: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundUrl, content }) => {
  const imageUrl =
    !backgroundUrl || backgroundUrl.includes('placehold.co') ? HERO_FALLBACK_IMAGE : backgroundUrl;

  return (
    <section className="relative isolate flex h-[calc(100svh-4rem)] min-h-[500px] items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 -z-10">
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/70 via-purple-900/70 to-black/70" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="animate-fadeIn text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {content?.heroTitle || 'رحلتان مختلفتان... ومساحة واحدة للحكاية والنمو.'}
        </h1>
        <p
          className="mx-auto mt-6 max-w-4xl animate-fadeIn text-lg text-gray-200 sm:text-xl leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          {content?.heroSubtitle ||
            '«الرحلة» منصة عربية تجمع مشروعين: «إنها لك» لقصص ومنتجات مخصصة للأطفال، و«بداية الرحلة» لكتابة فردية تساعد الأطفال واليافعين والشباب على تنمية أدواتهم وصوتهم.'}
        </p>

        <div
          className="mt-10 flex animate-fadeIn flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.4s' }}
        >
          <Link to="/enha-lak" className="inline-block">
            <Button asChild size="lg" className="shadow-lg transition-transform hover:scale-105">
              <span>{content?.heroButtonText1 || 'اكتشف «إنها لك»'}</span>
            </Button>
          </Link>
          <Link to="/creative-writing" className="inline-block">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shadow-lg transition-transform hover:scale-105"
            >
              <span>{content?.heroButtonText2 || 'اكتشف «بداية الرحلة»'}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
