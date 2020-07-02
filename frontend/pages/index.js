import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";

const Index = () => {
  return (
    <Layout>
      <div className="article-list mt-5">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Welcome to Mari's Essential Living</h2>
            <p className="text-center">
              {APP_NAME} is a blog that was created to talk about the everyday
              life of a stay at home mom that is trying to promote wellness
              within her family, share it with her friends and others who strive
              for the same thing.
            </p>
          </div>
          <div className="row articles">
            <div className="col-sm-6 col-md-4 item">
              <a href="#">
                <img className="img-fluid" src="desk.jpg" />
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
                <img className="img-fluid" src="building.jpg" />
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
                <img className="img-fluid" src="loft.jpg" />
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
  );
};

export default Index;
