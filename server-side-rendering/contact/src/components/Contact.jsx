import React from "react";
export default function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };
  return (
    <section>
      <div className="container px-5 my-5">
        <div className="d-flex justify-content-center">
          <form style={{ width: "26rem" }} onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label">Name</label>
              <input type="text" id="form4Example1" className="form-control" name="name"/>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label">Email address</label>
              <input type="email" id="form4Example2" className="form-control" name="email" />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label">Message</label>
              <textarea
              name="message"
                className="form-control"
                id="form4Example3"
                rows={4}
              ></textarea>
            </div>

            <button
              data-mdb-ripple-init
              type="submit"
              className="btn btn-primary btn-block mb-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
