import Layout from "../components/Layout";

import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
const About = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="container-fluid mt-5">
          <h3 className="article-clean text-center display-4">Hi I am Mari</h3>
          <div className="row">
            <img
              className="img-fluid rounded-pill col-md-6"
              src={"./static/images/mari-bg.jpg"}
            />
            <p className="cold-md-6">I am an essential oil Freak!!</p>
          </div>

          <div className="container-fluid">
            <div className="row m-5"></div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default About;
