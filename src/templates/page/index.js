import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content, excerpt },
    // location,
    // data: {
    //   wpgraphql: { page },
    // },
  } = props;

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} single-page max-w-2xl m-auto`}
      >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
          <div className="entry-meta" />
          {/* .meta-info */}
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  );
};

export default SinglePage;
