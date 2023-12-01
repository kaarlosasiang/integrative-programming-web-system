import * as helpers from "../helpers.js";

export default function Header() {
  return `
  <div id="header" class="header navbar-default">
    <!-- begin navbar-header -->
    <div class="navbar-header">
        <a href="index.html" class="navbar-brand"
        ><span class="navbar-logo"></span> <b>ITPE130</b>Web System</a
        >
        <button
        type="button"
        class="navbar-toggle"
        data-click="sidebar-toggled"
        >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
    </div>
    ${ProfileDropdown()}
  </div>
  `;
}

const SearchBar = () => {
  return `
        <li class="navbar-form">
            <form action="" method="POST" name="search">
            <div class="form-group">
                <input
                type="text"
                class="form-control"
                placeholder="Enter keyword"
                />
                <button type="submit" class="btn btn-search">
                <i class="fa fa-search"></i>
                </button>
            </div>
            </form>
        </li>
    `;
};

const ProfileDropdown = () => {
  const current_user = JSON.parse(helpers.getDataLocalStorage("current_user"));

  return `
    <ul class="navbar-nav navbar-right">
        <li class="dropdown navbar-user">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="./assets/img/user/user-12.jpg" alt="" />
                <span class="d-none d-md-inline">${current_user.firstname} ${current_user.lastname}</span>
                <b class="caret"></b>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="login.html?logout=1" class="dropdown-item">Log Out</a>
            </div>
        </li>
    </ul>
    `;
};
