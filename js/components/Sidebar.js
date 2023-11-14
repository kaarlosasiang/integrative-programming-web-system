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
        <li>
            <a href="/">
                <i class="icon-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        
        <li class="has-sub">
            <a href="javascript:;">
                <b class="caret"></b>
                <i class="icon-user"></i>
                <span>Manage Students</span>
            </a>
            <ul class="sub-menu">
                <li><a href="add-student.html">Add Student</a></li>
                <li><a href="students-list.html">List of Students</a></li>
            </ul>
        </li>

        <li class="has-sub">
            <a href="javascript:;">
                <b class="caret"></b>
                <i class="icon-user"></i>
                <span>Manage Faculty</span>
            </a>
            <ul class="sub-menu">
                <li><a href="add-student.html">Add Staff</a></li>
                <li><a href="students.html">List of Staff</a></li>
            </ul>
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
