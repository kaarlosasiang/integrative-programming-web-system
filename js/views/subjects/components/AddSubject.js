export function AddSubjectForm() {
  return `
      <form class="form-horizontal" id="add-subject-form" data-parsley-validate="true" method="POST" name="demo-form">
          <div class="row no-gutters">
  
              <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">Subject Code* :</label>
                  <div class="col-12">
                      <input class="form-control" type="text" id="subjectcode" name="subjectcode" placeholder="Subject Code" data-parsley-required="true" required/>
                  </div>
              </div>

              <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">Description* :</label>
                  <div class="col-12">
                      <input class="form-control" type="text" id="description" name="description" placeholder="description" data-parsley-required="true" required/>
                  </div>
              </div>

              <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="units">Subject Units* :</label>
                  <div class="col-12">
                      <select class="form-control" id="units" name="units" required>
                          <option value="" selected>Select Subject Units</option>
                          <option value="1">1 unit</option>
                          <option value="2">2 units</option>
                          <option value="3">3 units</option>
                      </select>
                  </div>
              </div>
              <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="subjecttype">Subject Type* :</label>
                  <div class="col-12">
                      <select class="form-control" id="subjecttype" name="subjecttype" required>
                          <option value="" selected>Select Subject Type</option>
                          <option value="lecture">Lecture</option>
                          <option value="laboratory">Laboratory</option>
                          <option value="lecture & laboratory">Lecture & Laboratory</option>
                      </select>
                  </div>
              </div>
              
          </div>
          <button type="submit" class="btn btn-md btn-primary m-5">Add Subject</button>
      </form>
    `;
}

export function clearForm() {
  document.querySelector("#firstname").value = "";
  document.querySelector("#middlename").value = "";
  document.querySelector("#lastname").value = "";
  document.querySelector("#birthday").value = "";
  document.querySelector("#gender").value = "";
  document.querySelector("#contact_number").value = "";
  document.querySelector("#province").value = "";
  document.querySelector("#municipality").value = "";
  document.querySelector("#barangay").value = "";
  document.querySelector("#purok").value = "";
  document.querySelector("#zipcode").value = "";
  document.querySelector("#guardian_name").value = "";
  document.querySelector("#guardian_contact").value = "";
  document.querySelector("#guardian_address").value = "";
  document.querySelector("#institute").value = "";
  document.querySelector("#course").value = "";
}
