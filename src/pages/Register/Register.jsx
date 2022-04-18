import React from "react";
import { Row } from "react-bootstrap";

export const RegisterPage = () => {
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
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="true"
            >
              Register
            </a>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form>
              {/* <!-- Name input --> */}
              <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>

              {/* <!-- Username input --> */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-3">
                Register
              </button>
            </form>
          </div>
        </div>
        {/* <!-- Pills content --> */}
      </Row>
    </React.Fragment>
  );
};
