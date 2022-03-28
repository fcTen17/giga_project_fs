import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/"><span className="navbar-brand mb-0 h1 text-danger">Ramdom Users</span></a>
        </nav>
        <div className="container py-3">
          {props.children}
        </div>
        <footer className="p-3 bg-light">
          <div className="container">
            <span className="me-3 text-secondary">built by fcTen</span>
          </div>
        </footer>
    </React.Fragment>
  )
}

export default Layout;