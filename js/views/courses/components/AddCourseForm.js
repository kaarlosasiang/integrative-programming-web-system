export default function AddCourseForm() {
  return `
    <form class="form-horizontal" id="add-course-form" data-parsley-validate="true" method="POST" name="demo-form">
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
                    <input class="form-control" type="text" id="slug" name="slug" placeholder="Slug" data-parsley-required="true" -required/>
                </div>
            </div>

            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
            <label class="col-12 col-form-label" for="fullname">Description* :</label>
                <div class="col-12">
                    <input class="form-control" type="text" id="description" name="description" placeholder="Description" data-parsley-required="true" required/>
                </div>
            </div>
    
            <div class="form-group col-lg-3 col-md-6 col-sm-12 m-b-5">
            <label class="col-12 col-form-label" for="institute">Institute* :</label>
                <div class="col-12">
                    <select class="form-control" id="institute" name="institute" required>
                    </select>
                </div>
            </div>
            
        </div>
        <button type="submit" class="btn btn-md btn-primary m-5">Add Course</button>
    </form>
  `;
}
