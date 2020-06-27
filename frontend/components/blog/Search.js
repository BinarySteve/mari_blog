import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message, emptyMessage, singleMessage } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} Blogs found`,
        emptyMessage: '0 Blogs found',
        singleMessage: '1 Blog found'
      });
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="jumbotron bg-white">
        {results.length == 0 && message && <p className="pt-4 text-muted font-italic">{emptyMessage}</p>}
        {results.length == 1 && message && <p className="pt-4 text-muted font-italic">{singleMessage}</p>}
        {results.length > 1 && message && <p className="pt-4 text-muted font-italic">{message}</p>}


        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="text-primary">{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <React.Fragment>
      <form className="form-inline ml-auto" onSubmit={searchSubmit}>
        <div className="form-group">
          <input
            className="form-control search-field"
            placeholder="Search blogs"
            type="search"
            id="search-field"
            name="search"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button className="btn btn-light action-button" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div>{searchForm()}</div>
      {searched && <div>{searchedBlogs(results)}</div>}
    </React.Fragment>
  );
};

export default Search;
