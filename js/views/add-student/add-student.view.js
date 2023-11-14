import Breadcrumb from "../../components/Breadcrumb.js";
import Header from "../../components/Header.js";
import PageHeader from "../../components/PageHeader.js";
import PageLoader from "../../components/PageLoader.js";
import Panel from "../../components/Panel.js";
import Sidebar from "../../components/Sidebar.js";
import View from "../view.js";
import AddStudentForm from "./components/add-student-form.js";

class AddStudentView extends View {
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
}

export default new AddStudentView();
