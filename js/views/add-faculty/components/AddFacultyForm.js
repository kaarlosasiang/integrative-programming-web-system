export default function AddFacultyForm() {
  return `
          <form
          class="form-horizontal"
          id="add-faculty-form"
          data-parsley-validate="true"
          method="POST"
          name="demo-form"
          >
          <div class="row no-gutters">
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5"></div>
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5"></div>
  
              <div class="col-lg-12 col-md-6 col-sm-12 " style="padding:10px 15px;">
              <span>Full Name* :</span>
              </div>
  
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
              <div class="col-12">
                  <input
                  class="form-control"
                  value="Kaarlo Ruy"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  data-parsley-required="true"
                  require
                  />
              </div>
              </div>
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
              <div class="col-12">
                  <input
                  class="form-control"
                  value="Parilla"
                  type="text"
                  id="middlename"
                  name="middlename"
                  placeholder="Middle Name"
                  data-parsley-required="true"
                  require
                  />
              </div>
              </div>
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
              <div class="col-12">
                  <input
                  class="form-control"
                  value="Sasiang"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  data-parsley-required="true"
                  require
                  />
              </div>
              </div>
  
              <div class="form-group col-lg-4 col-md-12 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">
                  Date of Birth* :
              </label>
              <div
                  class="input-group date"
                  style="padding:0 15px;"
                  id="datepicker-default"
              >
                  <input
                  type="text"
                  class="form-control"
                  id="birthday"
                  name="birthday"
                  require
                  />
                  <div class="input-group-addon">
                  <i class="fa fa-calendar"></i>
                  </div>
              </div>
              </div>
  
              <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">
                  Gender* :
              </label>
              <div class="col-12">
                  <select class="form-control" id="gender" name="gender">
                  <option value="" selected>
                      Select a Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  </select>
              </div>
              </div>
  
              <div class="form-group col-lg-4 col-md-12 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="contact_number">
                  Contact Number * :
              </label>
              <div class="col-12">
                  <input
                  class="form-control"
                  value="09484244692"
                  type="number"
                  id="contact_number"
                  name="contact_number"
                  placeholder="Contact Number"
                  data-parsley-required="true"
                  require
                  />
              </div>
              </div>
  
              <div class="form-group col-lg-3 col-md-12 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">
                  Institute * :
              </label>
              <div class="col-12">
                  <select class="form-control" id="institute" name="institute">
                  </select>
              </div>
              </div>
  
              <div class="form-group col-lg-3 col-md-12 col-sm-12 m-b-5">
              <label class="col-12 col-form-label" for="fullname">
                  Course * :
              </label>
              <div class="col-12">
                  <select class="form-control" id="course" name="course">
                  <option disabled selected>
                      Select An Institute First
                  </option>
                  </select>
              </div>
              </div>
          </div>
          <button type="submit" class="btn btn-md btn-primary m-5">
              Add Faculty
          </button>
          </form>
    `;
}
