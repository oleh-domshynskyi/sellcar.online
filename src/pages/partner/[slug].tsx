import Home from '@/pages/index';
import { InferGetServerSidePropsType } from 'next';

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { defaultLocale } = context;
  const partners = await import(`@/public/sections/partners.json`);
  const partnersData: any = partners;

  const partner = slug;

  const getImageIdx = (partnerName: any) => {
    if (partner) {
      return partnersData[defaultLocale!].images.findIndex(
        (el: any) => el.name === partnerName,
      );
    } else return undefined;
  };

  const getImage = () => {
    if (partner && getImageIdx(partner) > -1) {
      return partnersData[defaultLocale!].images[getImageIdx(partner)].img;
    } else return undefined;
  };

  if (getImageIdx(partner) < 0) {
    return {
      redirect: {
        destination: `/`,
      },
    };
  }

  return {
    props: {
      partner: getImage(),
    },
  };
}

export default function Partner({
  partner,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Home partner={partner} />;
}
