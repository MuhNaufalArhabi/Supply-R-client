export default function Footer() {
  return (
    <>
      <section className="">
        {/* Footer */}
        <footer
          className=" text-white text-center text-md-start"
          style={{
            backgroundColor: "#2596be",

            color: "white",
          }}
        >
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">SUPPLY - R</h5>
                <p>
                  We are a company that provides a bridge for UMKM and other
                  interested company to build a relationship through buyer -
                  seller transaction. We really hopes that what we're doing will
                  help more people and little UMKM to grow and finally help our
                  country economic growth.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Social Media</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Phone
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "#204e64" }}
          >
            © 2022 Copyright: SUPPLY-R
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </>
  );
}
