export default function Breadcrumb(pageTitle = "") {
  return `
    <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
        <li class="breadcrumb-item active">${pageTitle}</li>
    </ol>
`;
}
