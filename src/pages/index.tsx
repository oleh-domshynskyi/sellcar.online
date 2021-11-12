import { useRouter } from 'next/router';
import Script from 'next/script';
import Partners from '@/components/partners/Partners';
import MainLayout from '@/containers/mainLayout/index';
import Icons from '@/components/icons/Icons';
import Steps from '@/components/steps/Steps';
import Hero from '@/components/hero/Hero';
import Faq from '@/components/faq/Faq';
import home from '@/public/home.json';
import benefits from '@/public/sections/benefits.json';
import partners from '@/public/sections/partners.json';
import steps from '@/public/sections/steps.json';
import faq from '@/public/sections/faq.json';

export default function Home(partner: any) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const homeData: any = home;
  const benefitsData: any = benefits;
  const partnersData: any = partners;
  const stepsData: any = steps;
  const faqData: any = faq;

  return (
    <MainLayout>
      <Script src="https://cadirect-widget.netlify.app/cadwidget-v1.0.js" />
      <Hero
        title={homeData[locale!].title}
        subtitle={homeData[locale!].subtitle}
        img={homeData[locale!].bannerImg}
        partner={partner.partner}
      />
      <Icons data={benefitsData[locale!].benefits} />
      <Steps title={stepsData[locale!].title} data={stepsData[locale!].steps} />
      <Faq title={faqData[locale!].title} data={faqData[locale!].accordions} />
      <Partners
        data={partnersData[defaultLocale!]}
        title={partnersData[locale!].title}
      />
    </MainLayout>
  );
}
