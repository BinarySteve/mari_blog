import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Index = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title>Essential Oil Blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Essential Oil Blogs involving Young Living Oils and their usage for a healthier life"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Blogs about essential oil usage | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Essential Oil Blogs involving Young Living Oils and their usage for a healthier life"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/mari-logo.jpng`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/mari-logo.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="article-list mt-5">
          <div className="container">
            {showAllBlogs()}
            <div className="intro">
              <h2 className="text-center">
                Welcome to Mari's Essential Living
              </h2>
              <p className="text-center">
                {APP_NAME} is a blog that was created to talk about the everyday
                life of a stay at home mom that is trying to promote wellness
                within her family, share it with her friends and others who
                strive for the same thing.
              </p>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a className="action" href="#">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a className="action" href="#">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a className="action" href="#">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

Index.getInitialProps = () => {
  let skip = 0;
  let limit = 0;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};
export default withRouter(Index);
