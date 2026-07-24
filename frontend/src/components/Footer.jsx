import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-surface-container-lowest border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

        <div className="max-w-xs">
          <span className="font-headline-h4 text-headline-h5 font-bold text-on-surface block mb-3">
            SafeReport
          </span>
          <p className="text-caption font-caption text-on-surface-variant leading-relaxed">
            © 2024 Ministry of Gender, Community Development and Social Welfare, Malawi.
            Providing protection and support for every citizen.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-label-btn text-body-sm text-on-surface">Resources</span>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/resources">Forms &amp; Documents</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/resources">Annual Reports</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/resources">Policy Papers</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-btn text-body-sm text-on-surface">Legal</span>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="#">Privacy Policy</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="#">Accessibility</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="#">Terms of Use</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-btn text-body-sm text-on-surface">Connect</span>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/contact">Emergency Contacts</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/contact">District Offices</Link>
            <Link className="text-caption text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;