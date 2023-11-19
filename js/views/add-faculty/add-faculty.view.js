import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import AddFacultyForm from "./components/AddFacultyForm.js";

class AddFacultyView extends View {
  formData = {};

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
        institute: e.target.elements.institute.value.trim().toUpperCase(),
        course: e.target.elements.course.value.trim().toUpperCase(),
      };

      handler();
    });
  }

  getFormData() {
    return { ...this.formData };
  }
}

export default new AddFacultyView();
