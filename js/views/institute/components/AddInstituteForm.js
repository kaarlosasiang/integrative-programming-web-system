export function AddInstituteForm() {
  return `
        <form class="form-horizontal" id="add-institute-form" data-parsley-validate="true" method="POST" name="demo-form">
            <div class="row no-gutters">
  
                <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Title* :</label>
                    <div class="col-12">
                        <input class="form-control" type="text" id="title" name="title" placeholder="Title" data-parsley-required="true" required/>
                    </div>
                </div>
  
                <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Slug* :</label>
                    <div class="col-12">
                        <input class="form-control" type="text" id="slug" name="slug" placeholder="Slug" data-parsley-required="true" required/>
                    </div>
                </div>

                <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
                <label class="col-12 col-form-label" for="fullname">Description* :</label>
                    <div class="col-12">
                        <input class="form-control" type="text" id="description" name="description" placeholder="description" data-parsley-required="true" required/>
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
