import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/category";
import Tag from "../../../components/crud/tag";
import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5 text-center">
              <h2>Manage Categories and Tags</h2>
            </div>
            <div className="col-md-6 p-3">
                <p className='display-4'>Categories</p>
              <Category />
            </div>
            <div className="col-md-6 p-3">
              <p className='display-4'>Tags</p>
              <Tag />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
