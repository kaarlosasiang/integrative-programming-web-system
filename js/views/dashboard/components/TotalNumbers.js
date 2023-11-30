export default function TotalNumbers(total_student, total_faculty) {
  return `
          <!-- begin col-3 -->
          <div class="col-xl-6 col-md-6">
            <div class="widget widget-stats bg-blue">
              <div class="stats-icon"><i class="fa fa-users"></i></div>
              <div class="stats-info">
                <h4>TOTAL STUDENTS</h4>
                <p>${total_student}</p>
              </div>
              <div class="stats-link">
                <a href="javascript:;"
                  >View Detail <i class="fa fa-arrow-alt-circle-right"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- end col-3 -->
          <!-- begin col-3 -->
          <div class="col-xl-6 col-md-6">
            <div class="widget widget-stats bg-orange">
              <div class="stats-icon"><i class="fa fa-users"></i></div>
              <div class="stats-info">
                <h4>TOTAL FACULTIES</h4>
                <p>${total_faculty}</p>
              </div>
              <div class="stats-link">
                <a href="javascript:;"
                  >View Detail <i class="fa fa-arrow-alt-circle-right"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- end col-3 -->
  `;
}
