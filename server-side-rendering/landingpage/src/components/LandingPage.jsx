import React from "react";
export default function LandingPage() {
  return (
    <section>
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">
        Welcome to the micro-frontend world!
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This is an example of how powerful micro-frontends can be!
          <br />
          You may integrate all of your frontend apps, regardless of what
          frameworks they're built with.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a
            href="https://single-spa.js.org/"
            className="btn btn-primary btn-lg px-4 me-sm-3"
            target="_blank">
            Learn more
          </a>
        </div>
      </div>
      <div className="overflow-hidden" >
        <div className="container px-5">
          <img
            src="https://mirbozorgi.com/wp-content/uploads/2022/05/Asset-1-min-1200x800.png"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  );
}
