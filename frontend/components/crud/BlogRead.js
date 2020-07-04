import Link from "next/link";
import { useState, useEffect } from "react";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";
import moment from "moment";

const BlogRead = () => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  const deleteBlog = (slug) => {
    removeBlog(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      `Are you sure you want to delete "${slug
        .toLowerCase()
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ")}"?`
    );
    if (answer) {
      deleteBlog(slug);
    }
  };

  const showUpdateButton = (blog) => {
    if (isAuth() && isAuth().role === 1) {
      return (
        <Link href={`/admin/crud/${blog.slug}`}>
          <a className="m-5 btn ld-btn-update btn-outline-secondary rounded">
            <i class="fas fa-user-edit"> Update</i>
          </a>
        </Link>
      );
    }
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div key={i} className="card w-75 mx-auto text-center shadow m-3">
          <div className="blog-body">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-text">
              Written by {blog.postedBy.name} | Published on{" "}
              {moment(blog.updatedAt).fromNow()}
            </p>
            {showUpdateButton(blog)}
            <button
              className=" m-5 btn ld-btn-danger btn-outline-secondary rounded "
              onClick={() => deleteConfirm(blog.slug)}
            >
              <i class="fas fa-trash-alt"> Delete</i>
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          {message && <div className="alert alert-warning">{message}</div>}
          {showAllBlogs()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogRead;
