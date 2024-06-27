export default function createEmployeesObject(departmentName, employees) {
  const person = {
    [departmentName]: employees,
  };

  return person;
}
