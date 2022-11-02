import Link from '@mui/material/Link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-menu">
          <Link href="#" underline="none" color="inherit">
            Models
          </Link>
          <Link href="#" underline="none" color="inherit">
            About
          </Link>
          <Link href="#" underline="none" color="inherit">
            Contacts
          </Link>
        </div>
        <div className="copyright">
          © 2022 AUTO DEMO, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;