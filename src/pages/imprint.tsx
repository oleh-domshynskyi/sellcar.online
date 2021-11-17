import React from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import ContentLayout from '@/containers/contentLayout/index';
import content from '@/public/imprint.json';

export default function Imprint() {
  const router = useRouter();
  const { locale } = router;
  const data: any = content;

  return (
    <ContentLayout title={data[locale!].title}>
      <Head>
        <title>{data[locale!].pageTitle}</title>
        <meta name="description" content={data[locale!].pageMeta}></meta>
      </Head>
      <div className="wysiwyg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data[locale!].content}
        </ReactMarkdown>
      </div>
    </ContentLayout>
  );
}
