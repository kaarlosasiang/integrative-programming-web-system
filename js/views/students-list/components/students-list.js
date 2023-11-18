export default function StudentsListTable() {
  return `
    <table id="data-table-combine" class="students-list-table table table-striped table-bordered table-td-valign-middle">
      <thead>
          <tr>
              <th class="text-nowrap">ID</th>
              <th class="text-nowrap">Full Name</th>
              <th class="text-nowrap">Course</th>
              <th class="text-nowrap">Institute</th>
              <th class="text-nowrap">Date Registered</th>
              <th class="text-nowrap">Edit</th>
          </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;
}
