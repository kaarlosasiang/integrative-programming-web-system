import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import StudentsListTable from "./components/students-list.js";
import sweetalert2 from "../../../assets/js/sweetalert2.js";

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

class StudentsList extends View {
  _deleteId = "";
  tableOptions = {
    dom: '<"dataTables_wrapper dt-bootstrap"<"row"<"col-xl-7 d-block d-sm-flex d-xl-block justify-content-center"<"d-block d-lg-inline-flex mr-0 mr-sm-3"l><"d-block d-lg-inline-flex"B>><"col-xl-5 d-flex d-xl-block justify-content-center"fr>>t<"row"<"col-sm-5"i><"col-sm-7"p>>>',
    buttons: [
      { extend: "copy", className: "btn-sm" },
      { extend: "csv", className: "btn-sm" },
      { extend: "excel", className: "btn-sm" },
      { extend: "print", className: "btn-sm" },
    ],
    data: [],
    columns: [
      { data: "ID" },
      { data: "Full Name" },
      { data: "Course" },
      { data: "Institute" },
      { data: "Date Registered" },
      { data: "Edit" },
    ],
    autoWidth: false,
    responsive: true,
    autoFill: true,
    colReorder: false,
    keys: true,
    rowReorder: false,
    select: false,
  };
  table = $("#data-table-combine").DataTable(this.tableOptions);

  generateAppMarkup() {
    return `
        ${PageLoader()}
        <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
            ${Header()}
            ${Sidebar()}

            <div class="content" id="content">
                ${Breadcrumb("Students List")}
                ${PageHeader("Students List")}

                ${Panel(StudentsListTable(), "Students List")}
            </div>
        </div>
    `;
  }

  initializeTableData(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      console.log("Data is empty");

    const dateOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    if ($(window).width() <= 767) {
      this.tableOptions.rowReorder = false;
      this.tableOptions.colReorder = false;
      this.tableOptions.autoFill = false;
    }

    if (data) {
      // Clear table data first every instantiation of the table
      this.tableOptions.data = [];
      // Feed data to the table
      data.forEach((data) => {
        this.tableOptions.data.push({
          ID: data.student_id,
          "Full Name": `${data.firstname} ${data.middlename} ${data.lastname}`,
          Course: data.course,
          Institute: data.institute,
          "Date Registered": new Date(data.registered_at).toLocaleDateString(
            "en-US",
            dateOptions
          ),
          Edit: `
          <div class="d-flex">
            <a class="btn btn-sm btn-primary mr-1 edit-student-btn" href="update-student.html?update=${data.student_id}">Edit</a>
            <a class="btn btn-sm btn-danger delete-student-btn" data-id="${data.student_id}">Delete</a>
          </div>`,
        });
      });
    } else {
      this.tableOptions.data = [];
    }

    // Destroy the every instantiation to avoid duplicate error
    this.table.destroy();
    this.table = $("#data-table-combine").DataTable(this.tableOptions);

    // this.table.on("select", function (e, dt, type, indexes) {
    //   if (type === "row") {
    //     var data = table.rows(indexes).data()[0];

    //     console.log(data);
    //   }
    // });
  }

  bindDeleteHandler(handler) {
    const deleteBtns = document.querySelectorAll(".delete-student-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        sweetalert2
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this._deleteId = e.target.dataset.id;
              handler();
            }
          });
      });
    });
  }

  getDeleteId() {
    return this._deleteId;
  }
}

export default new StudentsList();
