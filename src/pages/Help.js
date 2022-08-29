import React from 'react'
import Bar from '../components/Bar'

export default function Help() {
  return (
    <div>
      <Bar />
      <br />
      <br />
      <div className="container">
        <div className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Help!
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            You can ask help any time. Our platform is available 24/7
          </p>
          <div className="row">
            <div className='col-md-12 mb-5'>
            <h2 className='px-1'> FAQs</h2>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        What is PakGenTex ?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      
      <div className="accordion-body">
        <strong>PakGenTex is basically a group of different words which we will explore using this web site.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        What is the purpose of PakGenTex ?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        What type of text include in pakgentex ?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>

            </div>
            <h4 className='justify-content-center align-items-center d-flex'>Ask Questions in Detail!</h4>
            <div className="col-md-12  mb-5">
              <form>
                <div class="mb-3">
                  <label for="exampleInput">
                    <h6>Your Name</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    <h6>Email Address</h6>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInput"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    <h6>Subject</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    <h6>Message</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInpu"
                    placeholder="Add Message"
                  />
                </div>
                <br />
                <div className='justify-content-center align-items-center d-flex'>

                <button type="submit" class="btn btn-danger">
                  Send Your Message
                </button>
                </div>
              </form>
            </div>
            {/* logos */}
            <div>
              <h3 className='justify-content-center align-items-center d-flex'>Approach By Different Platforms</h3><footer className="text-center text-white">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn-floating  m-2"
          href="#!"
          role="button"
          style={{color:'#3B5998'}}
        >
          <i className="fa fa-facebook fa-2x" />
        </a>
        {/* Twitter */}
        <a
          className=" btn-floating m-2"
          href="#!"
          role="button"
          style={{color:'#55ACEE'}}
        >
          <i className="fa fa-twitter fa-2x" />
        </a>
        {/* Google */}
        <a
          className="btn-floating m-2"
          href="#!"
          role="button"
          style={{color:'#DD4B39'}}
        >
          <i className="fa fa-google fa-2x" />
        </a>
        {/* Linkedin */}
        <a
          className=" btn-floating m-2"
          href="#!"
          role="button"
          style={{color:'#007BB6'}}
        >
          <i className="fa fa-linkedin fa-2x" />
        </a>
        {/* Github */}
        <a
          className=" btn-floating m-2 fa-2x"
          style={{color:'#444444'}}
          href="#!"
          role="button"
        >
          <i className="fa fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
  </footer>
  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
