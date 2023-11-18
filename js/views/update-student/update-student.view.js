import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import {
  UpdateStudentForm,
  clearForm,
} from "./components/UpdateStudentForm.js";

import "../../../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js";
import "../../../assets/js/demo/form-plugins.demo.js";
import "../../../assets/plugins/select2/dist/js/select2.min.js";

class UpdateStudentView extends View {
  formData = {};

  generateAppMarkup() {
    return `
            ${PageLoader()}
            <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
                ${Header()}
                ${Sidebar()}
    
                <div class="content" id="content">
                    ${Breadcrumb("Update Student")}
                    ${PageHeader("Update Student")}
    
                    ${Panel(UpdateStudentForm(), "Update Student Form")}
                </div>
            </div>
        `;
  }

  initalizeInputValues(student) {
    document.querySelector("#firstname").value = student.first_name;
    document.querySelector("#middlename").value = student.middle_name;
    document.querySelector("#lastname").value = student.last_name;
    document.querySelector("#birthday").value = student.birthday;
    document.querySelector("#gender").value = student.gender;
    document.querySelector("#contact_number").value = student.contact_number;
    document.querySelector("#province").value = student.province;
    document.querySelector("#municipality").value = student.municipality;
    document.querySelector("#barangay").value = student.barangay;
    document.querySelector("#purok").value = student.purok;
    document.querySelector("#zipcode").value = student.zipcode;
    document.querySelector("#guardian_name").value = student.guardian_name;
    document.querySelector("#guardian_contact").value =
      student.guardian_contact;
    document.querySelector("#guardian_address").value = student.guardian_name;

    const instituteSelect = document.querySelector("#institute");
    // Select institute based on current data of the student
    for (var i = 0; i < instituteSelect.options.length; i++) {
      if (instituteSelect.options[i].value === student.institute) {
        instituteSelect.selectedIndex = i;
        break;
      }
    }

    // Get Courses of selected Institute
    const selectedInstituteCourses =
      this.courses[`${instituteSelect.value.toLowerCase()}`];

    const courseSelect = document.querySelector("#course");

    // Populate courses dropdown based on selected institute
    if (selectedInstituteCourses) {
      for (let i = 0; i < selectedInstituteCourses.length; i++) {
        let option = document.createElement("option");
        option.value = selectedInstituteCourses[i];
        option.text = selectedInstituteCourses[i];

        courseSelect.appendChild(option);
      }
    }

    // Select course based on current data of the student
    for (var i = 0; i < courseSelect.options.length; i++) {
      console.log(i);
      if (courseSelect.options[i].value === student.course) {
        courseSelect.selectedIndex = i;
        break;
      }
    }
  }

  bindUpdateStudentHandler(handler) {
    const form = document.querySelector("#update-student-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.formData = {
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

  getFormData() {
    return { ...this.formData };
  }

  clearFormInputs() {
    clearForm();
  }
}

export default new UpdateStudentView();
