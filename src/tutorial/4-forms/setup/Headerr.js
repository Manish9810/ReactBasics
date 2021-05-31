import React from 'react'

const Headerr = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">About</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" to="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" to="#">ABOUT</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/*props.searchbar?*/ <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>/*:"NO search bar"*/ }
    </div>
  </div>
</nav>
</>
        
    )
}

export default Headerr
