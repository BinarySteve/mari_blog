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
      <a href={`/blogs/${blog.slug}`}>
        <img className="img-fluid" src={`${API}/blog/photo/${blog.slug}`} />
      </a>

      <h3 className="name">{blog.title}</h3>

      <p className="description">
        Written by {blog.postedBy.name} | Published{" "}
        {moment(blog.updatedAt).fromNow()}
      </p>

      <p className="description">{renderHTML(blog.excerpt)}</p>
      <a className="action" href={`/blogs/${blog.slug}`}>
        <i className="fas fa-arrow-circle-right action"></i>
      </a>
    </React.Fragment>
  );
};

export default Card;
