export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      const employees = departments[currentIndex];
      const done = currentIndex >= departments.length && employeeIndex >= employees.length;

      if (employeeIndex >= employees.length) {
        currentIndex++;
        employeeIndex = 0;
      }

      return {
        value: done ? undefined : employees[employeeIndex++],
        done: done
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}