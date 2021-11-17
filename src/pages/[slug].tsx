import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ContentLayout from '@/containers/contentLayout/index';

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { locale } = context;
  let data = null;

  try {
    data = await import(`@/public/helpPages/${slug}.json`);
  } catch (error) {
    return {
      redirect: {
        destination: `/`,
      },
    };
  }

  if (!data) {
    return {
      redirect: {
        destination: `/`,
      },
    };
  }

  return {
    props: {
      data: data[locale],
    },
  };
}

export default function HelpPage({ data }: any) {
  const router = useRouter();
  const { locale } = router;
  return (
    <ContentLayout title={data.title}>
      <Head>
        <title>{data[locale!].pageTitle}</title>
        <meta name="description" content={data[locale!].pageMeta}></meta>
      </Head>
      <div className="wysiwyg container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </div>
    </ContentLayout>
  );
}
