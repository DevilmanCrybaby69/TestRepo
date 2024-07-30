import React from 'react'

const Header = () => {
  return (
    <div>
      <nav
  className="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
  data-nav="brand-center"
>
  <div className="navbar-container d-flex content">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="navbar-brand" href="#">
          <img
            src="assets/custom/images/logo_final_white.png"
            className="headerlogo"
          />
        </a>
      </li>
    </ul>
    <ul className="nav navbar-nav d-xl-none">
      <li className="nav-item">
        <a className="nav-link menu-toggle" href="javascript:void(0);">
          <i className="ficon" data-feather="menu" />
        </a>
      </li>
    </ul>
    <ul className="nav navbar-nav menusection">
      <div
        className="header-navbar navbar-expand-sm navbar navbar-horizontal  "
        role="navigation"
        data-menu="menu-wrapper"
        data-menu-type="floating-nav"
      >
        <div
          className="navbar-container main-menu-content"
          data-menu="menu-container"
        >
          <ul
            className="nav navbar-nav"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className="dropdown nav-item" data-menu="dropdown">
              <a
                className="dropdown-toggle nav-link d-flex align-items-center"
                href="#"
                data-toggle="dropdown"
              >
                <i className="far fa-edit" />
                Master
                <i className="fas fa-chevron-down m-l-5 mr-0" />
              </a>
              <ul className="dropdown-menu menuscroll">
                <li className="" data-menu="" id="product_master">
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/productmaster"
                    data-toggle="dropdown"
                  >
                    <i className="far fa-circle" />
                    <span>Product Master</span>
                  </a>
                </li>
                <li className="" data-menu="" id="category_master">
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/category"
                    data-toggle="dropdown"
                  >
                    <i className="far fa-circle" />
                    <span>Category Master</span>
                  </a>
                </li>
                <li className="" data-menu="" id="sub_category_master">
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/subcategory"
                    data-toggle="dropdown"
                  >
                    <i className="far fa-circle" />
                    <span>Sub Category Master</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom" />
      </div>
    </ul>
    <ul className="nav navbar-nav align-items-center ml-auto profilesection">
      <li className="nav-item dropdown dropdown-user">
        <a
          className="nav-link dropdown-toggle dropdown-user-link"
          id="dropdown-user"
          href="javascript:void(0);"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name font-weight-bolder" id="username">
              John Doe
            </span>
            <span className="user-status">Admin</span>
          </div>
          <span className="avatar">
            <img
              className="round"
              src="assets/images/portrait/small/avatar-s-11.jpg"
              alt="avatar"
              height={40}
              width={40}
            />
            <span className="avatar-status-online" />
          </span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdown-user"
        >
          <a className="dropdown-item" href="/logout">
            <i className="mr-50" data-feather="power" /> Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Header
