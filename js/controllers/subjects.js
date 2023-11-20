import SubjectsView from "../views/subjects/subjects.view.js";
import * as model from "../model.js";

const init = async () => {
  SubjectsView.render();
  SubjectsView.bindAddSubjectHandler(controlAddSubject);

  await model.get("/subject.php");

  const res = model.state.response;
  console.log(res);
  if (res.status === 200) {
    SubjectsView.initializeTableData(res.data);
  }
};

const controlAddSubject = async () => {
  const formData = SubjectsView.getFormData();
  console.log(formData);

  await model.addSubject(formData);

  const res = model.state.response;

  if (res.status === 201) {
    SubjectsView.showToast("Subject was Added Successfully!", "success");
    await model.get("/subject.php");

    if (model.state.response.status === 200) {
      SubjectsView.initializeTableData(model.state.response.data);
    }
  }
};

init();
