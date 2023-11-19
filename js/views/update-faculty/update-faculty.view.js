import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import UpdateFacultyForm from "./components/update-form.js";

class UpdateFacultyView extends View {
  generateAppMarkup() {
    return `
                ${PageLoader()}
                <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
                    ${Header()}
                    ${Sidebar()}
        
                    <div class="content" id="content">
                        ${Breadcrumb("Update Faculty")}
                        ${PageHeader("Update Faculty")}
        
                        ${Panel(UpdateFacultyForm(), "Update Faculty Form")}
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
  }
}

export default new UpdateFacultyView();
