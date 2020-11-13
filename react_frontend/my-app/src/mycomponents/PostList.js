import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "../../../node_modules/react-router-dom";
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postss: [],
    };
  }
  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ postss: json });
      });
  }
  render() {
    return (
      <div className="container all-margin-top">
        <h1 className="mt-4 mb-3">
          Blog Home Two
          <small>Subheading</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/posts" href="index.html">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Blog Home 2</li>
        </ol>

        {/**Blog Post */}
        {this.state.postss.map((pst) => (
          <div key={pst.id} className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <Link to="/detailss" >
                    <img
                      className="img-fluid rounded"
                      src="http://placehold.it/750x300"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-lg-6">
                  <h2 className="card-title">{pst.title}</h2>
                  <p className="card-text">{pst.body}</p>
                  <Link to={"/details/"+pst.id} className="btn btn-primary">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2017 by
              <Link to="#" href="#">
                Start Bootstrap
              </Link>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <ul className="pagination justify-content-center mb-4">
          <li className="page-item">
            <Link to="#" className="page-link" href="#">
              &larr; Older
            </Link>
          </li>
          <li className="page-item disabled">
            <Link to="#" className="page-link" href="#">
              Newer &rarr;
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default PostList;
