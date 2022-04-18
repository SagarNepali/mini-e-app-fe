import "./LoginPage.css";

import React from "react";
import { Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <React.Fragment>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        {/* <!-- Pills navs --> */}
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Username
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default LoginPage;
