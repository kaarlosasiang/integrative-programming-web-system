export default function AddStudentForm() {
  return `
    <form class="form-horizontal" data-parsley-validate="true" name="demo-form">
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="fullname">Full Name * :</label>
            <div class="col-md-8 col-sm-8">
                <input class="form-control" type="text" id="fullname" name="fullname" placeholder="Required" data-parsley-required="true" />
            </div>
        </div>
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="email">Email * :</label>
            <div class="col-md-8 col-sm-8">
                <input class="form-control" type="text" id="email" name="email" data-parsley-type="email" placeholder="Email" data-parsley-required="true" />
            </div>
        </div>
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="website">Website :</label>
            <div class="col-md-8 col-sm-8">
                <input class="form-control" type="url" id="website" name="website" data-parsley-type="url" placeholder="url" />
            </div>
        </div>
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="message">Message (20 chars min, 200 max) :</label>
            <div class="col-md-8 col-sm-8">
                <textarea class="form-control" id="message" name="message" rows="4" data-parsley-range="[20,200]" placeholder="Range from 20 - 200"></textarea>
            </div>
        </div>
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="message">Digits :</label>
            <div class="col-md-8 col-sm-8">
                <input class="form-control" type="text" id="digits" name="digits" data-parsley-type="digits" placeholder="Digits" />
            </div>
        </div>
        <div class="form-group row m-b-15">
            <label class="col-md-4 col-sm-4 col-form-label" for="message">Number :</label>
            <div class="col-md-8 col-sm-8">
                <input class="form-control" type="text" id="number" name="number" data-parsley-type="number" placeholder="Number" />
            </div>
        </div>
        <div class="form-group row m-b-0">
            <label class="col-md-4 col-sm-4 col-form-label">&nbsp;</label>
            <div class="col-md-8 col-sm-8">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
  `;
}
