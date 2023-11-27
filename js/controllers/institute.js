import InstituteView from "../views/institute/institute.view.js";
import * as model from "../model.js";

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

const initializeInstitutesTable = async () => {
  await model.get("/institute.php");

  const res = model.state.response;
  console.log(res);
  if (res.status === 200) {
    InstituteView.initializeTableData(res.data);
  }
};

init();
