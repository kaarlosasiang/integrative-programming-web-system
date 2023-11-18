export function AddStudentForm() {
  return `
    <form class="form-horizontal" id="register-student-form" data-parsley-validate="true" method="POST" name="demo-form">
        <div class="row no-gutters">

            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5"></div>
            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5"></div>

            <div class="col-lg-12 col-md-6 col-sm-12 " style="padding:10px 15px;">
            <span>Full Name* :</span>
            </div>

            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Kaarlo Ruy" type="text" id="firstname" name="firstname" placeholder="First Name" data-parsley-required="true" require/>
                </div>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Parilla" type="text" id="middlename" name="middlename" placeholder="Middle Name" data-parsley-required="true" require/>
                </div>
            </div>
            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Sasiang" type="text" id="lastname" name="lastname" placeholder="Last Name" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="form-group col-lg-4 col-md-12 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Date of Birth* :</label>
                <div class="input-group date" style="padding:0 15px;" id="datepicker-default">
                    <input type="text" class="form-control" id="birthday" name="birthday" require/>
                    <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                    </div>
				</div>
            </div>

            <div class="form-group col-lg-4 col-md-6 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Gender* :</label>
                <div class="col-12">
                    <select class="form-control" id="gender" name="gender">
                        <option value="" selected>Select a Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            <div class="form-group col-lg-4 col-md-12 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="contact_number">Contact Number * :</label>
                <div class="col-12">
                    <input class="form-control" value="09484244692" type="number" id="contact_number" name="contact_number" placeholder="Contact Number" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="col-lg-12 col-md-6 col-sm-12 " style="padding:10px 15px;">
                <span>Home Address* :</span>
            </div>

            <div class="form-group col-lg-2 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Davao Oriental" type="text" id="province" name="province" placeholder="Province" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="form-group col-lg-2 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Lupon" type="text" id="municipality" name="municipality" placeholder="Municipality" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="form-group col-lg-2 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Bagumbayan" type="text" id="barangay" name="barangay" placeholder="Barangay" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="form-group col-lg-2 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Mabuhay" type="text" id="purok" name="purok" placeholder="Purok" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="form-group col-lg-2 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="8207" type="text" id="zipcode" name="zipcode" placeholder="Zip Code" data-parsley-required="true" require/>
                </div>
            </div>

            <div class="col-lg-12 col-md-6 col-sm-12 " style="padding:10px 15px;">
            <span>In-case of Emergency* :</span>
            </div>

            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Renilla P. Sasiang" type="text" id="guardian_name" name="guardian_name" placeholder="Name of Guardian" data-parsley-required="true" require/>
                </div>
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="09079782941" type="text" id="guardian_contact" name="guardian_contact" placeholder="Contact Number" data-parsley-required="true" require/>
                </div>
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <div class="col-12">
                    <input class="form-control" value="Lupon" type="text" id="guardian_address" name="guardian_address" placeholder="Address" data-parsley-required="true" require/>
                </div>
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
            </div>
            
            <div class="form-group col-lg-3 col-md-12 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Institute * :</label>
                <div class="col-12">
                <select class="form-control" id="institute" name="institute" >
                  <option disabled selected>Select An Institute</option>
                  <option value="fcdset">FCDSET</option>
                  <option value="fnahs">FNAHS</option>
                  <option value="fals">FALS</option>
                  <option value="fted">FTED</option>
                  <option value="fgbm">FGBM</option>
              </select>
                </div>
            </div>

            <div class="form-group col-lg-3 col-md-12 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Course * :</label>
                <div class="col-12">
                    <select class="form-control" id="course" name="course">
                        <option disabled selected>Select An Institute First</option>
                    </select>
                </div>
            </div>
            
        </div>
        <button type="submit" class="btn btn-md btn-primary m-5">Register Student</button>
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
