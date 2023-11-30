import SubjectsView from "../views/subjects/subjects.view.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";
import * as model from "../model.js";

const init = async () => {
  SubjectsView.render();
  SubjectsView.bindAddSubjectHandler(controlAddSubject);

  await model.get(" subject");

  const res = model.state.response;
  console.log(res);
  if (res.status === 200) {
    SubjectsView.initializeTableData(res.data);
    SubjectsView.bindDeleteSubjectHandler(controlDeleteSubject);
    SubjectsView.bindEditSubjectHandler(controlEditSubject);
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
      SubjectsView.bindDeleteSubjectHandler(controlDeleteSubject);
      SubjectsView.bindEditSubjectHandler(controlEditSubject);
    }
  }
};

const controlDeleteSubject = async () => {
  const delId = SubjectsView.getDeleteId();

  await model.deleteSubject(delId);
  if (model.state.response.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Subject has been deleted.",
      icon: "success",
    });
    await model.get("/subject.php");

    const res = model.state.response;
    if (res.status === 200) {
      SubjectsView.initializeTableData(res.data);
      SubjectsView.bindDeleteSubjectHandler(controlDeleteSubject);
      SubjectsView.bindEditSubjectHandler(controlEditSubject);
    }
  }
};

const controlEditSubject = async () => {
  const editData = SubjectsView.getEditData();

  const data = {
    description: editData.description,
    unit: editData.unit,
    type: editData.type,
  };

  await model.updateSubject(editData.code, data);

  console.log();

  if (model.state.response.status === 201) {
    sweetalert2.fire({
      title: "Updated!",
      text: "Subject has been updated.",
      icon: "success",
    });
    await model.get("/subject.php");

    const res = model.state.response;
    console.log(res);
    if (res.status === 200) {
      SubjectsView.initializeTableData(res.data);
      SubjectsView.bindDeleteSubjectHandler(controlDeleteSubject);
      SubjectsView.bindEditSubjectHandler(controlEditSubject);
    }
  } else {
    sweetalert2.fire({
      title: "Error!",
      text: "There was an error while updating the subject!",
      icon: "error",
    });
  }
};

init();
