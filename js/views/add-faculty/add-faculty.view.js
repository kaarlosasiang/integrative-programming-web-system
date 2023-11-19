import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import AddFacultyForm from "./components/AddFacultyForm.js";

import "../../../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js";
import "../../../assets/js/demo/form-plugins.demo.js";
import "../../../assets/plugins/select2/dist/js/select2.min.js";

class AddFacultyView extends View {
  formData = {};
  courses = [];

  generateAppMarkup() {
    return `
            ${PageLoader}
            <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
                ${Header()}
                ${Sidebar()}
    
                <div class="content" id="content">
                    ${Breadcrumb("Add Faculty")}
                    ${PageHeader("Add Faculty")}
    
                    ${Panel(AddFacultyForm(), "Add Faculty Form")}
                </div>
            </div>
        `;
  }

  bindAddFacultyHandler(handler) {
    const form = document.getElementById("add-faculty-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      this._formData = {
        firstname: e.target.elements.firstname.value.trim(),
        middlename: e.target.elements.middlename.value.trim(),
        lastname: e.target.elements.lastname.value.trim(),
        birthday: e.target.elements.birthday.value.trim(),
        gender: e.target.elements.gender.value.trim(),
        contact: e.target.elements.contact_number.value.trim(),
        institute: e.target.elements.institute.value.trim(),
        course: e.target.elements.course.value.trim(),
      };

      handler();
    });
  }

  getFormData() {
    return { ...this._formData };
  }

  clearForm() {
    document.querySelector("#firstname").value = "";
    document.querySelector("#middlename").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#birthday").value = "";
    document.querySelector("#gender").value = "";
    document.querySelector("#contact_number").value = "";
    document.querySelector("#institute").value = "";
    document.querySelector("#course").value = "";
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

  initializeCoursesDropdown(data) {
    const coursesSelect = document.getElementById("course");
    const instituteSelect = document.getElementById("institute");

    // Initialize courses array with sorted courses based on its institute
    this.courses.push(
      data.reduce((acc, current) => {
        const { institute, ...rest } = current;

        if (!acc[institute]) {
          acc[institute] = [];
        }

        acc[institute].push(rest);

        return acc;
      }, {})
    );

    instituteSelect.addEventListener("change", (e) => {
      // Clear all options every change
      coursesSelect.innerHTML = "";
      const institute = e.target.value;
      const selectedInstituteCourses = this.courses[0][`${institute}`];
      console.log(selectedInstituteCourses);

      if (selectedInstituteCourses) {
        for (let i = 0; i < selectedInstituteCourses.length; i++) {
          let option = document.createElement("option");
          option.value = selectedInstituteCourses[i].slug;
          option.text = selectedInstituteCourses[i].title;
          coursesSelect.appendChild(option);
        }
      } else {
        let option = document.createElement("option");
        option.value = "";
        option.text = "No Courses Available";
        coursesSelect.appendChild(option);
      }
    });
  }
}

export default new AddFacultyView();
