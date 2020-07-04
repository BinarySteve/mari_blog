import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { isAuth, getCookie } from "../../actions/auth";
import { create, getCategories, removeCategory } from "../../actions/category";

const Category = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false,
  });

  const {
    name,
    error,
    success,
    categories,
    removed,
    reload,
    successMsg,
  } = values;
  const token = getCookie("token");

  useEffect(() => {
    loadCategories();
  }, [reload]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showCategories = () => {
    return categories.map((c, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(c.slug)}
          title="Double Click to Delete"
          key={i}
          className="btn btn-outline ld-btn m-3"
        >
          <i class="fas fa-book"> {c.name}</i>
        </button>
      );
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      `Are you sure you want to delete "${slug.toUpperCase()}" as a category?`
    );
    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = (slug) => {
    removeCategory(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          removed: !removed,
          reload: !reload,
        });
      }
    });
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    // console.log('create category', name);
    create({ name }, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
          name: "",
          removed: "",
          reload: !reload,
          successMsg: `"${data.name.toUpperCase()}" was created as a category`,
        });
      }
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: "",
    });
  };

  const showSuccess = () => {
    if (success) {
      return <p className="text-success">{successMsg}</p>;
    }
  };
  const showError = () => {
    if (error) {
      return <p className="text-danger">Category already exists!</p>;
    }
  };
  const showRemoved = () => {
    if (removed) {
      return <p className="text-danger">Category Deleted Successfully</p>;
    }
  };
  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };
  const newCategoryForm = () => (
    <form className="mt-5" onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control m-search"
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn ld-btn btn-outline-secondary rounded"
        >
          <i class="far fa-edit"> Create</i>
        </button>
      </div>
    </form>
  );
  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      {showCategories()}
      <hr/>
      <div onMouseMove={mouseMoveHandler}>{newCategoryForm()}</div>
    </React.Fragment>
  );
};

export default Category;
