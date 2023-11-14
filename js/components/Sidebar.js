export default function Sidebar() {
  return `
    <div id="sidebar" class="sidebar">
        <!-- begin sidebar scrollbar -->
        <div data-scrollbar="true" data-height="100%">
            ${UserSidebar()}
            ${SidebarNav()}
        </div>
    </div>
    <div class="sidebar-bg"></div>
  `;
}

const UserSidebar = () => {
  return `
    <ul class="nav">
        <li class="nav-profile">
            <a href="javascript:;" data-toggle="nav-profile">
                <div class="cover with-shadow"></div>
                <div class="image">
                <img src="./assets/img/user/user-13.jpg" alt="" />
                </div>
                <div class="info">
                <b class="caret pull-right"></b>Sean Ngu
                <small>Front end developer</small>
                </div>
            </a>
            </li>

            <li>
            <ul class="nav nav-profile">
                <li>
                <a href="javascript:;"
                    ><i class="icon-settings"></i> Settings</a
                >
                </li>
                <li>
                <a href="javascript:;"
                    ><i class="icon-pencil"></i> Send Feedback</a
                >
                </li>
                <li>
                <a href="javascript:;"><i class="icon-question"></i> Helps</a>
                </li>
            </ul>
        </li>
    </ul>
    `;
};

const SidebarNav = () => {
  return `
    <ul class="nav">
        <li class="nav-header">Navigation</li>
        <li class="has-sub">
            <a href="javascript:;">
                <b class="caret"></b>
                <i class="icon-screen-desktop"></i>
                <span>Dashboard</span>
            </a>
            <ul class="sub-menu">
                <li><a href="index.html">Dashboard v1</a></li>
                <li><a href="index_v2.html">Dashboard v2</a></li>
                <li><a href="index_v3.html">Dashboard v3</a></li>
            </ul>
        </li>

        <li>
            <a href="calendar.html">
                <i class="icon-calendar"></i>
                <span>Calendar</span>
            </a>
        </li>

        <!-- begin sidebar minify button -->
        <li>
            <a
                href="javascript:;"
                class="sidebar-minify-btn"
                data-click="sidebar-minify"
                ><i class="fa fa-angle-double-left">
                </i>
            </a>
        </li>
        <!-- end sidebar minify button -->
    </ul>
    `;
};
