import Layout from "../components/Layout";

import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
const About = () => {
  let today = new Date();
  let remaingingYears = today.getFullYear() - 2017;
  return (
    <React.Fragment>
      <Layout>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 className="cfont display-3 text-center m-3">Hi I am Mari!</h2>
            </div>
          </div>
          <div class="row">
            <img
              src="./static/images/mari-bg.jpg"
              className="img mx-auto m-5 rounded-pill"
              alt="mari-bg"
              style={{ height: "30rem", width: "35rem" }}
            />
            <div class="col-md-6">
              <div className="card border-0">
                <h5 className="card-title blog-title text-center">About Me</h5>
                <p className="card-text  blog-text text-justify ">
                  I am a married mother of 3 beautiful and rambunctious
                  children. Growing up I knew that living healthy was how I
                  wanted to be. Within the last {remaingingYears} years I have
                  found that way with Young Living. The first time I was
                  introduced to Essential Oils I was hooked. I knew that there
                  had to be a better way to clean, breathe, or to even relax.
                  With all the everyday products that are bought within the
                  stores we are polluting our bodies with toxic chemicals. With
                  Essential Oils I know that we can live a healthier more
                  toxic-free life. I want to share my experiences with you not
                  only as a Young Living Independent Distributor but as a
                  mother, wife, and woman who uses Essential Oils everyday to
                  better the lives of those around me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default About;
