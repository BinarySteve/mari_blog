import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Footer from "../components/Footer";

const Blogs = ({
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
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

const Privacy = () => {
return (
    {head()}
    <Layout/>
    <React.Fragment>
<div className="col-md-6 col-md-offset-3">

<h2 align="center">Privacy Policy</h2><br>

    <p>The following Privacy Policy governs the online information collection practices of yourwebsitename.com (“we” or “us” or “Site”). By visiting and using the Site, you agree that your use of our Site, and any dispute over privacy, is governed by this Privacy Policy. This Site strives to offer its visitors the many advantages of Internet technology and to provide an interactive and personalized experience. We may use Personally Identifiable Information (your name, e-mail address and/or your contact details) subject to the terms of this privacy policy.</p>

    <p>We may collect and store personal or other information that you voluntarily supply to us online while using the Site (e.g., while on the Site, submitting a form or in responding via email to a feature provided on the Site). This Site only contacts individuals who specifically request that we do so or in the event that they have signed up to receive our free newsletters or submitted a form. All of this information is provided to us by you.</p>


    <p>We also collect and store information that is generated automatically as you navigate online through the Site. For example, we may collect information about your computer’s connection to the Internet, which allows us, among other things, to improve the delivery of our web pages to you and to measure traffic on the Site. We also may use a standard feature found in browser software called a “cookie” to enhance your experience with the Site. Cookies are small files that your web browser places on your hard drive for record-keeping purposes. By showing how and when visitors use the Site, cookies help us deliver advertisements, identify how many unique users visit us, and track user trends and patterns.</p>


    <p>We may also make some content, products and services available through our Site through cooperative relationships with third-party providers, where the brands of our provider partner appear on the Site in connection with such content, products and/or services. We may share with our provider partner any information you provide, or that is collected, in the course of visiting any pages that are made available in cooperation with our provider partner. In some cases, the provider partner may collect information from you directly, in which cases the privacy policy of our provider partner may apply to the provider partner’s use of your information. The privacy policy of our provider partners may differ from ours. If you have any questions regarding the privacy policy of one of our provider partners, you should contact the provider partner directly for more information.</p>


</div>
</React.Fragment>
<Footer/> )}

export default Privacy;