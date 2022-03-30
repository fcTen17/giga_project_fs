import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand navbar-light bg-primary p-2">
          <a  href="/"><span className="navbar-brand mb-0 p-3 h1 text-white "><i className="fa fa-address-card-o" aria-hidden="true"></i>Gigaservices - Ramdom Users</span></a>
        </nav>
        <div className="container py-3">
          {props.children}
        </div>
        <footer className="p-3 bg-secondary">
          <div className="container">
            <span className="me-3 text-white">built by fcTen</span>
          </div>
        </footer>
    </React.Fragment>
  )
}

export default Layout;