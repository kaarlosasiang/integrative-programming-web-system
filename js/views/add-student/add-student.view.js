import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import { AddStudentForm, clearForm } from "./components/add-student-form.js";

import "../../../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js";
import "../../../assets/js/demo/form-plugins.demo.js";
import "../../../assets/plugins/select2/dist/js/select2.min.js";

class AddStudentView extends View {
  _formData = {};

  constructor() {
    super();
  }

  generateAppMarkup() {
    return `
        ${PageLoader()}
        <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
            ${Header()}
            ${Sidebar()}

            <div class="content" id="content">
                ${Breadcrumb("Add Student")}
                ${PageHeader("Add Student")}

                ${Panel(AddStudentForm(), "Add Student Form")}
            </div>
        </div>
    `;
  }

  bindFormSubmitHandler(handler) {
    const form = document.getElementById("register-student-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this._formData = {
        firstname: e.target.elements.firstname.value.trim(),
        middlename: e.target.elements.middlename.value.trim(),
        lastname: e.target.elements.lastname.value.trim(),
        birthday: e.target.elements.birthday.value.trim(),
        gender: e.target.elements.gender.value.trim(),
        contact: e.target.elements.contact_number.value.trim(),
        province: e.target.elements.province.value.trim(),
        municipality: e.target.elements.municipality.value.trim(),
        barangay: e.target.elements.barangay.value.trim(),
        street: e.target.elements.purok.value.trim(),
        zipcode: e.target.elements.zipcode.value.trim(),
        guardian_name: e.target.elements.guardian_name.value.trim(),
        guardian_contact: e.target.elements.guardian_contact.value.trim(),
        guardian_address: e.target.elements.guardian_address.value.trim(),
        institute: e.target.elements.institute.value.trim().toUpperCase(),
        course: e.target.elements.course.value.trim().toUpperCase(),
      };

      handler();
    });
  }

  bindInstituteSelectHandler() {
    document.addEventListener("DOMContentLoaded", () => {
      const selectInstituteField = document.getElementById("institute");
      const selectCoursesField = document.getElementById("course");

      selectInstituteField.addEventListener("change", (e) => {
        // Clear all options
        selectCoursesField.innerHTML = "";

        const institute = e.target.value;
        const selectedInstituteCourses = this.courses[`${institute}`];

        if (selectedInstituteCourses) {
          for (let i = 0; i < selectedInstituteCourses.length; i++) {
            let option = document.createElement("option");
            option.value = selectedInstituteCourses[i].toLowerCase();
            option.text = selectedInstituteCourses[i];

            selectCoursesField.appendChild(option);
          }
        }
      });
    });
  }

  getFormData() {
    return { ...this._formData };
  }

  clearFormInputs() {
    clearForm();
  }
}

export default new AddStudentView();
