import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const adminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2 className="text-center display-3 cfont">Admin Dashboard</h2>
            </div>
          </div>
          <div className="row"></div>

          <div className="w-50 mx-auto mb-5 tfont text-center">
            <ul className="list-group-flush">
              <li className="list-group-item">
                <Link href="/admin/crud/category-tag">
                  <a>Create Category/Tag</a>
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="/admin/crud/blog">
                  <a>Create Blog</a>
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="/admin/crud/blogs">
                  <a>Update/Delete Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8"></div>
        </div>
      </Admin>
    </Layout>
  );
};

export default adminIndex;
