import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import AddCourseForm from "./components/AddCourseForm.js";
import CoursesTable from "./components/CoursesTable.js";

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

class CoursesView extends View {
  _formData = {};
  _deleteID = "";
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
      { data: "Title" },
      { data: "Slug" },
      { data: "Institute" },
      { data: "Description" },
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
                    ${Breadcrumb("Courses")}
                    ${PageHeader("Courses")}

                    ${Panel(AddCourseForm(), "Add Course Form")}
                    ${Panel(CoursesTable(), "Courses List")}
                </div>
        </div>
    `;
  }

  initializeCoursesTable(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      console.log("Data is empty");

    if ($(window).width() <= 767) {
      this.tableOptions.rowReorder = false;
      this.tableOptions.colReorder = false;
      this.tableOptions.autoFill = false;
    }

    if (Array.isArray(data.data) && data.data.length > 0) {
      // Clear table data first every instantiation of the table
      this.tableOptions.data = [];
      data.data.forEach((course) => {
        this.tableOptions.data.push({
          ID: course.id,
          Title: course.title,
          Slug: course.slug,
          Institute: course.institute,
          Description: course.description,
          Edit: `
          <div class="d-flex">
            <a class="btn btn-sm btn-primary mr-1 edit-subject-btn" data-user='${JSON.stringify(
              course
            )}'>Edit</a>
            <a class="btn btn-sm btn-danger delete-course-btn" data-id="${
              course.id
            }">Delete</a>
          </div>`,
        });
      });
    } else {
      this.tableOptions.data = [];
    }

    // Destroy the every instantiation to avoid duplicate error
    this.table.destroy();
    this.table = $("#data-table-combine").DataTable(this.tableOptions);
  }

  bindAddCourseHandler(handler) {
    const form = document.getElementById("add-course-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this._formData = {
        title: e.target.elements.title.value.trim(),
        slug: e.target.elements.slug.value.trim(),
        description: e.target.elements.description.value.trim(),
        institute: e.target.elements.institute.value.trim(),
      };

      handler();
    });
  }

  getFormData() {
    return { ...this._formData };
  }

  initializeInstitutesDropdown(data) {
    const instituteSelect = document.getElementById("institute");

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select an Institute";

    instituteSelect.appendChild(defaultOption);

    for (let i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.value = data[i].slug;
      option.text = data[i].title;

      instituteSelect.appendChild(option);
    }
  }

  bindDeleteCoursesHandler(handler) {
    const delBtns = document.querySelectorAll(".delete-course-btn");

    delBtns.forEach((btn) => {
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
              this._deleteID = e.target.dataset.id;
              handler();
            }
          });
      });
    });
  }

  getDeleteId() {
    return this._deleteID;
  }
}

export default new CoursesView();
