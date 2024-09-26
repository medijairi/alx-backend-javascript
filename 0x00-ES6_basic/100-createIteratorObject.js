export default function createIteratorObject(report) {
  const employeesList = [];

  for (const department of Object.values(report.allEmployees)) {
    employeesList.push(...department);
  }

  return employeesList;
}
