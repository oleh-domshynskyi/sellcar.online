import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ContentLayout from '@/containers/contentLayout/index';

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { locale } = context;
  const data = await import(`@/public/helpPages/${slug}.json`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data[locale],
    },
  };
}

export default function HelpPage({ data }: any) {
  return (
    <ContentLayout title={data.title}>
      <div className="wysiwyg container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </div>
    </ContentLayout>
  );
}