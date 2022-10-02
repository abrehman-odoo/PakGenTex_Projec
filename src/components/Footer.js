import React from 'react'

export default function footer() {
  return (
    <div><footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-facebook" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-linkedin" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fa fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Last Updated On :
      <h2>2 Oct 2022</h2>
    </div>
  </footer>
  </div>
  )
}
