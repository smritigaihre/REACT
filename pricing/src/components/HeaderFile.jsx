import React from 'react';

const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              fill="currentColor"
              className="bi bi-braces"
              viewBox="0 0 16 16"
            >
              <path d="M3 2.75c0-1.153-.836-2-2-2v1c.563 0 1 .418 1 1v2.5c0 .628-.458 1.266-.957 1.646-.187.14-.355.279-.523.437a2.056 2.056 0 0 0-.52.673c-.105.216-.173.459-.173.744 0 .284.068.528.173.744.133.272.312.479.52.673.168.158.336.297.523.437.499.38.957 1.018.957 1.646V13.25c0 .582-.418 1-1 1v1c1.164 0 2-.847 2-2V11.75c0-.822-.542-1.484-1.116-1.921a5.735 5.735 0 0 1-.391-.327.93.93 0 0 1-.18-.227.181.181 0 0 1-.063-.126.266.266 0 0 1 .063-.126c.06-.086.129-.153.18-.227.115-.136.26-.26.391-.327C2.458 8.734 3 8.072 3 7.25V2.75zm12 0c0-1.153.836-2 2-2v1c-.563 0-1 .418-1 1v2.5c0 .628.458 1.266.957 1.646.187.14.355.279.523.437.208.194.387.401.52.673.105.216.173.459.173.744 0 .284-.068.528-.173.744a2.056 2.056 0 0 1-.52.673 7.025 7.025 0 0 1-.523.437c-.499.38-.957 1.018-.957 1.646V13.25c0 .582.418 1 1 1v1c-1.164 0-2-.847-2-2V11.75c0-.822.542-1.484 1.116-1.921.115-.084.246-.189.391-.327.051-.074.12-.141.18-.227a.266.266 0 0 0 .063-.126.181.181 0 0 0-.063-.126.93.93 0 0 0-.18-.227 5.735 5.735 0 0 0-.391-.327C13.542 8.734 13 8.072 13 7.25V2.75z" />
            </svg>
            <span className="fs-4 ms-2">Pricing Example</span>
          </a>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#features" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="#enterprise" className="nav-link px-2 text-white">Enterprise</a></li>
            <li><a href="#support" className="nav-link px-2 text-white">Support</a></li>
            <li><a href="#pricing" className="nav-link px-2 text-white">Pricing</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header