import InstituteView from "../views/institute/institute.view.js";
import * as model from "../model.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";

const init = async () => {
  InstituteView.render();
  InstituteView.bindAddInstituteHandler(controlAddInstitute);

  initializeInstitutesTable();
};

const controlAddInstitute = async () => {
  const formData = InstituteView.getFormData();

  await model.addInstitute(formData);

  console.log(model.state.response);
  if (model.state.response.status === 201) {
    initializeInstitutesTable();
  }
};

const controlDeleteInstitute = async () => {
  const id = InstituteView.getDeleteId();

  await model.deleteInstitute(id);

  console.log(model.state.response);

  if (model.state.response.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Institute has been deleted.",
      icon: "success",
    });
    initializeInstitutesTable();
  }
};

const initializeInstitutesTable = async () => {
  await model.get("/institute.php");

  const res = model.state.response;
  if (res.status === 200) {
    InstituteView.initializeTableData(res.data);
    InstituteView.bindDeleteInstituteHandler(controlDeleteInstitute);
  }
};

init();
