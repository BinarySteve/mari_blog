import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2 className="cfont display-3 text-center">Update blog</h2>
            </div>
            <div className="col-md-12">
              <BlogUpdate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
