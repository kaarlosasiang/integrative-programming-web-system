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
  courses = {
    fcdset: ["BSIT", "BSCE", "BITM", "BSM", "BSMRS"],
    fnahs: ["BSN"],
    fgbm: ["BSCRIM", "BSBA", "BSHM"],
  };

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

      const firstname = e.target.elements.firstname.value.trim();
      const middlename = e.target.elements.middlename.value.trim();
      const lastname = e.target.elements.lastname.value.trim();
      const birthday = e.target.elements.birthday.value.trim();
      const gender = e.target.elements.gender.value.trim();
      const contact = e.target.elements.contact_number.value.trim();
      const province = e.target.elements.province.value.trim();
      const municipality = e.target.elements.municipality.value.trim();
      const barangay = e.target.elements.barangay.value.trim();
      const street = e.target.elements.purok.value.trim();
      const zipcode = e.target.elements.zipcode.value.trim();
      const guardian_name = e.target.elements.guardian_name.value.trim();
      const guardian_contact = e.target.elements.guardian_contact.value.trim();
      const guardian_address = e.target.elements.guardian_address.value.trim();
      const institute = e.target.elements.institute.value.trim().toUpperCase();
      const course = e.target.elements.course.value.trim().toUpperCase();

      this._formData = {
        firstname,
        middlename,
        lastname,
        birthday,
        gender,
        contact,
        province,
        municipality,
        barangay,
        street,
        zipcode,
        guardian_name,
        guardian_contact,
        guardian_address,
        institute,
        course,
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
