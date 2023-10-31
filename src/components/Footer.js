export default function Footer() {
  return (
    <div className="wrapper ">
      <footer className="text-white text-center text-lg-start bg-primary">
        <div className="container p-1 ">
          <div className="row ">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">KAP MART</h5>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <ul className="fa-ul">
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="ms-2">Vijay Nagar, 157, Indore</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="ms-2">kap@bestpeers.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">+91_1234567890</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center ">
          © 2023 Copyright: Kapil Thakur
          {/* <a className="text-white" href="https://github.com/kapil23102002"></a> */}
        </div>
      </footer>
    </div>
  );
}
