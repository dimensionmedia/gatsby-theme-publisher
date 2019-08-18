import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import PostEntryMeta from '../../components/PostEntryMeta';
import PostEntryTitle from '../../components/PostEntryTitle';
import PostEntryMedia from '../../components/PostEntryMedia';
import EngagementBar from '../../components/EngagementBar';
import SEO from '../../components/SEO';
import BlogOptin from "../../components/BlogOptin";
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

const renderTermNodes = (nodes, termType) => (
  <span className="taxonomy-links text-xs">
    {nodes.map(term => (
      <Link key={term.id} className="mr-2 p-2 mr-2 rounded bg-gray-100" to={`/${termType}/${term.slug}`}>
        {term.name}
      </Link>
    ))}
  </span>
);

const syntaxHighlighter = content => {

  var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g;

  var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi;

  return {__html: content.replace(regex, '<pre class="bg-gray-900 text-gray-100 text-wrap overflow-scroll rounded p-4 font-mono">').replace(regex2, '</pre>') }
}

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, 'category') : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, 'tag') : null}
  </>
);

const Post = ({ pageContext: post }) => {
  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <div className="post-wrapper single-post">
        <header className="entry-header max-w-2xl m-auto mb-6 mt-8">
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title h1 mb-6"
          />

          <PostEntryMeta post={post} />
        </header>
        {post.featuredImage && <PostEntryMedia post={post} location="single" classes="mb-20" />}

        <div
          className="entry-content max-w-2xl m-auto"
          dangerouslySetInnerHTML={syntaxHighlighter(post.content)}
        />
        <footer className="entry-footer max-w-2xl m-auto">
          <BlogOptin />
          <div className="entry-footer__taxonomy justify-end self-center items-center">
            {post.categories.nodes.length || post.tags.nodes.length
              ? renderTerms(post.categories.nodes, post.tags.nodes)
              : null}
          </div>

          <EngagementBar post={post} />

          <CommentList postId={post.postId} />

          <CommentForm postID={post.postId} />
        </footer>

      </div>
      
    </Layout>
  );
};

export default Post;
