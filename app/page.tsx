import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { CtaSection } from '@/src/sections/cta/v1';
import { Hero } from '@/src/sections/hero/v1';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecomnet | Home',
  description: 'Ecomnet - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero />
      <AboutSection />
      <CtaSection />
      <StatisticsSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
