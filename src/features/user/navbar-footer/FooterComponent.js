import { CFooter } from "@coreui/react";
import "./css/footer.css";
export default function Footer() {
  return (
    <>
      <CFooter className="footer">
        <div>
          <a className="footer-links" href="#">
            AboutUS
          </a>
          <a className="footer-links" href="#">
            Contact US
          </a>
        </div>
        <div>
          <a className="footer-links" href="#">
            Github
          </a>
          <a className="footer-links" href="#">
            BestBuy.com
          </a>

          <span>&copy; 2022 .</span>
        </div>
      </CFooter>
    </>
  );
}
