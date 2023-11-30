import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageLoader from "../../components/PageLoader.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import TotalNumbers from "./components/TotalNumbers.js";

// Table Plugins
import "../../../assets/plugins/datatables.net/js/jquery.dataTables.min.js";
import "../../../assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js";
import "../../../assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-autofill/js/dataTables.autofill.min.js";
import "../../../assets/plugins/datatables.net-autofill-bs4/js/autofill.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-colreorder/js/dataTables.colreorder.min.js";
import "../../../assets/plugins/datatables.net-colreorder-bs4/js/colreorder.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-keytable/js/dataTables.keytable.min.js";
import "../../../assets/plugins/datatables.net-keytable-bs4/js/keytable.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-rowreorder/js/dataTables.rowreorder.min.js";
import "../../../assets/plugins/datatables.net-rowreorder-bs4/js/rowreorder.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-select/js/dataTables.select.min.js";
import "../../../assets/plugins/datatables.net-select-bs4/js/select.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-buttons/js/dataTables.buttons.min.js";
import "../../../assets/plugins/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js";
import "../../../assets/plugins/datatables.net-buttons/js/buttons.colVis.min.js";
import "../../../assets/plugins/datatables.net-buttons/js/buttons.flash.min.js";
import "../../../assets/plugins/datatables.net-buttons/js/buttons.html5.min.js";
import "../../../assets/plugins/datatables.net-buttons/js/buttons.print.min.js";
import "../../../assets/plugins/jszip/dist/jszip.min.js";
import PerCourseTable from "./components/PerCourseTable.js";
import PerInstituteTable from "./components/PerInstituteTable.js";
import Panel from "../../components/Panel.js";

class DashboardView extends View {
  studentPerCourseTableOptions = {
    dom: '<"dataTables_wrapper dt-bootstrap"<"row"<"col-xl-7 d-block d-sm-flex d-xl-block justify-content-center"<"d-block d-lg-inline-flex mr-0 mr-sm-3"l><"d-block d-lg-inline-flex"B>><"col-xl-5 d-flex d-xl-block justify-content-center"fr>>t<"row"<"col-sm-5"i><"col-sm-7"p>>>',
    buttons: [
      { extend: "copy", className: "btn-sm" },
      { extend: "csv", className: "btn-sm" },
      { extend: "excel", className: "btn-sm" },
      { extend: "print", className: "btn-sm" },
    ],
    data: [],
    columns: [{ data: "Course" }, { data: "Students" }],
    autoWidth: false,
    responsive: true,
    autoFill: true,
    colReorder: false,
    keys: true,
    rowReorder: false,
    select: false,
  };
  studentsPerCourseTable = $("#data-table-combine").DataTable(
    this.studentPerCourseTableOptions
  );

  studentPerInstituteTableOptions = {
    dom: '<"dataTables_wrapper dt-bootstrap"<"row"<"col-xl-7 d-block d-sm-flex d-xl-block justify-content-center"<"d-block d-lg-inline-flex mr-0 mr-sm-3"l><"d-block d-lg-inline-flex"B>><"col-xl-5 d-flex d-xl-block justify-content-center"fr>>t<"row"<"col-sm-5"i><"col-sm-7"p>>>',
    data: [],
    columns: [{ data: "Institute" }, { data: "Students" }],
    autoWidth: false,
    responsive: true,
    autoFill: true,
    colReorder: false,
    keys: true,
    rowReorder: false,
    select: false,
  };
  studentsPerInstituteTable = $("#data-table-combine-2").DataTable(
    this.tableOptions
  );

  generateAppMarkup() {
    return `
        ${PageLoader()}
        <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
            ${Header()}
            ${Sidebar()}

        <div id="content" class="content">
        
          ${Breadcrumb()}
          <h1 class="page-header">
            Dashboard
          </h1>
        <!-- end page-header -->

        <!-- begin row -->
        <div class="row" id="totals"></div>
        <div class="row" id="students-per-institute"></div>
        <div class="row" id="students-per-course">
          <div class="col-6">
          ${Panel(PerCourseTable(), "Students Per Course")}
          </div>
          <div class="col-6">
          ${Panel(PerInstituteTable(), "Students Per Institute")}
          </div>
        </div>
        <!-- end row -->
      </div>
            
      </div>
    `;
  }

  renderTotalsSection(data) {
    const totalsSection = document.getElementById("totals");

    totalsSection.innerHTML = "";
    totalsSection.innerHTML = TotalNumbers(
      data.student_count,
      data.faculty_count
    );
  }

  initializeStudentsPerCourseTable(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      console.log("Data is empty");

    if ($(window).width() <= 767) {
      this.studentPerCourseTableOptions.rowReorder = false;
      this.studentPerCourseTableOptions.colReorder = false;
      this.studentPerCourseTableOptions.autoFill = false;
    }

    if (data) {
      // Clear table data first every instantiation of the table
      this.studentPerCourseTableOptions.data = [];

      Object.entries(data.student_count_by_course).forEach(([key, value]) => {
        this.studentPerCourseTableOptions.data.push({
          Course: key,
          Students: value,
        });
      });
    } else {
      this.studentPerCourseTableOptions.data = [];
    }

    // Destroy the every instantiation to avoid duplicate error
    this.studentsPerCourseTable.destroy();
    this.studentsPerCourseTable = $("#data-table-combine").DataTable(
      this.studentPerCourseTableOptions
    );
    this.studentsPerCourseTable.buttons().destroy();
  }

  initializeStudentsPerInstituteTable(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      console.log("Data is empty");

      console.log(data.student_count_by_institute);

    if ($(window).width() <= 767) {
      this.studentPerInstituteTableOptions.rowReorder = false;
      this.studentPerInstituteTableOptions.colReorder = false;
      this.studentPerInstituteTableOptions.autoFill = false;
    }

    if (data) {
      // Clear table data first every instantiation of the table
      this.studentPerInstituteTableOptions.data = [];

      Object.entries(data.student_count_by_institute).forEach(([key, value]) => {
        this.studentPerInstituteTableOptions.data.push({
          Institute: key,
          Students: value,
        });
      });
    } else {
      this.studentPerInstituteTableOptions.data = [];
    }

    // Destroy the every instantiation to avoid duplicate error
    this.studentsPerInstituteTable.destroy();
    this.studentsPerInstituteTable = $("#data-table-combine-2").DataTable(
      this.studentPerInstituteTableOptions
    );
    this.studentsPerInstituteTable.buttons().destroy();
  }
}

export default new DashboardView();
