import View from "../view.js";

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
import Header from "../../components/Header.js";
import PageLoader from "../../components/PageLoader.js";
import Sidebar from "../../components/Sidebar.js";
import Breadcrumb from "../../components/Breadcrumb.js";
import PageHeader from "../../components/PageHeader.js";
import Panel from "../../components/Panel.js";
import { AddInstituteForm } from "./components/AddInstituteForm.js";
import InstituteListTable from "./components/InstituteListTable.js";
import sweetalert2 from "../../../assets/js/sweetalert2.js";

class InstituteView extends View {
  _formData = {};
  _deleteID = "";
  _editFormData = {};
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
                    ${Breadcrumb("Subjects")}
                    ${PageHeader("Subjects")}
    
                    ${Panel(AddInstituteForm(), "Add Subject Form")}
                    ${Panel(InstituteListTable(), "Subjects List")}
                </di>
            </div>
    `;
  }

  initializeTableData(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      console.log("Data is empty");

    if ($(window).width() <= 767) {
      this.tableOptions.rowReorder = false;
      this.tableOptions.colReorder = false;
      this.tableOptions.autoFill = false;
    }

    if (data) {
      // Clear table data first every instantiation of the table
      this.tableOptions.data = [];
      // Feed data to the table
      data.data.forEach((institute) => {
        this.tableOptions.data.push({
          ID: institute.id,
          Title: institute.title,
          Slug: institute.slug,
          Description: institute.description,
          Edit: `
          <div class="d-flex">
            <a class="btn btn-sm btn-primary mr-1 edit-institute-btn" data-institute='${JSON.stringify(
              institute
            )}'>Edit</a>
            <a class="btn btn-sm btn-danger delete-institute-btn" data-id="${
              institute.id
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

  bindAddInstituteHandler(handler) {
    const form = document.getElementById("add-institute-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this._formData = {
        title: e.target.elements.title.value.trim(),
        slug: e.target.elements.slug.value.trim(),
        description: e.target.elements.description.value.trim(),
      };

      handler();
    });
  }

  getFormData() {
    return { ...this._formData };
  }

  bindDeleteInstituteHandler(handler) {
    const delBtns = document.querySelectorAll(".delete-institute-btn");

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

  bindEditInstituteHandler(handler) {
    const editBtns = document.querySelectorAll(".edit-institute-btn");

    editBtns.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const selectedInstitute = JSON.parse(e.target.dataset.institute);

        const { value: formValues } = await sweetalert2.fire({
          title: "Edit Subject",
          html: `
          <input class="form-control" style="display:none;" type="text" id="swal-input1" value="${
            selectedInstitute.id || ""
          }" name="description"/>
            <div class="col-lg-12 row align-items-center">
              <label class="col-4 col-form-label" for="fullname">Title:</label>
                  <div class="col-8">
                      <input class="form-control" type="text" id="swal-input2" value="${
                        selectedInstitute.title || ""
                      }" name="description"/>
                  </div>
            </div>
            <div class="col-lg-12 row align-items-center">
              <label class="col-4 col-form-label" for="fullname">Slug:</label>
                  <div class="col-8">
                      <input class="form-control" type="text" id="swal-input3" value="${
                        selectedInstitute.slug || ""
                      }" name="description"/>
                  </div>
            </div>
            <div class="col-lg-12 row align-items-center">
              <label class="col-4 col-form-label" for="fullname">Description:</label>
                  <div class="col-8">
                      <input class="form-control" type="text" id="swal-input4" value="${
                        selectedInstitute.description || ""
                      }" name="description"/>
                  </div>
            </div>
          `,
          focusConfirm: false,
          preConfirm: () => {
            return {
              id: document.getElementById("swal-input1").value,
              title: document.getElementById("swal-input2").value,
              slug: document.getElementById("swal-input3").value,
              description: document.getElementById("swal-input4").value,
            };
          },
        });

        if (formValues) {
          if (
            formValues.title !== selectedInstitute.title ||
            formValues.slug !== selectedInstitute.slug ||
            formValues.description !== selectedInstitute.description
          ) {
            this._editFormData = formValues;
            handler();
          }
        }
      });
    });
  }

  getEditFormData() {
    return this._editFormData;
  }
}

export default new InstituteView();
