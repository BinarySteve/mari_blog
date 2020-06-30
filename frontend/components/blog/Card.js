import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  return (
    <React.Fragment>
      <div className="card rounded shadow-lg">
        <h3 className="article-clean text-center display-4"><a href={`/blogs/${blog.slug}`}>{blog.title.toUpperCase()}</a></h3>
        <small className="text-muted text-center">
          Written by {blog.postedBy.name} | Published{" "}
          {moment(blog.updatedAt).fromNow()}
        </small>
        <div className="row mt-5">
          <div className="col-md-6">
            <a href={`/blogs/${blog.slug}`}>
              <img
                className="img-fluid"
                src={`${API}/blog/photo/${blog.slug}`}
              />
            </a>
          </div>
          <div className="card-body col-md-6">
            <p className="card-text">{renderHTML(blog.excerpt)}</p>
            <a href={`/blogs/${blog.slug}`}>
              <span >Read Blog <i className="fas fa-arrow-circle-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
