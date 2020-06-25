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

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
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
        {message && <p className="pt-4 text-muted font-italic">{message}</p>}

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
          />
        </div>
        <button className="btn btn-light action-button" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </React.Fragment>

    // <form onSubmit={searchSubmit}>
    //   <div className="row">
    //     <div className="col-md-8">
    //       <input
    //         type="search"
    //         className="form-control shadow rounded-lg"
    //         placeholder="Search blogs"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="col-md-4">
    //       <button className="btn btn-block btn-danger shadow rounded-pill" type="submit">
    //         Search
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );

  return (
    <React.Fragment>
      <div>{searchForm()}</div>
      {searched && (
        <div style={{ marginTop: "-120px", marginBottom: "-80px" }}>
          {searchedBlogs(results)}
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
