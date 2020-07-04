import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import renderHTML from "react-render-html";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Index = ({ blogs, totalBlogs, router }) => {
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
    if (totalBlogs == 2) {
      return blogs.map((blog, i) => {
        // ()
        return (
          <div className="card shadow col-md-6 p-0">
            <h1 className="card-header tfont text-center text-capitalize bg-transparent border-bottom-0 mb-3">
              {blog.title}
            </h1>
            <div className="card-body">
              <a href={`/blogs/${blog.slug}`}>
                <img
                  className="card-img-top w-100 d-block"
                  src={`${API}/blog/photo/${blog.slug}`}
                  style={{ height: "18rem", width: "22rem" }}
                />
              </a>
              <p className="card-text">{renderHTML(blog.excerpt)}</p>
            </div>
            <div className="card-footer mx-auto bg-transparent ">
              <a href={`/blogs/${blog.slug}`}>
                <span>
                  Read Blog <i className="fas fa-arrow-circle-right"></i>
                </span>
              </a>
            </div>
          </div>
        );
      });
    } else if (totalBlogs > 2) {
      return blogs.map((blog, i) => {
        // ()
        return (
          <div className="card shadow col-md-4 p-0">
            <h1 className="card-header tfont text-center text-capitalize bg-transparent border-bottom-0 mb-3">
              {blog.title}
            </h1>
            <div className="card-body">
              <a href={`/blogs/${blog.slug}`}>
                <img
                  className="card-img-top w-100 d-block"
                  src={`${API}/blog/photo/${blog.slug}`}
                  style={{ height: "18rem", width: "22rem" }}
                />
              </a>
              <p className="card-text">{renderHTML(blog.excerpt)}</p>
            </div>
            <div className="card-footer mx-auto bg-transparent ">
              <a href={`/blogs/${blog.slug}`}>
                <span>
                  Read Blog <i className="fas fa-arrow-circle-right"></i>
                </span>
              </a>
            </div>
          </div>
        );
      });
    } else {
      return blogs.map((blog, i) => {
        return (
          <div className="card shadow col-md-12 p-0">
            <h1 className="card-header tfont text-center text-capitalize bg-transparent border-bottom-0 mb-3">
              {blog.title}
            </h1>
            <div className="card-body">
              <a href={`/blogs/${blog.slug}`}>
                <img
                  className="card-img-top w-100 d-block"
                  src={`${API}/blog/photo/${blog.slug}`}
                  style={{ height: "18rem", width: "22rem" }}
                />
              </a>

              <p className="card-text">{renderHTML(blog.excerpt)}</p>
            </div>
            <div className="card-footer mx-auto bg-transparent ">
              <a href={`/blogs/${blog.slug}`}>
                <span>
                  Read Blog <i className="fas fa-arrow-circle-right"></i>
                </span>
              </a>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="m-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <h2 className="text-center cfont htext">
                  Welcome to Mari's Essential Living
                </h2>
                <p className="text-center">
                  {APP_NAME} is a blog that was created to talk about the
                  everyday life of a stay at home mom that is trying to promote
                  wellness within her family, share it with her friends and
                  others who strive for the same thing.
                </p>
                <hr className="w-75" />
                {totalBlogs > 1 && (
                  <h3 className="display-4 text-center mb-3 pb-3">
                    Latest Articles
                  </h3>
                )}
                {totalBlogs == 1 && (
                  <h3 className="display-4 text-center mb-3 pb-3">
                    Latest Article
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div class="row">{showAllBlogs()}</div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

Index.getInitialProps = () => {
  let skip = 0;
  let limit = 3;
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
