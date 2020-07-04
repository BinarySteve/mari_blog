import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/category";
import Tag from "../../../components/crud/tag";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5 text-center">
              <h2 className="cfont display-3">Manage <span className="wColor">Categories</span> & <span className="wColor">Tags</span></h2>
            </div>
            <div className="col-md-6 p-3">
              <p className="display-4 cfont text-center wColor">Categories</p>
              <Category />
            </div>
            <div className="col-md-6 p-3">
              <p className="display-4 cfont text-center wColor">Tags</p>
              <Tag />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
