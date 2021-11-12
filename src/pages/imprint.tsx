import React from 'react';
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
      <div className="wysiwyg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data[locale!].content}
        </ReactMarkdown>
      </div>
    </ContentLayout>
  );
}
