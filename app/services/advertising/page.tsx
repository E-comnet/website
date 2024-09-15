import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1/advertising';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecomnet | Service details',
  description: 'Ecomnet - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Multimedia and Advertising Production"
        breadcrumbItems={[
          {
            label: 'Services',
            href: '/services',
          },
          {
            label: 'Multimedia and Advertising Production',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}