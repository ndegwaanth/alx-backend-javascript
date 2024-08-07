interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firsName: string, lastName: string):string =>{
    return `${firsName.charAt(0)}.${lastName};`
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: true,
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Los Angeles",
  yearsOfExperience: 5,
  contract: false,
};

const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Boston",
  numberOfReports: 10,
};


console.log(teacher1);
console.log(teacher2);
console.log(director1)

console.log(printTeacher("John", "Doe"));  // Output: J. Doe
console.log(printTeacher("Jane", "Smith"));  // Output: J. Smith

// Interface for the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentInterface = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
